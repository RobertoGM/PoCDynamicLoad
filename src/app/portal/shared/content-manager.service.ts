import { Injectable, Type } from '@angular/core';
import { Router, Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DocumentationBarComponent } from '../dashboard/documentation-bar/documentation-bar.component';
import { OverviewChartComponent } from '../dashboard/overview-chart/overview-chart.component';
import { UsageChartComponent } from '../dashboard/usage-chart/usage-chart.component';
import { ServersComponent } from '../servers/servers.component';
import { AddServerComponent } from '../servers/add-server/add-server.component';
import { ServerListComponent } from '../servers/server-list/server-list.component';
import { ServicesComponent } from '../services/services.component';
import { AskAssistanceComponent } from '../services/ask-assistance/ask-assistance.component';
import { ConnectionsActiveComponent } from '../services/connections-active/connections-active.component';
import { SettingsComponent } from '../settings/settings.component';
import { UserInfoComponent } from '../settings/user-info/user-info.component';
import { PortalConfigComponent } from '../settings/portal-config/portal-config.component';
import { AdminSectionComponent } from '../settings/admin-section/admin-section.component';
import { RouteManagerService } from './route-manager.service';

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
      icon: 'dns',
      childComponents: [AddServerComponent, ServerListComponent],
    },
    {
      component: ServicesComponent,
      name: 'Services',
      route: 'services',
      icon: 'swap_horizontal_circle',
      childComponents: [AskAssistanceComponent, ConnectionsActiveComponent],
    },
    {
      component: SettingsComponent,
      name: 'Settings',
      route: 'settings',
      icon: 'settings',
      childComponents: [
        UserInfoComponent,
        PortalConfigComponent,
        AdminSectionComponent,
      ],
    },
  ];

  constructor(private routeManager: RouteManagerService) {}

  initNavigation() {
    const componentsAvailable = this.filterComponents(this._componentList);
    componentsAvailable.forEach((newRoute: ContentRoute) => {
      this.routeManager.addNavigationRoute(newRoute);
      this.routeManager.addRoute(newRoute, this.routeManager.rootNavigation);
    });
  }

  filterComponents(components: ContentRoute[]): ContentRoute[] {
    // filter components and child components
    return components;
  }

}
