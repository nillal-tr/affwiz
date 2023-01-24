import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderHeaderComponentComponent } from './shared/ui/header/header-header-component.component';
import { MainViewComponent } from './views/mainview/mainview-component.component';
import { AsideMenuComponentComponent } from './shared/ui/menu/aside-menu-component.component';
import { FooterComponentComponent } from './shared/ui/footer/footer-component.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatIconModule} from '@angular/material/icon';
import { AccordionComponent } from './shared/ui/accordion/accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CategoriesComponent } from './aff-types/add-edit-aff-type/categories/categories.component';
import { NewAffTypeComponent } from './aff-types/add-edit-aff-type/new-aff-type/new-aff-type.component';
import { CommissionTypeComponent } from './aff-types/add-edit-aff-type/commission-type/commission-type.component';
import { TieredAffDisplayOptionsComponent } from './aff-types/add-edit-aff-type/tiered-aff-display-options/tiered-aff-display-options.component';
import { OtherComponent } from './aff-types/add-edit-aff-type/other/other.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderHeaderComponentComponent,
    MainViewComponent,
    AsideMenuComponentComponent,
    FooterComponentComponent,
    AffTypesComponent,
    ViewAffTypeComponent,
    AddEditAffTypeComponent,
    CheckboxComponent,
    DropdownComponent,
    MultiSelectComponent,
    ShortInputComponent,
    LongInputComponent,
    AccordionComponent,
    CategoriesComponent,
    NewAffTypeComponent,
    CommissionTypeComponent,
    TieredAffDisplayOptionsComponent,
    OtherComponent
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
    MatTooltipModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatIconModule,
    CdkAccordionModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
