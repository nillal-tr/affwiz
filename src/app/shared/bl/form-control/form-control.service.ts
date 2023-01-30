import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AffTypeFormControlSettings } from '../../../models/aff-types.model'
import { FormControlsSettings } from './form-control.settings.model';

export interface formControlsOption<T> {
  fb: FormBuilder,
  fg: FormGroup,
  controlsSettings: FormControlsSettings[],
  formPreviousData: T,
  isPrivate: boolean
}


@Injectable({
  providedIn: 'root'
})
export class FormControlService {


  constructor() {}

  setFormControls<T>(settings: formControlsOption<T>) {
    settings.controlsSettings.forEach(control => {
      let showControl: boolean = true;
      if (showControl) { 
        settings.fg.addControl(control.name, settings.fb.control({ value: settings.formPreviousData[control.name] }, control.validations))
      }
    })
  }
}