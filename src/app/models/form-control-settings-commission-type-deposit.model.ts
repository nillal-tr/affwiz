import { Validators } from '@angular/forms';

export const FormControlSettingsDeposit: any[] = [
  {
    name: 'depositCommissionCheckbox',
    validators: []
  },
  {
    name: 'commissionDropDown',
    validators: []
  },
  {
    name: 'depositCommissionCPADFTD',
    validators: [Validators.min(0)]
  },
  {
    name: 'depositCommissionCPADPercentDeposit',
    validators: [Validators.min(0)]
  },
  {
    name: 'depositCommissionCPADMinComissionPerTrade',
    validators: [Validators.min(0)]
  },
  {
    name: 'openPositionReq',
    validators: []
  }
]