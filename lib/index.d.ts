/* eslint-disable prettier/prettier */
declare module "svelte-easyroute";

import { SvelteTypedComponent } from "svelte-typed-component";
// import Observable from "easyroute-core/lib/src/utils/observable/Observable";
// /// <reference path='easyroute-core/types' />

export default class Router {
  constructor(settings: RouterSettings);
  beforeEach: RouterHook | null;
  afterEach: RouterHook | null;
  currentMatched: Observable<Route[]>;
  currentRouteData: Observable<RouteInfo>;
  parseRoute(url: string, doPushState?: boolean);
  push(url: string);
  go(howFar: number);
  back();
}

interface RouterLinkProps {
  to: string;
}
export class RouterLink extends SvelteTypedComponent<
  RouterLinkProps,
  any,
  any
> {}

interface EasyrouteProviderProps {
  router: Router;
}

export class EasyrouteProvider extends SvelteTypedComponent<
  EasyrouteProviderProps,
  any,
  any
> {}

interface RouterOutletProps {
  name?: string;
}

export class RouterOutlet extends SvelteTypedComponent<
  RouterOutletProps,
  any,
  any
> {}

interface CurrentRoute {
  fullPath: string;
  meta: { [key: string]: any };
  name: string;
  params: { [key: string]: string };
  query: { [key: string]: string };
}

type Unsubscriber = () => any;
type CurrentRouteListener = (currentRoute: any) => any;

export const useCurrentRoute: (CurrentRouteListener) => Unsubscriber;

/**************************************************************
 * 
 * easyroute-core/types.d.ts
 * 
 */

/**
 * RouteConfig: what we pass in routes[] array
 */

declare type BeforeHook = any

export class Observable<T> {
  constructor(value: T)
  public subscribe(listener: ObservableListener<T>)
  public setValue(newValue: T)
}

declare interface RouteConfigBasic {
  path: string;
  name?: string;
  beforeEnter?: BeforeHook;
  children?: RouteConfig[];
}

declare interface RouteConfigSingleComponent extends RouteConfigBasic {
  component: RouteComponent;
  // components: never;
}

declare interface RouteConfigMultiComponent extends RouteConfigBasic {
  components: { [key: string]: RouteComponent };
  // component: never;
}

declare type RouteConfig =
  RouteConfigSingleComponent
  | RouteConfigMultiComponent;

/**
 * RouteInfo: what is in currentRoute
 */

declare type RouteInfo = {
  params: { [key: string]: string };
  query: ParsedQueryObject;
  name?: string;
  fullPath?: string;
  meta?: any;
};

/**
 * Route: what we get when parse RouteConfig
 */

declare interface RouteBasic {
  path: string;
  regexpPath: RegExp;
  pathKeys: string[];
  id: string;
  parentId: string | null;
  nestingDepth: number;
  meta?: any;
  beforeEnter?: BeforeHook;
  children?: Route[];
  name?: string;
}

declare interface RouteSingleComponent extends RouteBasic {
  component: RouteComponent;
  components: never;
}

declare interface RouteMultiComponent extends RouteBasic {
  component: never;
  components: { [key: string]: RouteComponent };
}

declare type Route = RouteMultiComponent;

/**
 * Misc declarations
 */

declare type RouteComponent = any;

declare type NextCallback = (arg?: boolean | string) => void;

declare type ParsedQueryObject = {
  [key: string]: string | string[] | null;
};

declare type RouterMode = "hash" | "history" | "silent";

declare type RouterSettings = {
  mode: RouterMode;
  routes: RouteConfig[];
  base?: string;
  omitTrailingSlash?: boolean;
};

declare type RouterHook = (
  to: RouteInfo,
  from: RouteInfo | null,
  next?: NextCallback,
) => void | Promise<void>;

declare type HookCommand = boolean | string;

declare type ObservableListener<T> = (value: T) => void;

declare interface RouteConfigBasic {
  path: string;
  name?: string;
  beforeEnter?: BeforeHook;
  children?: RouteConfig[];
}

declare interface RouteConfigSingleComponent extends RouteConfigBasic {
  component: RouteComponent;
  // components: never;
}

declare interface RouteConfigMultiComponent extends RouteConfigBasic {
  components: { [key: string]: RouteComponent };
  // component: never;
}


/**
* Route: what we get when parse RouteConfig
*/

declare interface RouteBasic {
  path: string;
  regexpPath: RegExp;
  pathKeys: string[];
  id: string;
  parentId: string | null;
  nestingDepth: number;
  meta?: any;
  beforeEnter?: BeforeHook;
  children?: Route[];
  name?: string;
}

declare interface RouteSingleComponent extends RouteBasic {
  component: RouteComponent;
  components: never;
}

declare interface RouteMultiComponent extends RouteBasic {
  component: never;
  components: { [key: string]: RouteComponent };
}
