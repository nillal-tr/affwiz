import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { IMenuItem, menu } from '../../../data-menu';
import { ComponentMapping } from './menu.consts';


@Injectable({
  providedIn: 'root',
})
export class MenuService {

  getRoutes() {
    const routes: Route[] = [];

    // const componentMap = this.getComponentMapping();
    

    menu.forEach((menuItem) => {
      const routeItem: Route = {
        path: menuItem.route,
        component: ComponentMapping[menuItem.component],
        data: { tabs: menuItem.tabs },
        children: [],
      };

      menuItem.tabs.forEach((tab) => {
        const childRouteItem: Route = {
          path: tab.route,
          component: ComponentMapping[tab.component],
        };
        routeItem.children?.push(childRouteItem);
      });

      routes.push(routeItem);
    });

    return routes;
  }

  // getComponentMapping() {
  //   return {
  //     'MainViewComponent': MainViewComponent,
  //     'AddEditAffTypeComponent': AddEditAffTypeComponent,
  //     'ViewAffTypeComponent': ViewAffTypeComponent
  //   }
  // }
  
}
