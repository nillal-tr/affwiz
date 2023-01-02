import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderHeaderComponentComponent } from './header/header-header-component.component';
import { ContentComponentComponent } from './content/content-component.component';
import { AsideMenuComponentComponent } from './menu/aside-menu-component.component';
import { FooterComponentComponent } from './footer/footer-component.component';
import { AffTypesComponent } from './aff-types/aff-types.component';
import { ViewAffTypeComponent } from './aff-types/view-aff-type/view-aff-type.component';
import { AddEditAffTypeComponent } from './aff-types/add-edit-aff-type/add-edit-aff-type.component';
import { CheckboxComponent } from './aff-types/form-elements/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHeaderComponentComponent,
    ContentComponentComponent,
    AsideMenuComponentComponent,
    FooterComponentComponent,
    AffTypesComponent,
    ViewAffTypeComponent,
    AddEditAffTypeComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'aff-types', component: AffTypesComponent},
      {path: 'aff-types/edit', component: AddEditAffTypeComponent},
      {path: 'aff-types/view', component: AddEditAffTypeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
