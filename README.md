# typescript-loadable-components-plugin

A custom transformer of typescript that is used to add some necessary properties to loadable-components.

This transformer helps you to transform code like:

```typescript jsx
import loadable from '@loadable/component';

export const LazyFoo = loadable(() => import('./input/AsyncDefaultComponent'));
```

to the following format:

```typescript jsx
import loadable from 'loadable-components';

export const LazyFoo = loadable({
  chunkName() {
    return 'input-AsyncDefaultComponent';
  },
  isReady(props) {
    return (
      typeof __webpack_modules__ !== 'undefined' &&
      Boolean(__webpack_modules__[this.resolve(props)])
    );
  },
  requireAsync: () =>
    import(
      /* "webpackChunkName":"input-AsyncDefaultComponent" */ './input/AsyncDefaultComponent'
    ),
  requireSync(props) {
    return typeof '__webpack_require__' !== 'undefined'
      ? __webpack_require__(this.resolve(props))
      : eval('module.require')(this.resolve(props));
  },
  resolve() {
    if (require.resolveWeak)
      return require.resolveWeak(
        /* "webpackChunkName":"input-AsyncDefaultComponent" */ './input/AsyncDefaultComponent',
      );
    else
      return eval('require.resolve')(
        /* "webpackChunkName":"input-AsyncDefaultComponent" */ './input/AsyncDefaultComponent',
      );
  },
});
```

## Install

```bash
yarn add typescript-loadable-components-plugin -D

# or npm
npm install typescript-loadable-components-plugin -D
```

## Usage

### with `ttypescript`

you just need add `typescript--plugin` to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "transform": "typescript-loadable-components-plugin"
      }
    ]
  }
}
```

### with `webpack` and `ts-loader`

you need to add the following options to your loader:

```js
import { createLoadableComponentsTransformer } from 'typescript-loadable-components-plugin';
export default {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader', // or awesome-typescript-loader
        options: {
          getCustomTransformers: (program) => ({
            before: [createLoadableComponentsTransformer(program, {})],
          }),
        },
      },
    ],
  },
};
```

## Options

_No options needed_

## Notes

**Supported syntax**:

1. loadable default component: `loadable(() => import(...), [options])`
2. loadable lib component: `loadable.lib(() => import(...), [options])`

## LICENSE

MIT

    The MIT License (MIT)

    Copyright (c) 2019 acrazing

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
