/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */

import * as ts from 'typescript';

const REQUIRE_SYNC_BODY = ts.factory.createReturnStatement(
  ts.factory.createConditionalExpression(
    ts.factory.createBinaryExpression(
      ts.factory.createTypeOfExpression(
        ts.factory.createIdentifier('__webpack_require__'),
      ),
      ts.SyntaxKind.ExclamationEqualsEqualsToken,
      ts.factory.createStringLiteral('undefined'),
    ),
    ts.factory.createToken(ts.SyntaxKind.QuestionToken),
    ts.factory.createCallExpression(
      ts.factory.createIdentifier('__webpack_require__'),
      void 0,
      [
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createThis(),
            'resolve',
          ),
          void 0,
          [ts.factory.createIdentifier('props')],
        ),
      ],
    ),
    ts.factory.createToken(ts.SyntaxKind.ColonToken),
    ts.factory.createCallExpression(
      ts.factory.createCallExpression(
        ts.factory.createIdentifier('eval'),
        void 0,
        [ts.factory.createStringLiteral('module.require')],
      ),
      void 0,
      [
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createThis(),
            'resolve',
          ),
          void 0,
          [ts.factory.createIdentifier('props')],
        ),
      ],
    ),
  ),
);

const REQUIRE_SYNC_PROPERTY = ts.factory.createMethodDeclaration(
  void 0,
  void 0,
  void 0,
  'requireSync',
  void 0,
  void 0,
  [
    ts.factory.createParameterDeclaration(
      void 0,
      void 0,
      void 0,
      'props',
      void 0,
      void 0,
    ),
  ],
  void 0,
  ts.factory.createBlock([REQUIRE_SYNC_BODY]),
);

export function createRequireSync(): ts.ObjectLiteralElementLike {
  return REQUIRE_SYNC_PROPERTY;
}
