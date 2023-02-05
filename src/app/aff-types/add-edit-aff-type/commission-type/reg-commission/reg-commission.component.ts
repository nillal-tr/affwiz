import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';

@Component({
  selector: 'app-reg-commission',
  templateUrl: './reg-commission.component.html',
  styleUrls: ['./reg-commission.component.css', '../../../../shared/ui/form-style.css']
})
export class RegCommissionComponent {
  countryitems = countries;
  rateTypeParent = 'registration';
  
  affTypeFormCommissionTypeRegCommission = new FormGroup({
    registrationCommissionsCheckbox: new FormControl(''),
    registrationCommissionsValue: new FormControl(''),
  })
}
