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

  dataRegistrationCheckbox: any[] = [];
  dataCountries: FormDataByUser[] = [];
  @Output() pushDataEvent =
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
    console.log(event);
    // this is relevant for field with only one option:
    let item = Number(event.target.value);
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

  // OLD: output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormRegGroup.valid) {
      this.pushDataEvent.emit([
        this.formDataRegCom
      ]);
    }
  }

  // push data to array and push it parent
  addItemCountries(data: FormDataByUser) {
    this.dataCountries.push(data);
    this.formDataRegCom.push(this.dataCountries[0])
  }
}
