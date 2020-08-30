/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */

import * as ts from 'typescript';
import { State } from '../State';

export function createRequireAsync(
  state: State,
  target: ts.CallExpression,
  loader: ts.FunctionExpression | ts.ArrowFunction,
): ts.ObjectLiteralElementLike {
  return ts.factory.createPropertyAssignment('requireAsync', loader);
}
