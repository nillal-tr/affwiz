import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';
import { FormControlSettingsRegistration } from 'src/app/models/form-control-settings-commission-type-registration.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';
import {
  addItemSingleField,
  createItemToPush,
  FormDataByUser,
  removeItemSingleField,
  updateItemSingleField,
} from 'src/app/shared/bl/helper';

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

  formDataRegCom: FormDataByUser[] = [];
  dataCountries: FormDataByUser[] = [];

  @Output() pushDataEvent = new EventEmitter<any>();

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
  checkedItem(isChecked: boolean) {
    // create
  }

  // Get data from the UI
  changeItem(event: any) {
    console.log(event);
    let item = Number(event?.target?.value);
    const fieldName = event.target.getAttribute('formControlName');

    // if item > 0 && formDataByUser is empty => add
    // if item > 0 && formDataByUser is not empty => update
    // if item = 0 && formDataByUser is not empty => remove
    // if item = undefined && formDataByUser is not empty => remove

    if (item > 0 && this.formDataRegCom.length === 0) {
      addItemSingleField(
        createItemToPush(fieldName, item),
        this.formDataRegCom
      );
    } else if (item > 0 && this.formDataRegCom.length !== 0) {
      updateItemSingleField(
        createItemToPush(fieldName, item),
        0,
        this.formDataRegCom
      );
    } else if ((item = 0 && this.formDataRegCom.length !== 0)) {
      removeItemSingleField(
        createItemToPush(fieldName, item),
        0,
        this.formDataRegCom
      );
    } else if (!item && this.formDataRegCom.length !== 0) {
      removeItemSingleField(
        createItemToPush(fieldName, item),
        0,
        this.formDataRegCom
      );
    }
    console.log(this.formDataRegCom);
  }

  // data from nested component inside this component - push to the main data array:
  getNestedData(data: FormDataByUser) {
    this.dataCountries.push(data);
    this.formDataRegCom.push(this.dataCountries[0]);
  }

  // Transfer data from this component (and it's nested component(s)) to parent component
  transferDataToParent() {
    if (this.affTypeFormRegGroup.valid) {
      this.pushDataEvent.emit([this.formDataRegCom]);
    }
  }
}
