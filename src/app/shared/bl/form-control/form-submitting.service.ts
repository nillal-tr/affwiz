import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormSubmitting {
  shareFieldsDataToParent(formName: any, outputName: any) {
    if (formName.valid) {
      outputName.emit(formName.controls);
    }
  }
}
