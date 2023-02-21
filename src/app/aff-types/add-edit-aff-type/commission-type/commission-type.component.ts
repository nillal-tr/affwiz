import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormControlSettingsCommissionType } from 'src/app/models/form-control-settings-commission-type.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

@Component({
  selector: 'app-commission-type',
  templateUrl: './commission-type.component.html',
  styleUrls: [
    './commission-type.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class CommissionTypeComponent {
  affTypeFormCommissionTypeGroup: FormGroup = this.fb.group({});

  // accordion commission type
  commissionTypes = [
    'Per Copy Trader Commissions',
    'Per Deposit Commissions',
    'Per Sale Commissions',
    'Per Lead Commissions',
    'Per Registration Commissions',
  ];
  

  
  // get data from nested components (all checkboxes)
  dataCopyTraderCheckbox: any = [];
  dataDepositComissionCheckbox: any = [];
  dataSaleCheckbox: any = [];
  dataLeadCheckbox: any = [];
  dataRegistrationCheckbox: any = [];

  itemsChecked: boolean[] = [];

  @Output() affTypeFormComissionTypeEvent = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {
    this.itemsChecked.fill(false);
  }

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormCommissionTypeGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormCommissionTypeGroup,
      controlsSettings: FormControlSettingsCommissionType,
    });
  }


  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormCommissionTypeGroup.valid) {
      this.affTypeFormComissionTypeEvent.emit(
        [this.affTypeFormCommissionTypeGroup.controls,
        this.dataCopyTraderCheckbox,
        this.dataDepositComissionCheckbox,
        this.dataSaleCheckbox,
        this.dataLeadCheckbox,
        this.dataRegistrationCheckbox],
      )
    }
  }

  

  // add data from nested components to the array ---- NEW version ?
  addItemCopyTraderCheckbox(data: any[]) {
  
    const formControl = Object.values(data[0])[0] as FormGroup;

    // check the checkbox value - true | false
    const isChecked = formControl.value
    this.itemsChecked.push(isChecked);
    
    if (isChecked) {
      this.dataCopyTraderCheckbox.push(data);
      this.addNewItem();
    }
  }

  addItemDepositComissionCheckbox(data: FormGroup) {
    this.dataDepositComissionCheckbox.push(data);
    this.addNewItem();
  }

  addItemSaleCheckbox(data: FormGroup) {
    this.dataSaleCheckbox.push(data);
    this.addNewItem();
  }

  addItemLeadCheckbox(data: FormGroup) {
    this.dataLeadCheckbox.push(data);
    this.addNewItem();
  }

  addItemRegistrationCheckbox(data: FormGroup) {
    this.dataRegistrationCheckbox.push(data);
    this.addNewItem();
  }


}
