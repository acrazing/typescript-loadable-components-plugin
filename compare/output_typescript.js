/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 20:44:29
 */
import loadable from '@loadable/component';
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
export const DefaultLib = loadable.lib({
  chunkName() {
    return 'input-AsyncComponent';
  },
  isReady(props) {
    return (
      typeof __webpack_modules__ !== 'undefined' &&
      Boolean(__webpack_modules__[this.resolve(props)])
    );
  },
  requireAsync: () =>
    import(
      /* "webpackChunkName":"input-AsyncComponent" */ './input/AsyncComponent'
    ),
  requireSync(props) {
    return typeof '__webpack_require__' !== 'undefined'
      ? __webpack_require__(this.resolve(props))
      : eval('module.require')(this.resolve(props));
  },
  resolve() {
    if (require.resolveWeak)
      return require.resolveWeak(
        /* "webpackChunkName":"input-AsyncComponent" */ './input/AsyncComponent',
      );
    else
      return eval('require.resolve')(
        /* "webpackChunkName":"input-AsyncComponent" */ './input/AsyncComponent',
      );
  },
});
export const WithOptionsLoadable = loadable(
  {
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
  },
  {
    ssr: true,
  },
);
export const WithOptionsLib = loadable.lib(
  {
    chunkName() {
      return 'input-AsyncComponent';
    },
    isReady(props) {
      return (
        typeof __webpack_modules__ !== 'undefined' &&
        Boolean(__webpack_modules__[this.resolve(props)])
      );
    },
    requireAsync: () =>
      import(
        /* "webpackChunkName":"input-AsyncComponent" */ './input/AsyncComponent'
      ),
    requireSync(props) {
      return typeof '__webpack_require__' !== 'undefined'
        ? __webpack_require__(this.resolve(props))
        : eval('module.require')(this.resolve(props));
    },
    resolve() {
      if (require.resolveWeak)
        return require.resolveWeak(
          /* "webpackChunkName":"input-AsyncComponent" */ './input/AsyncComponent',
        );
      else
        return eval('require.resolve')(
          /* "webpackChunkName":"input-AsyncComponent" */ './input/AsyncComponent',
        );
    },
  },
  {
    ssr: true,
  },
);
export const NonSsrLoadable = loadable(
  {
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
  },
  {
    ssr: false,
  },
);
export const DynamicLoadable = loadable(
  {
    chunkName(props) {
      return `input-${props.page}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, '-');
    },
    isReady(props) {
      return (
        typeof __webpack_modules__ !== 'undefined' &&
        Boolean(__webpack_modules__[this.resolve(props)])
      );
    },
    requireAsync: (props) =>
      import(
        /* "webpackChunkName":"input-[request]" */ `./input/${props.page}`
      ),
    requireSync(props) {
      return typeof '__webpack_require__' !== 'undefined'
        ? __webpack_require__(this.resolve(props))
        : eval('module.require')(this.resolve(props));
    },
    resolve(props) {
      if (require.resolveWeak)
        return require.resolveWeak(
          /* "webpackChunkName":"input-[request]" */ `./input/${props.page}`,
        );
      else
        return eval('require.resolve')(
          /* "webpackChunkName":"input-[request]" */ `./input/${props.page}`,
        );
    },
  },
  {
    cacheKey: (props) => props.page,
  },
);
export const DynamicLib = loadable.lib(
  {
    chunkName(props) {
      return `input-${props.page}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, '-');
    },
    isReady(props) {
      return (
        typeof __webpack_modules__ !== 'undefined' &&
        Boolean(__webpack_modules__[this.resolve(props)])
      );
    },
    requireAsync: (props) =>
      import(
        /* "webpackChunkName":"input-[request]" */ `./input/${props.page}`
      ),
    requireSync(props) {
      return typeof '__webpack_require__' !== 'undefined'
        ? __webpack_require__(this.resolve(props))
        : eval('module.require')(this.resolve(props));
    },
    resolve(props) {
      if (require.resolveWeak)
        return require.resolveWeak(
          /* "webpackChunkName":"input-[request]" */ `./input/${props.page}`,
        );
      else
        return eval('require.resolve')(
          /* "webpackChunkName":"input-[request]" */ `./input/${props.page}`,
        );
    },
  },
  {
    cacheKey: (props) => props.page,
  },
);
