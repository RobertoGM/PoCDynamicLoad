import { Component, OnInit } from '@angular/core';
import { ContentRoute, ContentManagerService } from './shared/content-manager.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServersComponent } from './servers/servers.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  links: ContentRoute[];

  constructor(private contentManager: ContentManagerService) { }

  ngOnInit() {
    this.links = this.contentManager.routes;
    this.contentManager.addRoute(DashboardComponent, 'Dashboard', 'dashboard', 'dashboard');
    this.contentManager.addRoute(ServersComponent, 'Servers', 'servers', 'dns');
    this.contentManager.addRoute(ServicesComponent, 'Services', 'services', 'widgets');
    this.contentManager.addRoute(SettingsComponent, 'settings', 'settings', 'settings');
  }

}