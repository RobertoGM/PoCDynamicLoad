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
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { cloneDeep } from 'lodash';

export interface ContentRoute {
  component?: Type<any>;
  name: string;
  route: string;
  icon?: string;
  availableUserGroup?: number;
  childComponents?: Partial<ContentRoute>[];
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
        { component: OverviewChartComponent, availableUserGroup: 1 },
        { component: DocumentationBarComponent, availableUserGroup: 2 },
        { component: UsageChartComponent, availableUserGroup: 3 },
      ],
    },
    {
      component: ServersComponent,
      name: 'Servers',
      route: 'servers',
      icon: 'dns',
      childComponents: [
        { component: AddServerComponent, availableUserGroup: 2 },
        { component: ServerListComponent, availableUserGroup: 1 },
      ],
    },
    {
      component: ServicesComponent,
      name: 'Services',
      route: 'services',
      icon: 'swap_horizontal_circle',
      childComponents: [
        { component: AskAssistanceComponent, availableUserGroup: 2 },
        { component: ConnectionsActiveComponent, availableUserGroup: 1 },
      ],
    },
    {
      component: SettingsComponent,
      name: 'Settings',
      route: 'settings',
      icon: 'settings',
      childComponents: [
        { component: UserInfoComponent, availableUserGroup: 3 },
        { component: PortalConfigComponent, availableUserGroup: 3 },
        { component: AdminSectionComponent, availableUserGroup: 2 },
      ],
    },
  ];

  constructor(
    private routeManager: RouteManagerService,
    private auth: AuthService,
  ) {}

  initNavigation() {
    this.filterComponents(this._componentList).forEach(
      (newRoute: ContentRoute) => {
        // Add routes after filtered by user group
        this.routeManager.addNavigationRoute(newRoute);
        this.routeManager.addRoute(newRoute, this.routeManager.rootNavigation);
      },
    );
  }

  filterComponents(components: ContentRoute[]): ContentRoute[] {
    // Create filtered list without altering the original
    const filteredComponents = cloneDeep(components);

    // Filter child components by a given userGroup
    filteredComponents.forEach((component: ContentRoute) => {
      component.childComponents = component.childComponents.filter(
        (childComponent: Partial<ContentRoute>) =>
          childComponent.availableUserGroup <= this.auth.userGroup,
      );
    });

    // Return the list with the root component removed if no children components
    return filteredComponents.filter(
      (component: Partial<ContentRoute>) =>
        component.childComponents.length > 0,
    );
  }
}
