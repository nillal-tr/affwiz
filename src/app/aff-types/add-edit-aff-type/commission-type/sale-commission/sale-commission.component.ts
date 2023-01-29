import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sale-commission',
  templateUrl: './sale-commission.component.html',
  styleUrls: ['./sale-commission.component.css', '../../../../shared/bl/form-control/form-style.css']
})
export class SaleCommissionComponent {
  firstSCvalue: number = 9;
  secondSCvalue: number = 19;
  thirdSCvalue: number = 29;
  
  affTypeFormCommissionTypeSaleCommission = new FormGroup({
    saleCommission: new FormControl(''),
    saleCommission1: new FormControl('9', Validators.max(999)),
    saleCommission1B: new FormControl(''),
    saleCommission2: new FormControl('19', Validators.max(999)),
    saleCommission2B: new FormControl(''),
    saleCommission3: new FormControl('29', Validators.max(999)),
    saleCommission3B: new FormControl(''),
    saleCommission4: new FormControl(''),
  })
}
