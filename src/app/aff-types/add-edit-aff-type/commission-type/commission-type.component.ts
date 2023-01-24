import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commission-type',
  templateUrl: './commission-type.component.html',
  styleUrls: ['./commission-type.component.css']
})
export class CommissionTypeComponent {

    // initial values of fields
    firstCTvalue: number = 9;
    secondCTvalue: number = 19;
    thirdCTvalue: number = 29;
    firstSCvalue: number = 9;
    secondSCvalue: number = 19;
    thirdSCvalue: number = 29;
    firstEPCvalue: number = 9;
    secondEPCvalue: number = 19;
    thirdEPCvalue: number = 29;
    firstDCvalue: number = 9;
    secondDCvalue: number = 19;
    thirdDCvalue: number = 29;
    
  commissions: any[] = [
    { value: 'CPA', viewValue: 'CPA' },
    { value: 'CPAD', viewValue: 'CPAD' },
  ];

  countries: any[] = [
    { value: 'USA', viewValue: 'USA' },
    { value: 'Israel', viewValue: 'Israel' },
    { value: 'Brazil', viewValue: 'Brazil' },
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

  // Per Deposit Commissions > CPAD > clicking on Btn to add extra option
  onClickExtraPlanBtn() {
    if (
      this.clickedNewExtraPlanBtn++ <
      this.contentNewExtraPlan.length + 1
    ) {
      this.extraPlanOptions.push(
        this.contentNewExtraPlan[this.clickedNewExtraPlanBtn - 1]
      );
    }
  }

  affTypeFormCommissionType = new FormGroup({
    copyTrader: new FormControl(''),
    copyTrader1: new FormControl('9', Validators.max(999)),
    copyTrader1B: new FormControl(''),
    copyTrader2: new FormControl('19', [
      Validators.max(999),
      Validators.min(1),
    ]),
    copyTrader2B: new FormControl(''),
    copyTrader3: new FormControl('29', Validators.max(999)),
    copyTrader3B: new FormControl(''),
    copyTrader4: new FormControl(''),

    depositCommission: new FormControl(''),
    depositCommissionCPA1: new FormControl('9', Validators.max(999)),
    depositCommissionCPA1B: new FormControl(''),
    depositCommissionCPA2: new FormControl('19', Validators.max(999)),
    depositCommissionCPA2B: new FormControl(''),
    depositCommissionCPA3: new FormControl('29', Validators.max(999)),
    depositCommissionCPA3B: new FormControl(''),
    depositCommissionCPA4: new FormControl(''),
    depositCommissionCPAD1: new FormControl('1', Validators.min(1)),
    depositCommissionCPAD2: new FormControl('1'),
    depositCommissionCPAD3: new FormControl(''),
    depositCommissionCPAD4: new FormControl(''),

    extraPlanCountries1: new FormControl('9', Validators.max(999)),
    extraPlanCountries1B: new FormControl(''),
    extraPlanCountries2: new FormControl('19', [
      Validators.max(999),
      Validators.min(1),
    ]),
    extraPlanCountries2B: new FormControl(''),
    extraPlanCountries3: new FormControl('29', Validators.max(999)),
    extraPlanCountries3B: new FormControl(''),
    extraPlanCountries4: new FormControl(''),

    commissionDropDown: new FormControl(''),
    openPositionReq: new FormControl(''),
    saleCommission: new FormControl(''),
    saleCommission1: new FormControl('9', Validators.max(999)),
    saleCommission1B: new FormControl(''),
    saleCommission2: new FormControl('19', Validators.max(999)),
    saleCommission2B: new FormControl(''),
    saleCommission3: new FormControl('29', Validators.max(999)),
    saleCommission3B: new FormControl(''),
    saleCommission4: new FormControl(''),

    leadCommissions: new FormControl(''),
    leadCommissions1: new FormControl(''),
    leadCommissions2: new FormControl(''),
    leadCRateCountryBasedCheckbox: new FormControl(''),
    leadCRateCountryBasedInput: new FormControl(''),
    

    registrationCommissions: new FormControl(''),
    registrationCommissions1: new FormControl(''),
    registrationCommissions2: new FormControl(''),
    regRateCountryBasedCheckbox: new FormControl(''),
    regRateCountryBasedInput: new FormControl(''),
    
    minCommissionPayout: new FormControl('0', Validators.required)
    })


}
