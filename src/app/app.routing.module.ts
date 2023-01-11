import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAffTypeComponent } from './aff-types/add-edit-aff-type/add-edit-aff-type.component';
import { ViewAffTypeComponent } from './aff-types/view-aff-type/view-aff-type.component';
import { MainViewComponent } from './views/mainview/mainview-component.component';
import { IMenuItem, menu } from './data-menu';
import { MenuService } from './shared/bl/menu/menu.service'



const routes: Routes = [
  // {
  //   path: 'aff-types', 
  //   component: MainViewComponent,
  //   data: { tabs: menu[0].tabs },
  //   children: [
  //     {
  //       path: 'edit',
  //       component: AddEditAffTypeComponent
  //     },
  //     {
  //       path: 'view',
  //       component: ViewAffTypeComponent
  //     }
  //   ]
  // },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  constructor(private menuService: MenuService) { 
    menuService.getRoutes().forEach(element => {
      routes.push(element)
    });
  }
}