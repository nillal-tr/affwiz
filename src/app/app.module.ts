import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderHeaderComponentComponent } from './header/header-header-component.component';
import { ContentComponent } from './content/content-component.component';
import { AsideMenuComponentComponent } from './menu/aside-menu-component.component';
import { FooterComponentComponent } from './footer/footer-component.component';
import { AffTypesComponent } from './aff-types/aff-types.component';
import { ViewAffTypeComponent } from './aff-types/view-aff-type/view-aff-type.component';
import { AddEditAffTypeComponent } from './aff-types/add-edit-aff-type/add-edit-aff-type.component';
import { CheckboxComponent } from './aff-types/form-elements/checkbox.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderHeaderComponentComponent,
    ContentComponent,
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
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
