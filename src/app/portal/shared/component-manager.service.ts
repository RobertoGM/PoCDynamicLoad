import {
  Injectable,
  QueryList,
  Type,
  ComponentFactoryResolver,
} from '@angular/core';
import { AdDirective } from './ad.directive';
import { elementStart } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root',
})
export class ComponentManagerService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  // Assign a component for each of the elements passed as a parameter
  loadComponents(
    adHosts: QueryList<AdDirective>,
    components: Type<any>[],
  ): void {
    adHosts.toArray().forEach((element: AdDirective, index: number) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        components[index],
      );

      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();

      viewContainerRef.createComponent(componentFactory);
    });
  }
}
