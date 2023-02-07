import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';

@Component({
  selector: 'app-reg-commission',
  templateUrl: './reg-commission.component.html',
  styleUrls: [
    './reg-commission.component.css',
    '../../../../shared/ui/form-style.css',
  ],
})
export class RegCommissionComponent {
  countryitems = countries;
  rateTypeParent = 'registration';

  affTypeFormCommissionTypeRegCommission: FormGroup;

  dataRegistrationCheckbox: any[] = [];
  dataCountries: any[] = [];
  @Output() affTypeFormCommissionTypeRegCommissionEvent =
    new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormCommissionTypeRegCommission = this.formBuilder.group({
      registrationCommissionsCheckbox: new FormControl(''),
      registrationCommissionsValue: new FormControl(''),
    });
  }

  // output of the form to the parent component
  addNewItem() {
    console.log('add new item func runs');
    if (this.affTypeFormCommissionTypeRegCommission.valid) {
      this.affTypeFormCommissionTypeRegCommissionEvent.emit(
        [this.affTypeFormCommissionTypeRegCommission.controls,
        this.dataCountries]
      );
      console.log(this.affTypeFormCommissionTypeRegCommission.controls);
    }
  }

  // push data to array and push it parent
  addItemCountries(data: FormGroup) {
    this.dataCountries.push(data);
  }
}
