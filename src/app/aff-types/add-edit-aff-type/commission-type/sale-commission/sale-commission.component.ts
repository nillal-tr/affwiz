import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormControlSettingsSale } from 'src/app/models/form-control-settings-commission-type-sale.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

@Component({
  selector: 'app-sale-commission',
  templateUrl: './sale-commission.component.html',
  styleUrls: [
    './sale-commission.component.css',
    '../../../../shared/ui/form-style.css',
  ],
})
export class SaleCommissionComponent {
  affTypeFormSaleGroup: FormGroup = this.fb.group({});
  
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

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {}


  @Output() affTypeFormCommissionTypeSaleCommissionEvent =
    new EventEmitter<any>();

    ngOnInit() {
      this.createForm();
  
      setTimeout(() => {
        this.affTypeFormSaleGroup;
      }, 10000);
    }
  
    createForm() {
      this.formControlService.setFormControls({
        fb: this.fb,
        fg: this.affTypeFormSaleGroup,
        controlsSettings: FormControlSettingsSale,
      });
    }

  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormSaleGroup.valid) {
      this.affTypeFormCommissionTypeSaleCommissionEvent.emit(
        this.affTypeFormSaleGroup.controls
      );
    }
  }

  // push data to array and push it parent
  addItemFormRange(data: FormGroup) {
    this.dataSaleCheckbox.push(data);
  }
}
