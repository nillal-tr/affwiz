import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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


  affTypeFormCommissionTypeCopyTrader: FormGroup;

  dataComissionTypeCopyTrader: any = [];

  
  @Output() affTypeFormCommissionTypeCopyTraderEvent = new EventEmitter<any>();
  
  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormCommissionTypeCopyTrader = this.formBuilder.group({
      copyTraderCheckbox: new FormControl(''),
    })
  }

    // output of the form to the parent component
    addNewItem() {
      // console.log('add new item func runs');
      if (this.affTypeFormCommissionTypeCopyTrader.valid) {
        this.affTypeFormCommissionTypeCopyTraderEvent.emit(this.affTypeFormCommissionTypeCopyTrader.controls);
        // console.log(this.affTypeFormCommissionTypeCopyTrader.controls);
      }
    }

    // push data to array and push it parent
    addItemFormRange(data: FormGroup) {
      this.dataComissionTypeCopyTrader.push(data);
    }
}

