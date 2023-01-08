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
    depositCommission: new FormControl(''),
    commissionDropDown: new FormControl(''),
    openPositionReq: new FormControl(''),
    saleCommission: new FormControl(''),
    leadCommissions: new FormControl(''),
    registrationCommissions: new FormControl(''),
    minCommissionPayout: new FormControl('0'),
    viewTieredAffCount: new FormControl(''),
    viewTieredAffDetail: new FormControl(''),
    createCustomLinksAffConsole: new FormControl('checked')
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
