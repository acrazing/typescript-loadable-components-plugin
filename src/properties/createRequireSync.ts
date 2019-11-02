/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */

import * as ts from 'typescript';

const REQUIRE_SYNC_BODY = ts.createReturn(
  ts.createConditional(
    ts.createBinary(
      ts.createTypeOf(ts.createLiteral('__webpack_require__')),
      ts.SyntaxKind.ExclamationEqualsEqualsToken,
      ts.createStringLiteral('undefined'),
    ),
    ts.createToken(ts.SyntaxKind.QuestionToken),
    ts.createCall(ts.createIdentifier('__webpack_require__'), void 0, [
      ts.createCall(
        ts.createPropertyAccess(ts.createThis(), 'resolve'),
        void 0,
        [ts.createIdentifier('props')],
      ),
    ]),
    ts.createToken(ts.SyntaxKind.ColonToken),
    ts.createCall(
      ts.createCall(ts.createIdentifier('eval'), void 0, [
        ts.createStringLiteral('module.require'),
      ]),
      void 0,
      [
        ts.createCall(
          ts.createPropertyAccess(ts.createThis(), 'resolve'),
          void 0,
          [ts.createIdentifier('props')],
        ),
      ],
    ),
  ),
);

const REQUIRE_SYNC_PROPERTY = ts.createMethod(
  void 0,
  void 0,
  void 0,
  'requireSync',
  void 0,
  void 0,
  [ts.createParameter(void 0, void 0, void 0, 'props', void 0, void 0)],
  void 0,
  ts.createBlock([REQUIRE_SYNC_BODY]),
);

export function createRequireSync(): ts.ObjectLiteralElementLike {
  return REQUIRE_SYNC_PROPERTY;
}
