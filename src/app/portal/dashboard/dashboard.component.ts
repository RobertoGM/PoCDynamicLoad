import { Component, Type, ViewChildren, ComponentFactoryResolver, QueryList, AfterViewInit } from '@angular/core';
import { DocumentationBarComponent } from './documentation-bar/documentation-bar.component';
import { OverviewChartComponent } from './overview-chart/overview-chart.component';
import { UsageChartComponent } from './usage-chart/usage-chart.component';
import { AdDirective } from '../shared/ad.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  components: Type<any>[] = [
    DocumentationBarComponent,
    OverviewChartComponent,
    UsageChartComponent
  ];

  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponents();
  }

  loadComponents(): void {
    this.adHosts.toArray().forEach((element: AdDirective, index: number) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[index]);

      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();

      viewContainerRef.createComponent(componentFactory);
    });
  }
}
