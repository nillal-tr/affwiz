import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    leadCommissions: new FormControl(''),
    leadCommissions1: new FormControl(''),
    leadCommissions2: new FormControl(''),
    leadCRateCountryBasedCheckbox: new FormControl(''),
    leadCRateCountryBasedInput: new FormControl(''),
  });
}
