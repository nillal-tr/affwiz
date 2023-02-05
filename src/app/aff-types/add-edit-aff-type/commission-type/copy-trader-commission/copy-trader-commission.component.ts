import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-copy-trader-commission',
  templateUrl: './copy-trader-commission.component.html',
  styleUrls: ['./copy-trader-commission.component.css', '../../../../shared/ui/form-style.css']
})
export class CopyTraderCommissionComponent {
  placeholderParent1 = 9;
  placeholderParent2 = 19;
  placeholderParent3 = 29;

  labelParent1 = 1;
  labelParent2 = this.placeholderParent1;
  labelParent3 = this.placeholderParent2;
  labelParent4 = this.placeholderParent3;
  unitParent = 'CTs';
  unitSymbolParent = '$'


  affTypeFormCommissionTypeCopyTrader = new FormGroup({
    copyTraderCheckbox: new FormControl(''),
  })
}

