import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sale-commission',
  templateUrl: './sale-commission.component.html',
  styleUrls: [
    './sale-commission.component.css',
    '../../../../shared/ui/form-style.css',
  ],
})
export class SaleCommissionComponent {
  placeholderParent1 = 9;
  placeholderParent2 = 19;
  placeholderParent3 = 29;

  labelParent1 = 1;
  labelParent2 = this.placeholderParent1;
  labelParent3 = this.placeholderParent2;
  labelParent4 = this.placeholderParent3;
  unitParent = 'FTDs';
  unitSymbolParent = '$';

  dataComissionTypeSale: any = [];
  dataSaleCheckbox: any[] = [];

  affTypeFormCommissionTypeSaleCommission: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormCommissionTypeSaleCommission = this.formBuilder.group({
      saleCommissionCheckbox: new FormControl(''),
    });
  }

  @Output() affTypeFormCommissionTypeSaleCommissionEvent =
    new EventEmitter<any>();

  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormCommissionTypeSaleCommission.valid) {
      this.affTypeFormCommissionTypeSaleCommissionEvent.emit(
        this.affTypeFormCommissionTypeSaleCommission.controls
      );
    }
  }

  // push data to array and push it parent
  addItemFormRange(data: FormGroup) {
    this.dataSaleCheckbox.push(data);
  }
}
