/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 23:37:34
 *
 * some of the code comes from
 * {@link https://github.com/smooth-code/loadable-components/blob/master/packages/babel-plugin/src/properties/chunkName.js}
 */
import * as ts from 'typescript';
import * as vm from 'vm';
import { State } from '../State';

// https://github.com/webpack/webpack/blob/3f135f59b04b7a85e50564d882f860db67a754bf/lib/javascript/JavascriptParser.js#L91
const webpackCommentRegExp = new RegExp(/(^|\W)webpack[A-Z]+[A-Za-z]+:/);
const JS_PATH_REGEXP = /^[./]+|(\.js$)/g;
const MATCH_LEFT_HYPHENS_REPLACE_REGEX = /^-/g;
const WEBPACK_PATH_NAME_NORMALIZE_REPLACE_REGEX = /[^a-zA-Z0-9_!§$()=\-^°]+/g;
const WEBPACK_MATCH_PADDED_HYPHENS_REPLACE_REGEX = /^-|-$/g;

interface WebpackComment {
  webpackChunkName?: string;
}

interface LeadingCommentsState {
  webpack: WebpackComment;
  others: [ts.CommentRange, string][];
  hasWebpack: boolean;
}

function getLeadingComments(
  state: State,
  requestNode: ts.Node,
): LeadingCommentsState {
  const result: LeadingCommentsState = {
    webpack: {},
    others: [],
    hasWebpack: false,
  };
  const commentRanges =
    ts.getLeadingCommentRanges(state.sourceFile.text, requestNode.pos) || [];
  for (const range of commentRanges) {
    let comment = state.sourceFile.text.substring(
      range.pos + 2,
      range.end - (range.kind === ts.SyntaxKind.MultiLineCommentTrivia ? 2 : 0),
    );
    if (!result.hasWebpack && webpackCommentRegExp.test(comment)) {
      try {
        result.webpack = vm.runInNewContext(`({ ${comment} })`) || {};
        result.hasWebpack = true;
      } catch (e) {
        throw new SyntaxError(
          `${e} while parsing webpack comment: /*${comment}*/`,
        );
      }
    } else {
      result.others.push([range, comment]);
    }
  }
  return result;
}

// see {@link https://stackoverflow.com/a/55173278/4380247}
function replaceWebpackComment(
  state: State,
  request: ts.Node,
  commentsState: LeadingCommentsState,
) {
  const fullStart = request.getFullStart();
  const visitor: ts.Visitor = (child: ts.Node) => {
    if (child.getFullStart() === fullStart) {
      ts.setTextRange(child, { pos: child.getStart(), end: child.getEnd() });
    }
    return ts.visitEachChild(child, visitor, state.context);
  };
  ts.visitEachChild(request, visitor, state.context);
  ts.setTextRange(request, { pos: request.getStart(), end: request.getEnd() });
  const webpackComment = (Object.keys(commentsState.webpack) as Array<
    keyof WebpackComment
  >)
    .map((p) => {
      return p + ': ' + JSON.stringify(commentsState.webpack[p]);
    })
    .join(',');
  ts.addSyntheticLeadingComment(
    request,
    ts.SyntaxKind.MultiLineCommentTrivia,
    ` ${webpackComment} `,
    commentsState.others.length > 0,
  );
  for (const [range, text] of commentsState.others) {
    ts.addSyntheticLeadingComment(
      request,
      range.kind,
      text,
      range.hasTrailingNewLine,
    );
  }
}

export function createChunkName(
  state: State,
  target: ts.CallExpression,
  loader: ts.FunctionExpression | ts.ArrowFunction,
): ts.ObjectLiteralElementLike {
  const requestNode = target.arguments[0];
  const leadingComments = getLeadingComments(state, requestNode);
  let chunkNameNode: ts.Expression;
  let webpackChunkName: string;
  if (
    !ts.isTemplateExpression(requestNode) &&
    leadingComments.webpack.webpackChunkName
  ) {
    webpackChunkName = leadingComments.webpack.webpackChunkName;
    chunkNameNode = ts.factory.createStringLiteral(webpackChunkName);
  } else if (ts.isTemplateExpression(requestNode)) {
    webpackChunkName = requestNode.head.text
      .replace(WEBPACK_PATH_NAME_NORMALIZE_REPLACE_REGEX, '-')
      .replace(MATCH_LEFT_HYPHENS_REPLACE_REGEX, '');
    chunkNameNode = ts.factory.createCallExpression(
      ts.factory.createPropertyAccessChain(
        ts.factory.createTemplateExpression(
          ts.factory.createTemplateHead(webpackChunkName),
          requestNode.templateSpans.map((span, index) => {
            const text = span.literal.text.replace(
              WEBPACK_PATH_NAME_NORMALIZE_REPLACE_REGEX,
              '-',
            );
            return ts.factory.createTemplateSpan(
              span.expression,
              index === requestNode.templateSpans.length - 1
                ? ts.factory.createTemplateTail(text)
                : ts.factory.createTemplateMiddle(text),
            );
          }),
        ),
        void 0,
        'replace',
      ),
      void 0,
      [
        ts.factory.createRegularExpressionLiteral(
          `/${WEBPACK_PATH_NAME_NORMALIZE_REPLACE_REGEX.source}/g`,
        ),
        ts.factory.createStringLiteral('-'),
      ],
    );
    webpackChunkName += '[request]';
  } else if (
    ts.isStringLiteral(requestNode) ||
    ts.isNoSubstitutionTemplateLiteral(requestNode)
  ) {
    webpackChunkName = requestNode.text
      .replace(JS_PATH_REGEXP, '')
      .replace(WEBPACK_PATH_NAME_NORMALIZE_REPLACE_REGEX, '-')
      .replace(WEBPACK_MATCH_PADDED_HYPHENS_REPLACE_REGEX, '');
    chunkNameNode = ts.factory.createStringLiteral(webpackChunkName);
  } else {
    throw new Error(`unexpected import argument kind: ${requestNode}`);
  }
  if (leadingComments.webpack.webpackChunkName !== webpackChunkName) {
    leadingComments.webpack.webpackChunkName = webpackChunkName;
    replaceWebpackComment(state, requestNode, leadingComments);
  }

  return ts.factory.createMethodDeclaration(
    void 0,
    void 0,
    void 0,
    'chunkName',
    void 0,
    void 0,
    loader.parameters,
    void 0,
    ts.factory.createBlock([ts.factory.createReturnStatement(chunkNameNode)]),
  );
}
