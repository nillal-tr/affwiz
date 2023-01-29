import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposit-commission',
  templateUrl: './deposit-commission.component.html',
  styleUrls: ['./deposit-commission.component.css'],
})
export class DepositCommissionComponent {
  firstDCvalue: number = 9;
  secondDCvalue: number = 19;
  thirdDCvalue: number = 29;

  firstEPCvalue: number = 9;
  secondEPCvalue: number = 19;
  thirdEPCvalue: number = 29;

  

  commissions: any[] = [
    { value: 'CPA', viewValue: 'CPA' },
    { value: 'CPAD', viewValue: 'CPAD' },
  ];

  // Per Deposit Commissions >CPAD > clicking on Btn to add extra option
  extraPlanOptions: any[] = [];
  clickedNewExtraPlanBtn = 0;
  contentNewExtraPlan = [
    { blockNumber: 'First' },
    { blockNumber: 'Second' },
    { blockNumber: 'Third' },
    { blockNumber: 'Fourth' },
  ];

  // fields
  affTypeFormCommissionTypeDepositCommission = new FormGroup({
    depositCommission: new FormControl(''),
    depositCommissionCPA1: new FormControl(
      this.firstDCvalue,
      Validators.max(999)
    ),
    depositCommissionCPA1B: new FormControl(''),
    depositCommissionCPA2: new FormControl(
      this.secondDCvalue,
      Validators.max(999)
    ),
    depositCommissionCPA2B: new FormControl(''),
    depositCommissionCPA3: new FormControl(
      this.thirdDCvalue,
      Validators.max(999)
    ),
    depositCommissionCPA3B: new FormControl(''),
    depositCommissionCPA4: new FormControl(''),
    depositCommissionCPAD1: new FormControl('1', Validators.min(1)),
    depositCommissionCPAD2: new FormControl('1'),
    depositCommissionCPAD3: new FormControl(''),
    depositCommissionCPAD4: new FormControl(''),

    extraPlanCountries1: new FormControl(
      this.firstEPCvalue,
      Validators.max(999)
    ),
    extraPlanCountries1B: new FormControl(''),
    extraPlanCountries2: new FormControl(this.secondEPCvalue, [
      Validators.max(999),
      Validators.min(1),
    ]),
    extraPlanCountries2B: new FormControl(''),
    extraPlanCountries3: new FormControl(
      this.thirdEPCvalue,
      Validators.max(999)
    ),
    extraPlanCountries3B: new FormControl(''),
    extraPlanCountries4: new FormControl(''),

    commissionDropDown: new FormControl('Please select'),
    openPositionReq: new FormControl(''),
  });


  // Per Deposit Commissions > CPAD > clicking on Btn to add extra option
  onClickExtraPlanBtn() {
    if (this.clickedNewExtraPlanBtn++ < this.contentNewExtraPlan.length + 1) {
      this.extraPlanOptions.push(
        this.contentNewExtraPlan[this.clickedNewExtraPlanBtn - 1]
      );
    }
  }
}
