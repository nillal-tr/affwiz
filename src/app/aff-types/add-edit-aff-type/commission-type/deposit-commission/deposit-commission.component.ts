import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MDCTextField } from '@material/textfield';
import { FormControlSettingsDeposit } from 'src/app/models/form-control-settings-commission-type-deposit.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

export interface IExtraPlanOptions {
  blockNumber: string;
  clickedNewExtraPlanBtn: number;
  clickedCloseBtn: number;
}
@Component({
  selector: 'app-deposit-commission',
  templateUrl: './deposit-commission.component.html',
  styleUrls: [
    './deposit-commission.component.css',
    '../../../../shared/ui/form-style.css',
  ],
})
export class DepositCommissionComponent {
  affTypeFormDepositGroup: FormGroup = this.fb.group({});
  
  
  placeholderParent1 = 9;
  placeholderParent2 = 19;
  placeholderParent3 = 29;
  labelParent1 = 1;
  labelParent2 = this.placeholderParent1;
  labelParent3 = this.placeholderParent2;
  labelParent4 = this.placeholderParent3;
  unitParent = 'FTDs';
  unitSymbolParent = '$';

  
  // mock
  commissions: any[] = [
    { value: 'CPA', viewValue: 'CPA' },
    { value: 'CPAD', viewValue: 'CPAD' },
  ];

  // Per Deposit Commissions >CPAD > clicking on Btn to add extra option
  extraPlanOptionsLimit: number = 4;
  extraPlanOptions: any[] = [];
  clickedNewExtraPlanBtn = 0;
  clickedCloseBtn = 0;
  contentNewExtraPlan = [
    { blockNumber: 'First' },
    { blockNumber: 'Second' },
    { blockNumber: 'Third' },
    { blockNumber: 'Fourth' },
  ];

  // fields
  // affTypeFormCommissionTypeDepositCommission: FormGroup;

  dataDepositComissionCheckbox: any[] = [];
  dataComissionTypeDepositComission: any = [];

  @Output() affTypeFormCommissionTypeDepositCommissionEvent =
    new EventEmitter<any>();

  constructor(
    // private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {
    // this.affTypeFormCommissionTypeDepositCommission = this.formBuilder.group({
    //   depositCommissionCheckbox: new FormControl(''),
    //   commissionDropDown: new FormControl('Please select'),
    //   depositCommissionCPADFTD: new FormControl('', Validators.min(0)),
    //   depositCommissionCPADPercentDeposit: new FormControl(
    //     '',
    //     Validators.min(0)
    //   ),
    //   depositCommissionCPADMinComissionPerTrade: new FormControl(
    //     '',
    //     Validators.min(0)
    //   ),
    //   openPositionReq: new FormControl(''),
    // });
  }

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormDepositGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormDepositGroup,
      controlsSettings: FormControlSettingsDeposit,
    });
  }  
  
  // Per Deposit Commissions > CPAD > clicking on Btn to add extra option
  onClickExtraPlanBtn() {
    this.extraPlanOptions.push(this.clickedNewExtraPlanBtn);
    this.clickedNewExtraPlanBtn++;
  }

  onClickCloseIcon(i: number) {
    this.extraPlanOptions.splice(i, 1);
  }


  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormDepositGroup.valid) {
      this.affTypeFormCommissionTypeDepositCommissionEvent.emit(
        [this.affTypeFormDepositGroup.controls,
        this.dataDepositComissionCheckbox,
      this.dataComissionTypeDepositComission]
      );
    }
  }

  // push data to array and push it parent
  addItemFormRange(data: FormGroup) {
    this.dataDepositComissionCheckbox.push(data);
  }

}
