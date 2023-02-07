import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MDCTextField } from '@material/textfield';

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
  affTypeFormCommissionTypeDepositCommission: FormGroup;

  dataDepositComissionCheckbox: any[] = [];
  dataComissionTypeDepositComission: any = [];

  @Output() affTypeFormCommissionTypeDepositCommissionEvent =
    new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormCommissionTypeDepositCommission = this.formBuilder.group({
      depositCommissionCheckbox: new FormControl(''),
      commissionDropDown: new FormControl('Please select'),
      depositCommissionCPADFTD: new FormControl('', Validators.min(0)),
      depositCommissionCPADPercentDeposit: new FormControl(
        '',
        Validators.min(0)
      ),
      depositCommissionCPADMinComissionPerTrade: new FormControl(
        '',
        Validators.min(0)
      ),
      openPositionReq: new FormControl(''),
    });
  }

  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormCommissionTypeDepositCommission.valid) {
      this.affTypeFormCommissionTypeDepositCommissionEvent.emit(
        [this.affTypeFormCommissionTypeDepositCommission.controls,
        this.dataDepositComissionCheckbox,
      this.dataComissionTypeDepositComission]
      );
    }
  }

  // push data to array and push it parent
  addItemFormRange(data: FormGroup) {
    this.dataDepositComissionCheckbox.push(data);
  }

  

  // Per Deposit Commissions > CPAD > clicking on Btn to add extra option
  onClickExtraPlanBtn() {
    this.extraPlanOptions.push(this.clickedNewExtraPlanBtn);
    this.clickedNewExtraPlanBtn++;
    // console.log(this.extraPlanOptions);
  }

  onClickCloseIcon(i: number) {
    // console.log(i);
    this.extraPlanOptions.splice(i, 1);
  }
}
