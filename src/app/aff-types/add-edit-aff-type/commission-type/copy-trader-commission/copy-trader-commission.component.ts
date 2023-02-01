import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-copy-trader-commission',
  templateUrl: './copy-trader-commission.component.html',
  styleUrls: ['./copy-trader-commission.component.css', '../../../../shared/bl/form-control/form-style.css']
})
export class CopyTraderCommissionComponent {
  // old
  // firstCTvalue: number = 9;
  // secondCTvalue: number = 19;
  // thirdCTvalue: number = 29;
  
  // new way
  labelParent1 = 1;

  placeholderParent1: number = 9; //9
  placeholderParent2: number = 19; //19
  placeholderParent3: number = 29;  //29

  // labelParent2: number = this.placeholderParent1; 
  // labelParent3: number = this.placeholderParent2;
  // labelParent4: number = this.placeholderParent3;

  labelParent2: number = 9; 
  labelParent3: number = 19;
  labelParent4: number = 29;

  unitParent: string = 'CTs';
  unitSymbolParent: string = '$';


  // how to get it from the child?
  affTypeFormCommissionTypeCopyTrader = new FormGroup({
    copyTrader: new FormControl(''),
  })
}

