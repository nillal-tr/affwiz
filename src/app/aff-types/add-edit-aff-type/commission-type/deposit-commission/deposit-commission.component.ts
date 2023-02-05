import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MDCTextField} from '@material/textfield';

@Component({
  selector: 'app-deposit-commission',
  templateUrl: './deposit-commission.component.html',
  styleUrls: ['./deposit-commission.component.css', '../../../../shared/ui/form-style.css'],
})
export class DepositCommissionComponent {
  
  placeholderParent1 = 9;
  placeholderParent2 = 19;
  placeholderParent3 = 29;

  labelParent1 = 1;
  labelParent2 = this.placeholderParent1;
  labelParent3 = this.placeholderParent2;
  labelParent4 = this.placeholderParent3;
  unitParent = 'FTDs';
  unitSymbolParent = '$'


  commissions: any[] = [
    { value: 'CPA', viewValue: 'CPA' },
    { value: 'CPAD', viewValue: 'CPAD' },
  ];

  // Per Deposit Commissions >CPAD > clicking on Btn to add extra option
  extraPlanOptionsLimit: number = 4;
  extraPlanOptions: any[] = [];
  clickedNewExtraPlanBtn = 0;
  contentNewExtraPlan = [
    { blockNumber: 'First' },
    { blockNumber: 'Second' },
    { blockNumber: 'Third' },
    { blockNumber: 'Fourth' },
  ];

  // fields
  affTypeFormCommissionTypeDepositCommission = new FormGroup({
    depositCommissionCheckbox: new FormControl(''),
    commissionDropDown: new FormControl('Please select'),
    depositCommissionCPADFTD: new FormControl('',Validators.min(0)),
    depositCommissionCPADPercentDeposit: new FormControl('',Validators.min(0)),
    depositCommissionCPADMinComissionPerTrade: new FormControl('',Validators.min(0)),
    openPositionReq: new FormControl(''),
  });



  // Per Deposit Commissions > CPAD > clicking on Btn to add extra option
  onClickExtraPlanBtn() {
    console.log("onClickExtraPlanBtn function");
    this.clickedNewExtraPlanBtn++
    this.extraPlanOptions.push(
      this.contentNewExtraPlan[this.extraPlanOptions.length]
    )

    // old
    // if (this.clickedNewExtraPlanBtn++ < this.contentNewExtraPlan.length + 1) {
    //   this.extraPlanOptions.push(
    //     this.contentNewExtraPlan[this.clickedNewExtraPlanBtn - 1]
    //   );
    // }
    // console.log("clickedNewExtraPlanBtn:");
    // console.log(this.clickedNewExtraPlanBtn);
    console.log("extraPlanOptions:");
    console.log(this.extraPlanOptions);
  }

  

  onClickCloseIcon(event: any) {
    console.log("onClickCloseIcon function");
    const id = Number(event.srcElement.parentElement.attributes.id.nodeValue);
    console.log(id);
    if(id === 0) {
      this.extraPlanOptions.shift();
    } else if (id > 1) {
      this.extraPlanOptions.splice(id, id-1);
    } else if (id === 1 ) {
      this.extraPlanOptions.splice(id, id);

    }
    console.log("extraPlanOptions:");
    console.log(this.extraPlanOptions);
  }
}
