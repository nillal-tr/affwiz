import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app.routing.module';
import { CheckboxComponent } from './form-elements/checkbox/checkbox.component';
import { DropdownComponent } from './form-elements/dropdown/dropdown.component';
import { MultiSelectComponent } from './form-elements/multi-select/multi-select.component';
import { ShortInputComponent } from './form-elements/short-input/short-input.component';
import { LongInputComponent } from './form-elements/long-input/long-input.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';


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
    CheckboxComponent,
    DropdownComponent,
    MultiSelectComponent,
    ShortInputComponent,
    LongInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
