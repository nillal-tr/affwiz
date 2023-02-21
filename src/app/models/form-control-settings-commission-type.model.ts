import { Validators } from '@angular/forms';

export const FormControlSettingsCommissionType: any[] = [
  {
    name: 'minCommissionPayout',
    validators: [Validators.required, Validators.min(0)],
    placeholder: 0
  }
]