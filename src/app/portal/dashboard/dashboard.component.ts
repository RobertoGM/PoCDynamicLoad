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
import { ActivatedRoute, Data } from '@angular/router';
import { RouteManagerService } from '../shared/route-manager.service';
import { ComponentManagerService } from '../shared/component-manager.service';
import { CdkDragDrop, moveItemInArray, CdkDragEnter, CdkDropList } from '@angular/cdk/drag-drop';
import { ContentRoute } from '../shared/content-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  components: ContentRoute[];
  drops: CdkDropList[];

  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;
  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  constructor(
    private componentManager: ComponentManagerService,
    private routerManager: RouteManagerService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.components = <ContentRoute[]>this.activatedRoute.snapshot.data.childComponents;
  }

  ngAfterViewInit() {
    this.componentManager.loadComponents(this.adHosts, this.routerManager.retrieveRouterDataComponents(
      this.activatedRoute.snapshot.data,
    ));
    this.changeDetector.detectChanges();
    this.drops = this.dropsQuery.toArray();

    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray();
    });
  }

  entered($event: CdkDragEnter) {
    moveItemInArray(this.components, $event.item.data, $event.container.data);
  }

}
