/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 23:59:07
 */

import * as ts from 'typescript';

export function getRealExpression(node: ts.Node): ts.Node {
  return ts.isParenthesizedExpression(node)
    ? getRealExpression(node.expression)
    : ts.isAsExpression(node)
    ? getRealExpression(node.expression)
    : node;
}

export function getImportCallList(body: ts.ConciseBody): ts.CallExpression[] {
  const imports: ts.CallExpression[] = [];
  const visitor = (node: ts.Node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword
    ) {
      imports.push(node);
    }
    ts.forEachChild(node, visitor);
  };
  visitor(body);
  return imports;
}

export function createStatements(text: string) {
  const { statements } = ts.createSourceFile(
    '',
    text,
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.JS,
  );
  const visitor = (node: ts.Node) => {
    node.pos = -1;
    node.end = -1;
    node.flags = ts.NodeFlags.Synthesized;
    ts.forEachChild(node, visitor);
  };
  statements.forEach(visitor);
  return statements;
}
