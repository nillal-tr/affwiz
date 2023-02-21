import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';
import { addItem, removeItem, updateItem } from 'src/app/shared/bl/helper';

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

  formDataByUser = [];

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

  // event change on input
  changeItem(event: any) {
    let item = Number(event.target.value);

    let itemToRemoveIndex = Number(
      this.formDataByUser.findIndex(
        (formDataByUserArr) => formDataByUserArr === 0
      )
    );
    // if item > 0 and formDataByUser is empty => add
    // if item > 0 and formDataByUser is not empty => update
    // if item = 0 and formDataByUser is not empty => remove
    // if item = undefined and formDataByUser is not empty => remove

    console.log(!item);

    if (item > 0 && this.formDataByUser.length === 0) {
      addItem(item, this.formDataByUser);
    } else if (item > 0 && this.formDataByUser.length !== 0) {
      updateItem(item, 0, this.formDataByUser);
    } else if ((item = 0 && this.formDataByUser.length !== 0)) {
      removeItem(item, 0, this.formDataByUser);
    } else if (!item && this.formDataByUser.length !== 0) {
      removeItem(item, 0, this.formDataByUser);
    }
    console.log(this.formDataByUser);
  }

  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormCommissionTypeRegCommission.valid) {
      this.affTypeFormCommissionTypeRegCommissionEvent.emit([
        this.formDataByUser,
        this.dataCountries,
      ]);
    }
  }

  // push data to array and push it parent
  addItemCountries(data: FormGroup) {
    this.dataCountries.push(data);
    console.log(this.dataCountries)
  }
}
