import {
  Component,
  Type,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AdDirective } from '../shared/ad.directive';
import { ActivatedRoute } from '@angular/router';
import { RouteManagerService } from '../shared/route-manager.service';
import { ComponentManagerService } from '../shared/component-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  components: Type<any>[];

  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;

  constructor(
    private componentManager: ComponentManagerService,
    private routerManager: RouteManagerService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.components = this.routerManager.retrieveRouterDataComponents(
      this.activatedRoute.snapshot.data,
    );
  }

  ngAfterViewInit() {
    this.componentManager.loadComponents(this.adHosts, this.components);
    this.changeDetector.detectChanges();
  }
}
