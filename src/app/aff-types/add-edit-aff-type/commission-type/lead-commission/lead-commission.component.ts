import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';

@Component({
  selector: 'app-lead-commission',
  templateUrl: './lead-commission.component.html',
  styleUrls: ['./lead-commission.component.css'],
})
export class LeadCommissionComponent {
  countryitems = countries;
  
  affTypeFormCommissionTypeLeadCommission = new FormGroup({
    leadCommissions: new FormControl(''),
    leadCommissions1: new FormControl(''),
    leadCommissions2: new FormControl(''),
    leadCRateCountryBasedCheckbox: new FormControl(''),
    leadCRateCountryBasedInput: new FormControl(''),
  });
}
