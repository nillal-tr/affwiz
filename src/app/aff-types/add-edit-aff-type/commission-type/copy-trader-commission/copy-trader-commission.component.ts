import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-copy-trader-commission',
  templateUrl: './copy-trader-commission.component.html',
  styleUrls: ['./copy-trader-commission.component.css', '../../../../shared/bl/form-control/form-style.css']
})
export class CopyTraderCommissionComponent {
  firstCTvalue: number = 9;
  secondCTvalue: number = 19;
  thirdCTvalue: number = 29;

  affTypeFormCommissionTypeCopyTrader = new FormGroup({
    copyTrader: new FormControl(''),
    copyTrader1: new FormControl(this.firstCTvalue, Validators.max(999)),
    copyTrader1B: new FormControl(''),
    copyTrader2: new FormControl(this.secondCTvalue, [
      Validators.max(999),
      Validators.min(1),
    ]),
    copyTrader2B: new FormControl(''),
    copyTrader3: new FormControl(this.thirdCTvalue, Validators.max(999)),
    copyTrader3B: new FormControl(''),
    copyTrader4: new FormControl(''),
  })

  
}
