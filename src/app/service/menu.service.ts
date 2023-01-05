import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { IMenuItem } from '../data-menu';
import { ContentComponent } from '../content/content-component.component';
import { AddEditAffTypeComponent } from '../aff-types/add-edit-aff-type/add-edit-aff-type.component';
import { ViewAffTypeComponent } from '../aff-types/view-aff-type/view-aff-type.component';






@Injectable({
  providedIn: 'root',
})

export class MenuService {

  getRoutes(menu: IMenuItem[]) {
    const routes: Route[] = [];

    const componentMap = this.getComponentMapping();
    

    menu.forEach((menuItem) => {
      const routeItem: Route = {
        path: menuItem.route,
        // component: componentMap[menuItem.component],
        data: { tabs: menuItem.tabs },
        children: [],
      };

      menuItem.tabs.forEach((tab) => {
        const childRouteItem: Route = {
          path: tab.route,
          // component: componentMap[tab.component],
        };
        routeItem.children?.push(childRouteItem);
      });
      routes.push();
    });

    return routes;
  }

  getComponentMapping() {
    return {
      'ContentComponent': ContentComponent,
      'AddEditAffTypeComponent': AddEditAffTypeComponent,
      'ViewAffTypeComponent': ViewAffTypeComponent
    }
  }
  
}
