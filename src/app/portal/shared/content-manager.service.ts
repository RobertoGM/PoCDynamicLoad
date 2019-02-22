import { Injectable, Type } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DocumentationBarComponent } from '../dashboard/documentation-bar/documentation-bar.component';
import { OverviewChartComponent } from '../dashboard/overview-chart/overview-chart.component';
import { UsageChartComponent } from '../dashboard/usage-chart/usage-chart.component';
import { ServersComponent } from '../servers/servers.component';
import { ServicesComponent } from '../services/services.component';
import { SettingsComponent } from '../settings/settings.component';
import { AddServerComponent } from '../servers/add-server/add-server.component';
import { ServerListComponent } from '../servers/server-list/server-list.component';
import { AskAssistanceComponent } from '../services/ask-assistance/ask-assistance.component';
import { ConnectionsActiveComponent } from '../services/connections-active/connections-active.component';
import { UserInfoComponent } from '../settings/user-info/user-info.component';
import { PortalConfigComponent } from '../settings/portal-config/portal-config.component';
import { AdminSectionComponent } from '../settings/admin-section/admin-section.component';

export interface ContentRoute {
  component?: Type<any>;
  name: string;
  route: string;
  icon?: string;
  childComponents?: Type<any>[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentManagerService {
  private _routes: ContentRoute[] = [];

  private _componentList: ContentRoute[] = [
    {
      component: DashboardComponent,
      name: 'Dashboard',
      route: 'dashboard',
      icon: 'dashboard',
      childComponents: [
        DocumentationBarComponent,
        OverviewChartComponent,
        UsageChartComponent,
      ],
    },
    {
      component: ServersComponent,
      name: 'Servers',
      route: 'servers',
      icon: 'dashboard',
      childComponents: [AddServerComponent, ServerListComponent],
    },
    {
      component: ServicesComponent,
      name: 'Services',
      route: 'services',
      icon: 'dashboard',
      childComponents: [AskAssistanceComponent, ConnectionsActiveComponent],
    },
    {
      component: SettingsComponent,
      name: 'Settings',
      route: 'settings',
      icon: 'dashboard',
      childComponents: [
        UserInfoComponent,
        PortalConfigComponent,
        AdminSectionComponent,
      ],
    },
  ];

  constructor(private router: Router) {}

  get routes(): ContentRoute[] {
    return this._routes;
  }

  searchActiveContentRoute(path: string): ContentRoute {
    return this._routes.find(
      (contentRoute: ContentRoute) => contentRoute.route === path,
    );
  }

  addRoute(newComponent: Type<any>) {
    const newRoute = this._componentList.find(
      (component: ContentRoute) => component.component === newComponent,
    );
    if (newRoute) {
      this._routes.push({
        name: newRoute.name,
        route: newRoute.route,
        icon: newRoute.icon,
      });
      this.router.config[2].children.push({
        component: newRoute.component,
        path: newRoute.route,
        data: { childComponents: newRoute.childComponents },
      });
    }
  }
}
