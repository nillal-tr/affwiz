import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { countries } from 'src/app/data-countries';
import { FormControlSettingsLead } from 'src/app/models/form-control-settings-commission-type-lead.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';
import { addItemSingleField, createItemToPush, FormDataByUser, removeItemSingleField, updateItemSingleField } from 'src/app/shared/bl/helper';

@Component({
  selector: 'app-lead-commission',
  templateUrl: './lead-commission.component.html',
  styleUrls: [
    './lead-commission.component.css',
    '../../../../shared/ui/form-style.css',
  ],
})
export class LeadCommissionComponent {
  affTypeFormLeadGroup: FormGroup = this.fb.group({});
  countryitems = countries;
  rateTypeParent = 'lead';

  dataLeadCheckbox: any[] = [];
  // dataCountries: any[] = [];

  formDataLeadCom: FormDataByUser[] = [];
  dataCountries: FormDataByUser[] = [];
  checked = false;

  
  @Output() pushDataEvent =
    new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {}

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormLeadGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormLeadGroup,
      controlsSettings: FormControlSettingsLead,
    });
  }

  checkedItem(isChecked: boolean) {
    console.log(isChecked);
    this.checked = isChecked
    console.log(this.checked);
  }

  // Get data from the UI
  changeItem(event: any) {
    // console.log(event);
    let item = Number(event?.target?.value);
    const fieldName = event.target.getAttribute('formControlName');

    // if item > 0 && formDataByUser is empty => add
    // if item > 0 && formDataByUser is not empty => update
    // if item = 0 && formDataByUser is not empty => remove
    // if item = undefined && formDataByUser is not empty => remove

    if (item > 0 && this.formDataLeadCom.length === 0) {
      addItemSingleField(
        createItemToPush(fieldName, item),
        this.formDataLeadCom
      );
    } else if (item > 0 && this.formDataLeadCom.length !== 0) {
      updateItemSingleField(
        createItemToPush(fieldName, item),
        0,
        this.formDataLeadCom
      );
    } else if ((item = 0 && this.formDataLeadCom.length !== 0)) {
      removeItemSingleField(
        createItemToPush(fieldName, item),
        0,
        this.formDataLeadCom
      );
    } else if (!item && this.formDataLeadCom.length !== 0) {
      removeItemSingleField(
        createItemToPush(fieldName, item),
        0,
        this.formDataLeadCom
      );
    }
    console.log(this.formDataLeadCom);

    this.transferDataToParent();
  }

  // data from nested component inside this component - push to the main data array:
  getNestedData(data: FormDataByUser) {
    this.dataCountries.push(data);
    this.formDataLeadCom.push(this.dataCountries[0]);
  }

  // Transfer data from this component (and it's nested component(s)) to parent component
  transferDataToParent() {
    if (this.affTypeFormLeadGroup.valid && this.checked) {
      console.log("transferDataToParent run")
      this.pushDataEvent.emit([this.formDataLeadCom]);
    }
  }


  //old
  // output of the form to the parent component
  // addNewItem() {
  //   if (this.affTypeFormLeadGroup.valid) {
  //     this.pushDataEvent.emit([
  //       this.affTypeFormLeadGroup.controls,
  //       this.dataCountries,
  //     ]);
  //   }
  // }

  // // push data to array and push it parent
  // addItemCountries(data: FormGroup) {
  //   this.dataCountries.push(data);
  // }
}
