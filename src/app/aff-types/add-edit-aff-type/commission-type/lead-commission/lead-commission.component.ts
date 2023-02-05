import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/data-countries';

@Component({
  selector: 'app-lead-commission',
  templateUrl: './lead-commission.component.html',
  styleUrls: ['./lead-commission.component.css', '../../../../shared/bl/form-control/form-style.css'],
})
export class LeadCommissionComponent {
  countryitems = countries;
  rateTypeParent = 'lead';
  
  affTypeFormCommissionTypeLeadCommission = new FormGroup({
    leadCommissionsCheckbox: new FormControl(''),
    leadCommissionsValue: new FormControl('', Validators.min(0)),
  });
}
