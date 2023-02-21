import { Validators, FormControl } from '@angular/forms';

interface ITierCalcMethod {
  value: string;
  viewValue: string;
}

interface Itiers {
  value: string;
  viewValue: string;
}



export const TierOptions: ITierCalcMethod[] = [
  {
    value: 'New (Calculate % by Customer NetRevenue)',
    viewValue: 'New (Calculate % by Customer NetRevenue)',
  },
  {
    value: 'Old (Calculate % by Affiliate Gross Revenue)',
    viewValue: 'Old (Calculate % by Affiliate Gross Revenue)',
  },
];


export const FormControlSettingsNewAffType: any[] = [
  {
    name: 'description',
    validators: [Validators.required]
  },
  {
    name: 'notes',
    validators: []
  },
  {
    name: 'tierMethod',
    validators: [Validators.required],
  },
  {
    name: 'tiers',
    validators: [Validators.required],
  },
  // {
  //   name: 'tierRate',
  //   validators: [Validators.required]
  // },
  {
    name: 'cookieExpiration',
    validators: [Validators.required, Validators.min(0)],
    placeholder: 60
  },
  {
    name: 'hideTrackingLinks',
    validators: []
  },
  {
    name: 'hideCreatives',
    validators: []
  }
];


export const Tiers: Itiers[] = [
  { value: '1', viewValue: '1' },
  { value: '2', viewValue: '2' },
  { value: '3', viewValue: '3' },
  { value: '4', viewValue: '4' },
  { value: '5', viewValue: '5' },
];