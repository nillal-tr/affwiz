import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


interface ITierCalcMethod {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-add-edit-aff-type',
  templateUrl: './add-edit-aff-type.component.html',
  styleUrls: ['./add-edit-aff-type.component.css']
})
export class AddEditAffTypeComponent implements OnInit {

  affTypeForm = new FormGroup({
    description: new FormControl(''),
    notes: new FormControl(''),
    tierMethod: new FormControl(''),
    tiers: new FormControl(''),
    cookieExpiration: new FormControl('60'),
    hideTrackingLinks: new FormControl(''),
    hideCreatives: new FormControl(''),
    categories: new FormControl(''),

    copyTrader: new FormControl(''),
      copyTrader1: new FormControl(''),
      copyTrader1B: new FormControl(''),
      copyTrader2: new FormControl(''),
      copyTrader2B: new FormControl(''),
      copyTrader3: new FormControl(''),
      copyTrader3B: new FormControl(''),
      copyTrader4: new FormControl(''),

    depositCommission: new FormControl(''),
    depositCommissionCPA1: new FormControl(''),
    depositCommissionCPA1B: new FormControl(''),
    depositCommissionCPA2: new FormControl(''),
    depositCommissionCPA2B: new FormControl(''),
    depositCommissionCPA3: new FormControl(''),
    depositCommissionCPA3B: new FormControl(''),
    depositCommissionCPA4: new FormControl(''),
    depositCommissionCPAD1: new FormControl(''),
    depositCommissionCPAD2: new FormControl(''),


    commissionDropDown: new FormControl(''),
    openPositionReq: new FormControl(''),
    saleCommission: new FormControl(''),
      saleCommission1: new FormControl(''),
      saleCommission1B: new FormControl(''),
      saleCommission2: new FormControl(''),
      saleCommission2B: new FormControl(''),
      saleCommission3: new FormControl(''),
      saleCommission3B: new FormControl(''),
      saleCommission4: new FormControl(''),

    leadCommissions: new FormControl(''),
      leadCommissions1: new FormControl(''),
      leadCommissions2: new FormControl(''),

    registrationCommissions: new FormControl(''),
      registrationCommissions1: new FormControl(''),
      registrationCommissions2: new FormControl(''),


    minCommissionPayout: new FormControl('0'),
    viewTieredAffCount: new FormControl(''),
    viewTieredAffDetail: new FormControl(''),
    createCustomLinksAffConsole: new FormControl('checked'),

    tier2Rate: new FormControl(''),


  })

  tierMethods: ITierCalcMethod[] = [
    {value: '', viewValue: 'New (Calculate % by Customer NetRevenue)'},
    {value: '', viewValue: 'Old (Calculate % by Affiliate Gross Revenue)'}
  ]

  tiers: any[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}
  ]

  commissions: any[] = [
    {value: 'CPA', viewValue: 'CPA'},
    {value: 'CPAD', viewValue: 'CPAD'}
  ]

  categoryList: string[] = ['Arabic Stock Material', ' Arabic_Bigger_Banners', 'Arabic_e-course (GIF)', 'Arabic_VIP 30%', 'Arabic_VIP 6000', 'Arnon Test'];
  
  constructor () {}
  ngOnInit () {}

}
