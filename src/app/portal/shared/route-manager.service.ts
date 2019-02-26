import { Injectable, Type } from '@angular/core';
import { ContentRoute } from './content-manager.service';
import { Router, Route, Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteManagerService {
  private _routes: ContentRoute[] = [];
  private _portalPosition: number = this.router.config.findIndex(
    (route: Route) => route.path === 'portal',
  );

  constructor(private router: Router) {}

  get routes(): ContentRoute[] {
    return this._routes;
  }

  get rootNavigation(): Route {
    return this.router.config[this._portalPosition];
  }

  clean(): void {
    this._routes = [];
    this.router.config[this._portalPosition].children = [];
  }

  // Transform array of ContentRoute into array of only components
  retrieveRouterDataComponents(data: Data): Type<any>[] {
    return data.childComponents.map(
      (childComponent: ContentRoute) => childComponent.component,
    );
  }

  // Search within the navigation routes
  searchActiveContentRoute(path: string): ContentRoute {
    return this._routes.find(
      (contentRoute: ContentRoute) => contentRoute.route === path,
    );
  }

  // Add route for the navigation sidenav
  addNavigationRoute(newRoute: Partial<ContentRoute>): void {
    this._routes.push({
      name: newRoute.name,
      route: newRoute.route,
      icon: newRoute.icon,
    });
  }

  // Add route to the router config
  addRoute(newRoute: Partial<ContentRoute>, routerArray: Route): void {
    routerArray.children = routerArray.children ? routerArray.children : [];

    routerArray.children.push({
      component: newRoute.component,
      path: newRoute.route,
      data: { childComponents: newRoute.childComponents },
    });
  }

  // Search for a children of the root routing component
  findRouterArray(path: string): Route {
    return this.router.config[this._portalPosition].children.find(
      (route: Route) => route.path === path,
    );
  }
}
