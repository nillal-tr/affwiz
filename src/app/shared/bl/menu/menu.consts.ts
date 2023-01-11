import { AddEditAffTypeComponent } from "../../../aff-types/add-edit-aff-type/add-edit-aff-type.component";
import { ViewAffTypeComponent } from "../../../aff-types/view-aff-type/view-aff-type.component";
import { MainViewComponent } from "../../../views/mainview/mainview-component.component";

export enum ComponentType {
  MainViewComponent = 'MainViewComponent',
  AddEditAffTypeComponent = 'AddEditAffTypeComponent',
  ViewAffTypeComponent = 'ViewAffTypeComponent',
}

export const ComponentMapping: {[key: string]: any} = {
  [ComponentType.MainViewComponent]: MainViewComponent,
  [ComponentType.AddEditAffTypeComponent]: AddEditAffTypeComponent,
  [ComponentType.ViewAffTypeComponent]: ViewAffTypeComponent,
}
