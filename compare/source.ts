/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-01 20:44:29
 */

import loadable from '@loadable/component';
import { ComponentType } from 'react';

export const LazyFoo = loadable(() => import('./input/AsyncDefaultComponent'));

export const DefaultLib = loadable.lib(() => import('./input/AsyncComponent'));

export const WithOptionsLoadable = loadable(
  () => import('./input/AsyncDefaultComponent'),
  {
    ssr: true,
  },
);

export const WithOptionsLib = loadable.lib(
  () => import('./input/AsyncComponent'),
  {
    ssr: true,
  },
);

export const NonSsrLoadable = loadable(
  () => import('./input/AsyncDefaultComponent'),
  {
    ssr: false,
  },
);

export const DynamicLoadable = loadable<{ page: string }>(
  (props) => import(`./input/${props.page}`),
  {
    cacheKey: (props) => props.page,
  },
);

export const DynamicLib = loadable.lib<{ page: string }, ComponentType>(
  (props) => import(`./input/${(props as any).page}`),
  {
    cacheKey: (props) => props.page,
  },
);
