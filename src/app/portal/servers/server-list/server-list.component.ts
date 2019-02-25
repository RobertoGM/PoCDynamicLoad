import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteManagerService } from '../../shared/route-manager.service';
import { ServerDetailsComponent } from '../server-details/server-details.component';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  constructor(
    public router: Router,
    public routeManager: RouteManagerService) { }

  ngOnInit() {
    this.routeManager.addRoute(
      {component: ServerDetailsComponent, route: 'server-details/:id'},
      this.routeManager.rootNavigation
    );
  }

  openDetails(): void {
    this.router.navigate(['portal/server-details', 1]);
  }

}
