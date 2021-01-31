import { SvelteComponent } from 'svelte'
import { SvelteComponentDev } from 'svelte/internal'
import { SvelteTypedComponent } from 'svelte-typed-component'

declare module 'svelte-easyroute' {
  /**
   * Data to define route
   */

  type ComponentImport = () => Promise<typeof import('*.svelte')>
  export interface RouterConstructorProps {
    mode: 'hash' | 'history' | 'silent'
    omitTrailingSlash: boolean
    routes: {
      path: string
      name: string
      component?: SvelteComponent | SvelteComponentDev | ComponentImport
      components?: {
        [key: string]: SvelteComponent | SvelteComponentDev | ComponentImport
      }
    }[]
  }
  export default class Router {
    constructor(props: RouterConstructorProps)
  }

  interface RouterLinkProps {
    to: string
  }
  export class RouterLink extends SvelteTypedComponent<
    RouterLinkProps,
    any,
    any
  > {}

  interface EasyrouteProviderProps {
    router: Router
  }

  export class EasyrouteProvider extends SvelteTypedComponent<
    EasyrouteProviderProps,
    any,
    any
  > {}

  interface RouterOutletProps {
    name?: string
  }

  export class RouterOutlet extends SvelteTypedComponent<
    RouterOutletProps,
    any,
    any
  > {}

  interface CurrentRoute {
    fullPath: string
    meta: { [key: string]: any }
    name: string
    params: { [key: string]: string }
    query: { [key: string]: string }
  }

  type Unsubscriber = () => any
  type CurrentRouteListener = (currentRoute: any) => any

  export const useCurrentRoute: (CurrentRouteListener) => Unsubscriber
}
