import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from '../../../data-countries'

@Component({
  selector: 'app-commission-type',
  templateUrl: './commission-type.component.html',
  styleUrls: ['./commission-type.component.css'],
})
export class CommissionTypeComponent {
  countryitems = countries;



  // lead commission

  // reg commission



  // fields

  affTypeFormCommissionType = new FormGroup({

    registrationCommissions: new FormControl(''),
    registrationCommissions1: new FormControl(''),
    registrationCommissions2: new FormControl(''),
    regRateCountryBasedCheckbox: new FormControl(''),
    regRateCountryBasedInput: new FormControl(''),

    minCommissionPayout: new FormControl('0', Validators.required),
  });
}
