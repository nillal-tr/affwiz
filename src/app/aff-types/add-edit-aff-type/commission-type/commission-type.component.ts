import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commission-type',
  templateUrl: './commission-type.component.html',
  styleUrls: ['./commission-type.component.css', '../../../shared/bl/form-control/form-style.css'],
})
export class CommissionTypeComponent {

    // accordion commission type
    commissionTypes = ['Per Copy Trader Commissions', 'Per Deposit Commissions', 'Per Sale Commissions', 'Per Lead Commissions', 'Per Registration Commissions'];
    expandedIndex = 0;
  

  affTypeFormCommissionType = new FormGroup({
    minCommissionPayout: new FormControl('0', Validators.required),
  });
}
