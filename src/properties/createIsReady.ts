/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */

import * as ts from 'typescript';

const IS_READY_BODY = ts.createReturn(
  ts.createBinary(
    ts.createBinary(
      ts.createTypeOf(ts.createIdentifier('__webpack_modules__')),
      ts.SyntaxKind.ExclamationEqualsEqualsToken,
      ts.createStringLiteral('undefined'),
    ),
    ts.SyntaxKind.AmpersandAmpersandToken,
    ts.createCall(ts.createIdentifier('Boolean'), void 0, [
      ts.createElementAccess(
        ts.createIdentifier('__webpack_modules__'),
        ts.createCall(
          ts.createPropertyAccess(
            ts.createThis(),
            ts.createIdentifier('resolve'),
          ),
          void 0,
          [ts.createIdentifier('props')],
        ),
      ),
    ]),
  ),
);

const IS_READY_PROPERTY = ts.createMethod(
  void 0,
  void 0,
  void 0,
  'isReady',
  void 0,
  void 0,
  [ts.createParameter(void 0, void 0, void 0, 'props')],
  void 0,
  ts.createBlock([IS_READY_BODY]),
);

export function createIsReady() {
  return IS_READY_PROPERTY;
}
