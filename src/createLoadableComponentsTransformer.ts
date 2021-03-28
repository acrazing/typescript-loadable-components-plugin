/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 23:01:37
 */

import * as ts from 'typescript';
import { createChunkName } from './properties/createChunkName';
import { createIsReady } from './properties/createIsReady';
import { createRequireAsync } from './properties/createRequireAsync';
import { createRequireSync } from './properties/createRequireSync';
import { createResolve } from './properties/createResolve';
import { State } from './State';
import { LoadableComponentsTransformerOptions } from './types';
import { getImportCallList, getRealExpression } from './utils';

const properties = [
  createChunkName,
  createIsReady,
  createRequireAsync,
  createRequireSync,
  createResolve,
];

function visitLoadableComponents(state: State, node: ts.Node) {
  if (!ts.isCallExpression(node) || node.arguments.length === 0) {
    return node;
  }
  const loader = getRealExpression(node.arguments[0]);
  if (!ts.isFunctionExpression(loader) && !ts.isArrowFunction(loader)) {
    return node;
  }
  let identifier = getRealExpression(node.expression);
  if (
    ts.isPropertyAccessExpression(identifier) &&
    identifier.name.escapedText === 'lib'
  ) {
    identifier = getRealExpression(identifier.expression);
  }
  if (!ts.isIdentifier(identifier) || identifier.escapedText !== 'loadable') {
    return node;
  }
  const importList = getImportCallList(loader.body);
  if (importList.length === 0) {
    return node;
  }
  if (importList.length > 1) {
    throw new Error(
      'loadable: multiple import calls inside `loadable()` function are not supported.',
    );
  }
  const args = node.arguments.slice();
  args[0] = ts.factory.createObjectLiteralExpression(
    properties.map((fn) => fn(state, importList[0], loader)),
    true,
  );
  return ts.factory.createCallExpression(node.expression, void 0, args);
}

export function createLoadableComponentsTransformer(
  program: ts.Program | undefined,
  options: Partial<LoadableComponentsTransformerOptions>,
): ts.TransformerFactory<ts.SourceFile> {
  const state = new State(program, options);
  return (context) => {
    state.context = context;
    return (source) => {
      state.sourceFile = source;
      const visitor: ts.Visitor = (node) => {
        node = visitLoadableComponents(state, node);
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(source, visitor);
    };
  };
}
