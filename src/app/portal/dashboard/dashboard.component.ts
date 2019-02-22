import { Component, Type, ViewChildren, ComponentFactoryResolver, QueryList, AfterViewInit, OnInit } from '@angular/core';
import { AdDirective } from '../shared/ad.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  components: Type<any>[];

  @ViewChildren(AdDirective) adHosts: QueryList<AdDirective>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.components = this.activatedRoute.snapshot.data.childComponents;
  }

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
