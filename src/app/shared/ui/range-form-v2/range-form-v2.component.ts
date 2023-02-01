import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-range-form-v2',
  templateUrl: './range-form-v2.component.html',
  styleUrls: [
    './range-form-v2.component.less',
    '../../bl/form-control/form-style.css',
  ],
})
export class RangeFormV2Component {
  @Input() fieldOne: IField = {
    fieldName: 'field1',
    label: 1,
    placeholder: 9,
    placeholderAfter: 9,
  };

  @Input() fieldTwo: IField = {
    fieldName: 'field2',
    label: this.fieldOne.placeholder,
    placeholder: 19,
    placeholderAfter: 19,
  };

  @Input() fieldThree: IField = {
    fieldName: 'field3',
    label: this.fieldTwo.placeholder,
    placeholder: 29,
    placeholderAfter: 29,
  };


  @Input() label4 = this.fieldThree.placeholder;

  @Input() unit: string = 'FTDs';
  @Input() unitSymbol: string = '$';

  @Input() maxPleaceholder = 999;

  rangeForm = new FormGroup({
    field1: new FormControl(this.fieldOne.placeholder, [
      Validators.max(this.maxPleaceholder),
      Validators.min(this.fieldOne.label),
    ]),
    field2: new FormControl(19, [
      Validators.max(this.maxPleaceholder),
      Validators.min(this.fieldTwo.label),
    ]),
    field3: new FormControl(this.fieldThree.placeholder, [
      Validators.max(this.maxPleaceholder),
      Validators.min(this.fieldThree.label),
    ]),

    field4: new FormControl('', Validators.min(0)),
    field5: new FormControl('', Validators.min(0)),
    field6: new FormControl('', Validators.min(0)),
    field7: new FormControl('', Validators.min(0)),
  });


  mapping: {[index: string]:any} = {
    field1: (event: any) => {
      this['fieldOne'].placeholderAfter = event.target.value;
      this['fieldTwo'].label = this['fieldOne'].placeholderAfter as number;
    },
    field2: (event: any) => {
      this['fieldTwo'].placeholderAfter = event.target.value;
      this['fieldThree'].label = this['fieldTwo'].placeholderAfter as number;
    },
    field3: (event: any) => {
      this['fieldThree'].placeholderAfter = event.target.value;
      this.label4 = this['fieldThree'].placeholderAfter as number;
    },
  }

  formFunctionality(event: any) {
    console.log(event);
    let fieldName = event.target?.name;

    this.fieldOne.placeholderAfter = this.fieldOne.placeholder;
    this.fieldTwo.placeholderAfter = this.fieldTwo.placeholder;
    this.fieldThree.placeholderAfter = this.fieldThree.placeholder;
    
    this.mapping[fieldName](event);

    // reset the placeholders based on changes in the form
    if (this.fieldOne.placeholder <= this.fieldOne.label)
      this.fieldOne.placeholder !== this.fieldOne.label;
    if (this.fieldTwo.placeholder <= this.fieldTwo.label)
      this.fieldTwo.placeholder++;
    if (this.fieldThree.placeholder <= this.fieldThree.label)
      this.fieldThree.placeholder++;


    // reset the validators based on changes in the form
    if (this.fieldTwo.placeholder !== this.fieldTwo.placeholderAfter) {
      this.rangeForm.controls.field2.setValidators([
        Validators.max(this.maxPleaceholder),
        Validators.min(this.fieldTwo.label),
      ]);
    }

    if (this.fieldThree.placeholder !== this.fieldThree.placeholderAfter) {
      this.rangeForm.controls.field3.setValidators([
        Validators.max(this.maxPleaceholder),
        Validators.min(this.fieldThree.label),
      ]);
    }

    // block the user from typing below the validation
    if (this.fieldTwo.placeholderAfter < this.fieldTwo.label) {
      console.log("working")
      this.rangeForm.controls.field2.disable();
    }

    if (this.fieldThree.placeholderAfter < this.fieldThree.label) {
      this.rangeForm.controls.field3.disable();
    }
  }
}

export interface IField {
  fieldName: string;
  placeholder: number;
  label: number;
  placeholderAfter?: number;
}
