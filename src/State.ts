/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 23:01:37
 */

import * as ts from 'typescript';
import { LoadableComponentsTransformerOptions } from './types';

export class State {
  program: ts.Program | undefined;
  context!: ts.TransformationContext;
  sourceFile!: ts.SourceFile;

  constructor(
    program: ts.Program | undefined,
    options: Partial<LoadableComponentsTransformerOptions>,
  ) {
    this.program = program;
  }
}
