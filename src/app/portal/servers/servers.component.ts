import {
  Component,
  OnInit,
  AfterViewInit,
  Type,
  ViewChildren,
  QueryList,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AdDirective } from '../shared/ad.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServersComponent implements OnInit, AfterViewInit {
  components: Type<any>[];

  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.components = this.activatedRoute.snapshot.data.childComponents;
  }

  ngAfterViewInit() {
    this.loadComponents();
    this.changeDetector.detectChanges();
  }

  loadComponents(): void {
    this.adHosts.toArray().forEach((element: AdDirective, index: number) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.components[index],
      );

      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();

      viewContainerRef.createComponent(componentFactory);
    });
  }
}
