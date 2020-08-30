/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 20:44:29
 */
import loadable from '@loadable/component';
export const LazyFoo = loadable({
  resolved: {},

  chunkName() {
    return 'input-AsyncDefaultComponent';
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () =>
    import(
      /* webpackChunkName: "input-AsyncDefaultComponent" */
      './input/AsyncDefaultComponent'
    ),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then((resolved) => {
      this.resolved[key] = true;
      return resolved;
    });
  },

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
  resolved: {},

  chunkName() {
    return 'input-AsyncComponent';
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () =>
    import(
      /* webpackChunkName: "input-AsyncComponent" */
      './input/AsyncComponent'
    ),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then((resolved) => {
      this.resolved[key] = true;
      return resolved;
    });
  },

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
    resolved: {},

    chunkName() {
      return 'input-AsyncDefaultComponent';
    },

    isReady(props) {
      const key = this.resolve(props);

      if (this.resolved[key] !== true) {
        return false;
      }

      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[key];
      }

      return false;
    },

    importAsync: () =>
      import(
        /* webpackChunkName: "input-AsyncDefaultComponent" */
        './input/AsyncDefaultComponent'
      ),

    requireAsync(props) {
      const key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then((resolved) => {
        this.resolved[key] = true;
        return resolved;
      });
    },

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
    resolved: {},

    chunkName() {
      return 'input-AsyncComponent';
    },

    isReady(props) {
      const key = this.resolve(props);

      if (this.resolved[key] !== true) {
        return false;
      }

      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[key];
      }

      return false;
    },

    importAsync: () =>
      import(
        /* webpackChunkName: "input-AsyncComponent" */
        './input/AsyncComponent'
      ),

    requireAsync(props) {
      const key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then((resolved) => {
        this.resolved[key] = true;
        return resolved;
      });
    },

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
    resolved: {},

    chunkName() {
      return 'input-AsyncDefaultComponent';
    },

    isReady(props) {
      const key = this.resolve(props);

      if (this.resolved[key] !== true) {
        return false;
      }

      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[key];
      }

      return false;
    },

    importAsync: () =>
      import(
        /* webpackChunkName: "input-AsyncDefaultComponent" */
        './input/AsyncDefaultComponent'
      ),

    requireAsync(props) {
      const key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then((resolved) => {
        this.resolved[key] = true;
        return resolved;
      });
    },

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
    resolved: {},

    chunkName(props) {
      return `input-${props.page}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, '-');
    },

    isReady(props) {
      const key = this.resolve(props);

      if (this.resolved[key] !== true) {
        return false;
      }

      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[key];
      }

      return false;
    },

    importAsync: (props) =>
      import(
        /* webpackChunkName: "input-[request]" */
        `./input/${props.page}`
      ),

    requireAsync(props) {
      const key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then((resolved) => {
        this.resolved[key] = true;
        return resolved;
      });
    },

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
    resolved: {},

    chunkName(props) {
      return `input-${props.page}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, '-');
    },

    isReady(props) {
      const key = this.resolve(props);

      if (this.resolved[key] !== true) {
        return false;
      }

      if (typeof __webpack_modules__ !== 'undefined') {
        return !!__webpack_modules__[key];
      }

      return false;
    },

    importAsync: (props) =>
      import(
        /* webpackChunkName: "input-[request]" */
        `./input/${props.page}`
      ),

    requireAsync(props) {
      const key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then((resolved) => {
        this.resolved[key] = true;
        return resolved;
      });
    },

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
