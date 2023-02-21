import { Validators } from '@angular/forms';

export const FormControlSettingsDeposit: any[] = [
  {
    name: 'depositCommissionCheckbox',
    validators: []
  },
  {
    name: 'commissionDropDown',
    validators: [Validators.required],
  },
  {
    name: 'depositCommissionCPADFTD',
    validators: [Validators.required, Validators.min(1)],
    placeholder: 1
  },
  {
    name: 'depositCommissionCPADPercentDeposit',
    validators: [Validators.required, Validators.min(0)],
    placeholder: 0
  },
  {
    name: 'depositCommissionCPADMinComissionPerTrade',
    validators: [Validators.required, Validators.min(0)],
    placeholder: 0
  },
  {
    name: 'openPositionReq',
    validators: []
  }
]