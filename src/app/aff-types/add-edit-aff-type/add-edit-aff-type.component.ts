import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { MatInput } from '@angular/material/input';

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

  // Per Deposit Commissions >CPAD > clicking on Btn to add extra option
  extraPlanOptions: any[] = [];
  clickedNewExtraPlanBtn = 0;
  blockToPushwhenClicked = [
    { blockNumber: 'First' },
    { blockNumber: 'Second' },
    { blockNumber: 'Third' },
    { blockNumber: 'Fourth' },
  ];

  // Categories field
  categoryList: any[] = [
    { name: 'Arabic Stock Material' },
    { name: 'Arabic_Bigger_Banners' },
    { name: 'Arabic_e-course (GIF)' },
  ];

  searchCat = '';

  // select all in Categories
  @ViewChild('select')
  select!: MatSelect;
  allSelected: boolean = false;

  // Search option in the Categories field
  searchValue: string = '';
  filteredCategoriesList: string[] = [];

  // dropdown fields
  tierOptions: ITierCalcMethod[] = [
    {
      value: 'New (Calculate % by Customer NetRevenue)',
      viewValue: 'New (Calculate % by Customer NetRevenue)',
    },
    {
      value: 'Old (Calculate % by Affiliate Gross Revenue)',
      viewValue: 'Old (Calculate % by Affiliate Gross Revenue)',
    },
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

  countries: any[] = [
    { value: 'USA', viewValue: 'USA' },
    { value: 'Israel', viewValue: 'Israel' },
    { value: 'Brazil', viewValue: 'Brazil' },
  ];

  data: any;

  // all form fields - fix: change to json (payments form in Partners project)
  affTypeForm = new FormGroup({
    description: new FormControl('', Validators.required),
    notes: new FormControl(''),
    tierMethod: new FormControl(this.tierOptions[0].value),
    tiers: new FormControl('', Validators.required),
    tier1Rate: new FormControl('', Validators.required),
    tier2Rate: new FormControl('', Validators.required),
    tier3Rate: new FormControl('', Validators.required),
    tier4Rate: new FormControl('', Validators.required),
    tier5Rate: new FormControl('', Validators.required),

    cookieExpiration: new FormControl('60', Validators.required),
    hideTrackingLinks: new FormControl(''),
    hideCreatives: new FormControl(''),
    categories: new FormControl(''),
    searchCategories: new FormControl(''),
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
    
    minCommissionPayout: new FormControl('0', Validators.required),
    viewTieredAffCount: new FormControl(''),
    viewTieredAffDetail: new FormControl(''),
    createCustomLinksAffConsole: new FormControl('checked'),
  });

  constructor() {}
  ngOnInit() {}

  // Build the tiers sub fields (tier #2 and above selected)
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

  // Select All in Cateories
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

  // Per Deposit Commissions >CPAD > clicking on Btn to add extra option
  onClickExtraPlanBtn() {
    if (
      this.clickedNewExtraPlanBtn++ <
      this.blockToPushwhenClicked.length + 1
    ) {
      this.extraPlanOptions.push(
        this.blockToPushwhenClicked[this.clickedNewExtraPlanBtn - 1]
      );
    }
  }

  // submitting the form
  onSubmit(data: any) {
    console.log(data);
  }
}
