/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */

import * as ts from 'typescript';

const IS_READY_BODY = ts.factory.createReturnStatement(
  ts.factory.createBinaryExpression(
    ts.factory.createBinaryExpression(
      ts.factory.createTypeOfExpression(
        ts.factory.createIdentifier('__webpack_modules__'),
      ),
      ts.SyntaxKind.ExclamationEqualsEqualsToken,
      ts.factory.createStringLiteral('undefined'),
    ),
    ts.SyntaxKind.AmpersandAmpersandToken,
    ts.factory.createCallChain(
      ts.factory.createIdentifier('Boolean'),
      void 0,
      void 0,
      [
        ts.factory.createElementAccessChain(
          ts.factory.createIdentifier('__webpack_modules__'),
          void 0,
          ts.factory.createCallChain(
            ts.factory.createPropertyAccessChain(
              ts.factory.createThis(),
              void 0,
              ts.factory.createIdentifier('resolve'),
            ),
            void 0,
            void 0,
            [ts.factory.createIdentifier('props')],
          ),
        ),
      ],
    ),
  ),
);

const IS_READY_PROPERTY = ts.factory.createMethodDeclaration(
  void 0,
  void 0,
  void 0,
  'isReady',
  void 0,
  void 0,
  [ts.factory.createParameterDeclaration(void 0, void 0, void 0, 'props')],
  void 0,
  ts.factory.createBlock([IS_READY_BODY]),
);

export function createIsReady() {
  return IS_READY_PROPERTY;
}
