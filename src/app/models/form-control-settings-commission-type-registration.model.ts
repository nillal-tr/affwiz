import { Validators } from '@angular/forms';

export const FormControlSettingsRegistration: any[] = [
  {
    name: 'registrationCommissionsCheckbox',
    validators: []
  },
  {
    name: 'registrationCommissionsValue',
    validators: [Validators.required, Validators.min(0)]
  }
]