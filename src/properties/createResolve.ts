/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */

import * as ts from 'typescript';
import { State } from '../State';

export function createResolve(
  state: State,
  target: ts.CallExpression,
  loader: ts.FunctionExpression | ts.ArrowFunction,
): ts.ObjectLiteralElementLike {
  const requestNode = target.arguments[0];
  return ts.factory.createMethodDeclaration(
    void 0,
    void 0,
    void 0,
    'resolve',
    void 0,
    void 0,
    loader.parameters,
    void 0,
    ts.factory.createBlock([
      ts.factory.createIfStatement(
        ts.factory.createPropertyAccessChain(
          ts.factory.createIdentifier('require'),
          void 0,
          'resolveWeak',
        ),
        ts.factory.createReturnStatement(
          ts.factory.createCallChain(
            ts.factory.createPropertyAccessChain(
              ts.factory.createIdentifier('require'),
              void 0,
              'resolveWeak',
            ),
            void 0,
            void 0,
            [requestNode],
          ),
        ),
        ts.factory.createReturnStatement(
          ts.factory.createCallChain(
            ts.factory.createCallChain(
              ts.factory.createIdentifier('eval'),
              void 0,
              void 0,
              [ts.factory.createStringLiteral('require.resolve')],
            ),
            void 0,
            void 0,
            [requestNode],
          ),
        ),
      ),
    ]),
  );
}
