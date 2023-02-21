import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlSettingsCopyTrader } from 'src/app/models/form-control-settings-commission-type-copytrader.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

@Component({
  selector: 'app-copy-trader-commission',
  templateUrl: './copy-trader-commission.component.html',
  styleUrls: ['./copy-trader-commission.component.css', '../../../../shared/ui/form-style.css']
})
export class CopyTraderCommissionComponent {
  affTypeFormCopyTraderGroup: FormGroup = this.fb.group({});

  placeholderParent1 = 9;
  placeholderParent2 = 19;
  placeholderParent3 = 29;
  labelParent1 = 1;
  labelParent2 = this.placeholderParent1;
  labelParent3 = this.placeholderParent2;
  labelParent4 = this.placeholderParent3;
  unitParent = 'CTs';
  unitSymbolParent = '$'


  // affTypeFormCommissionTypeCopyTrader: FormGroup;

  dataComissionTypeCopyTrader: any = [];
  
  @Output() affTypeFormCommissionTypeCopyTraderEvent = new EventEmitter<any>();
  
  constructor(
    // private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {
    // this.affTypeFormCommissionTypeCopyTrader = this.formBuilder.group({
    //   copyTraderCheckbox: new FormControl(''),
    // })
  }

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormCopyTraderGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormCopyTraderGroup,
      controlsSettings: FormControlSettingsCopyTrader,
    });
  }

    // output of the form to the parent component
    addNewItem() {
      if (this.affTypeFormCopyTraderGroup.valid) {
        this.affTypeFormCommissionTypeCopyTraderEvent.emit(
          [this.affTypeFormCopyTraderGroup.controls,
            this.dataComissionTypeCopyTrader
          ]);
      }
    }

    // push data to array and push it parent
    addItemFormRange(data: FormGroup) {
      this.dataComissionTypeCopyTrader.push(data);
    }
}

