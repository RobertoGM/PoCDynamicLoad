import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ServersComponent } from './servers/servers.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';
import { OverviewChartComponent } from './dashboard/overview-chart/overview-chart.component';
import { UsageChartComponent } from './dashboard/usage-chart/usage-chart.component';
import { DocumentationBarComponent } from './dashboard/documentation-bar/documentation-bar.component';
import { ServerListComponent } from './servers/server-list/server-list.component';
import { AddServerComponent } from './servers/add-server/add-server.component';
import { ConnectionsActiveComponent } from './services/connections-active/connections-active.component';
import { AskAssistanceComponent } from './services/ask-assistance/ask-assistance.component';
import { UserInfoComponent } from './settings/user-info/user-info.component';
import { PortalConfigComponent } from './settings/portal-config/portal-config.component';
import { AdminSectionComponent } from './settings/admin-section/admin-section.component';
import { AdDirective } from './shared/ad.directive';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    PortalComponent,
    DashboardComponent,
    ServersComponent,
    ServicesComponent,
    SettingsComponent,
    OverviewChartComponent,
    UsageChartComponent,
    DocumentationBarComponent,
    ServerListComponent,
    AddServerComponent,
    ConnectionsActiveComponent,
    AskAssistanceComponent,
    UserInfoComponent,
    PortalConfigComponent,
    AdminSectionComponent,
    AdDirective,
  ],
  entryComponents: [
    DashboardComponent,
    ServersComponent,
    ServicesComponent,
    SettingsComponent,
    OverviewChartComponent,
    UsageChartComponent,
    DocumentationBarComponent,
    ServerListComponent,
    AddServerComponent,
    ConnectionsActiveComponent,
    AskAssistanceComponent,
    UserInfoComponent,
    PortalConfigComponent,
    AdminSectionComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    ChartjsModule,
    FlexLayoutModule,
  ],
})
export class PortalModule {}
