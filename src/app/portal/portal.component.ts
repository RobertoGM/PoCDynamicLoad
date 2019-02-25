import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentRoute, ContentManagerService } from './shared/content-manager.service';
import { RouteManagerService } from './shared/route-manager.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, OnDestroy {

  links: ContentRoute[];

  constructor(private contentManager: ContentManagerService, private routeManager: RouteManagerService) { }

  ngOnInit() {
    this.links = this.routeManager.routes;
    this.contentManager.initNavigation();
  }

  ngOnDestroy(): void {
    this.routeManager.clean();
  }

}
