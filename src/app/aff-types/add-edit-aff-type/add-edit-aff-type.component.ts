import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

interface ITierCalcMethod {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit-aff-type',
  templateUrl: './add-edit-aff-type.component.html',
  styleUrls: ['./add-edit-aff-type.component.css'],
})
export class AddEditAffTypeComponent implements OnInit {
  firstCTvalue: number = 9;
  secondCTvalue: number = 19;
  thirdCTvalue: number = 29;
  firstSCvalue: number = 9;
  secondSCvalue: number = 19;
  thirdSCvalue: number = 29;
  firstEPCvalue: number = 9;
  secondEPCvalue: number = 19;
  thirdEPCvalue: number = 29;



  data: any;
  clickedextraPlanBtn: boolean = false;


  extraPlanOptions: any[] = [];

  @ViewChild('select')
  select!: MatSelect;

  allSelected: boolean = false;
  categoryList: string[] = [
    'Arabic Stock Material',
    'Arabic_Bigger_Banners',
    'Arabic_e-course (GIF)',
    'Arabic_VIP 30%',
    'Arabic_VIP 6000',
    'Arnon Test',
  ];

  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }
  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  

  affTypeForm = new FormGroup({
    description: new FormControl('', Validators.required),
    notes: new FormControl(''),
    tierMethod: new FormControl(''),
    tiers: new FormControl(''),
    tier1Rate: new FormControl(''),
    tier2Rate: new FormControl(''),
    tier3Rate: new FormControl(''),
    tier4Rate: new FormControl(''),
    tier5Rate: new FormControl(''),

    cookieExpiration: new FormControl('60'),
    hideTrackingLinks: new FormControl(''),
    hideCreatives: new FormControl(''),
    categories: new FormControl(''),

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
    depositCommissionCPAD1: new FormControl(''),
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

    registrationCommissions: new FormControl(''),
    registrationCommissions1: new FormControl(''),
    registrationCommissions2: new FormControl(''),

    minCommissionPayout: new FormControl('0', Validators.required),
    viewTieredAffCount: new FormControl(''),
    viewTieredAffDetail: new FormControl(''),
    createCustomLinksAffConsole: new FormControl('checked'),




  });

  tierMethods: ITierCalcMethod[] = [
    { value: '', viewValue: 'New (Calculate % by Customer NetRevenue)' },
    { value: '', viewValue: 'Old (Calculate % by Affiliate Gross Revenue)' },
  ];

  tiers: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
  ];

  tiersSubFields: any[] = [];

  commissions: any[] = [
    { value: 'CPA', viewValue: 'CPA' },
    { value: 'CPAD', viewValue: 'CPAD' },
  ];

  constructor() {}
  ngOnInit() {}
  

  onSelectChange(event: any) {
    console.log(this.tiersSubFields);
    this.tiersSubFields = [];
    if (event !== 1) {
      for (let i = 1; i < event.value; i++) {
        this.tiersSubFields.push(i);
      }
      console.log(this.tiersSubFields);
    }
  }

  
  clicked = 0;
  itemsToPush = [
    {name: "first"},
    {name: "second"},
    {name: "third"},
    {name: "fourth"}
  ];

  onClickExtraPlanBtn() {
    if (this.clicked++ < this.itemsToPush.length+1) {
      this.extraPlanOptions.push(this.itemsToPush[this.clicked-1])
    }
  }


  onSubmit(data: any) {
    console.log(data)
  }
}
