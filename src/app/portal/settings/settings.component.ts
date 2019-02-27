import {
  Component,
  OnInit,
  AfterViewInit,
  Type,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AdDirective } from '../shared/ad.directive';
import { ActivatedRoute } from '@angular/router';
import { RouteManagerService } from '../shared/route-manager.service';
import { ComponentManagerService } from '../shared/component-manager.service';
import { ContentRoute } from '../shared/content-manager.service';
import { CdkDropList, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, AfterViewInit {
  components: ContentRoute[];
  drops: CdkDropList[];

  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;
  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  constructor(
    private componentManager: ComponentManagerService,
    private routerManager: RouteManagerService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) { }

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
