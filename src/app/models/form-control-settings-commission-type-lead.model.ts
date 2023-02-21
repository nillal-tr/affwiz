import { Validators } from '@angular/forms';

export const FormControlSettingsLead: any[] = [
  {
    name: 'leadCommissionsCheckbox',
    validators: []
  },
  {
    name: 'leadCommissionsValue',
    validators: [Validators.required, Validators.min(0)]
  }
]