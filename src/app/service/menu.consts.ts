import { AddEditAffTypeComponent } from "../aff-types/add-edit-aff-type/add-edit-aff-type.component";
import { ViewAffTypeComponent } from "../aff-types/view-aff-type/view-aff-type.component";
import { ContentComponent } from "../content/content-component.component";

export enum ComponentType {
  ContentComponent = 'ContentComponent',
  AddEditAffTypeComponent = 'AddEditAffTypeComponent',
  ViewAffTypeComponent = 'ViewAffTypeComponent',
}

export const ComponentMapping: {[key: string]: any} = {
  [ComponentType.ContentComponent]: ContentComponent,
  [ComponentType.AddEditAffTypeComponent]: AddEditAffTypeComponent,
  [ComponentType.ViewAffTypeComponent]: ViewAffTypeComponent,
}
