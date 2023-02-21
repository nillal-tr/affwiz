import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';
import { FormControlSettingsRegistration } from 'src/app/models/form-control-settings-commission-type-registration.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';
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
  affTypeFormRegGroup: FormGroup = this.fb.group({});
  countryitems = countries;
  rateTypeParent = 'registration';

  formDataByUser = [];

  dataRegistrationCheckbox: any[] = [];
  dataCountries: any[] = [];
  @Output() affTypeFormCommissionTypeRegCommissionEvent =
    new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {}

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormRegGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormRegGroup,
      controlsSettings: FormControlSettingsRegistration,
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
    if (this.affTypeFormRegGroup.valid) {
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
