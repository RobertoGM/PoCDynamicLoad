import { Injectable, Type } from '@angular/core';
import { Router } from '@angular/router';

export interface ContentRoute {
  name: string;
  route: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContentManagerService {

  private _routes: ContentRoute[] = [];

  constructor(private router: Router) { }

  get routes(): ContentRoute[] {
    return this._routes;
  }

  addRoute(newComponent: Type<any>, name: string, route: string, icon: string) {
    this._routes.push({name, route, icon});
    this.router.config[2].children.push({ component: newComponent, path: route});
  }
}
