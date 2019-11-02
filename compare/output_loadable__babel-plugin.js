/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 20:44:29
 */
import loadable from '@loadable/component';
export const DefaultLoadable = loadable({
  chunkName() {
    return 'input-AsyncDefaultComponent';
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () =>
    import(
      /* webpackChunkName: "input-AsyncDefaultComponent" */

      /* comment */

      /* comment 2 */

      /** comment 3 */
      /// comment 5

      /* comment 4 */
      './input/AsyncDefaultComponent'
    ),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('./input/AsyncDefaultComponent');
    }

    return eval('require.resolve')('./input/AsyncDefaultComponent');
  },
});
export const DefaultLib = loadable.lib({
  chunkName() {
    return 'input-AsyncComponent';
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () =>
    import(
      /* webpackChunkName: "input-AsyncComponent" */
      './input/AsyncComponent'
    ),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('./input/AsyncComponent');
    }

    return eval('require.resolve')('./input/AsyncComponent');
  },
});
export const WithOptionsLoadable = loadable(
  {
    chunkName() {
      return 'input-AsyncDefaultComponent';
    },

    isReady(props) {
      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[this.resolve(props)];
      }

      return false;
    },

    requireAsync: () =>
      import(
        /* webpackChunkName: "input-AsyncDefaultComponent" */
        './input/AsyncDefaultComponent'
      ),

    requireSync(props) {
      const id = this.resolve(props);

      if (typeof __webpack_require__ !== 'undefined') {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },

    resolve() {
      if (require.resolveWeak) {
        return require.resolveWeak('./input/AsyncDefaultComponent');
      }

      return eval('require.resolve')('./input/AsyncDefaultComponent');
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
      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[this.resolve(props)];
      }

      return false;
    },

    requireAsync: () =>
      import(
        /* webpackChunkName: "input-AsyncComponent" */
        './input/AsyncComponent'
      ),

    requireSync(props) {
      const id = this.resolve(props);

      if (typeof __webpack_require__ !== 'undefined') {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },

    resolve() {
      if (require.resolveWeak) {
        return require.resolveWeak('./input/AsyncComponent');
      }

      return eval('require.resolve')('./input/AsyncComponent');
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
      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[this.resolve(props)];
      }

      return false;
    },

    requireAsync: () =>
      import(
        /* webpackChunkName: "input-AsyncDefaultComponent" */
        './input/AsyncDefaultComponent'
      ),

    requireSync(props) {
      const id = this.resolve(props);

      if (typeof __webpack_require__ !== 'undefined') {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },

    resolve() {
      if (require.resolveWeak) {
        return require.resolveWeak('./input/AsyncDefaultComponent');
      }

      return eval('require.resolve')('./input/AsyncDefaultComponent');
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
      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[this.resolve(props)];
      }

      return false;
    },

    requireAsync: (props) =>
      import(
        /* webpackChunkName: "input-[request]" */
        `./input/${props.page}`
      ),

    requireSync(props) {
      const id = this.resolve(props);

      if (typeof __webpack_require__ !== 'undefined') {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },

    resolve(props) {
      if (require.resolveWeak) {
        return require.resolveWeak(`./input/${props.page}`);
      }

      return eval('require.resolve')(`./input/${props.page}`);
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
      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[this.resolve(props)];
      }

      return false;
    },

    requireAsync: (props) =>
      import(
        /* webpackChunkName: "input-[request]" */
        `./input/${props.page}`
      ),

    requireSync(props) {
      const id = this.resolve(props);

      if (typeof __webpack_require__ !== 'undefined') {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },

    resolve(props) {
      if (require.resolveWeak) {
        return require.resolveWeak(`./input/${props.page}`);
      }

      return eval('require.resolve')(`./input/${props.page}`);
    },
  },
  {
    cacheKey: (props) => props.page,
  },
);
