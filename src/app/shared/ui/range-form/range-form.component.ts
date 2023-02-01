import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-range-form',
  templateUrl: './range-form.component.html',
  styleUrls: [
    './range-form.component.less',
    '../../bl/form-control/form-style.css',
  ],
})
export class RangeFormComponent {
  @Input() placeholder1 = 9;
  @Input() placeholder2 = 19;
  @Input() placeholder3 = 29;

  @Input() label1: number = 1;
  @Input() label2 = this.placeholder1;
  @Input() label3 = this.placeholder2;
  @Input() label4 = this.placeholder3;

  @Input() unit: string = 'FTDs';
  @Input() unitSymbol: string = '$';

  @Input() maxPleaceholder = 999;

  rangeForm = new FormGroup({
    field1: new FormControl(this.placeholder1, [
      Validators.max(this.maxPleaceholder),
      Validators.min(this.label1),
    ]),
    field2: new FormControl(''),
    field3: new FormControl(this.placeholder2, [
      Validators.max(this.maxPleaceholder),
      Validators.min(this.label2),
    ]),
    field4: new FormControl(''),
    field5: new FormControl(this.placeholder3, [
      Validators.max(this.maxPleaceholder),
      Validators.min(this.label3),
    ]),
    field6: new FormControl(''),
    field7: new FormControl(''),
  });

  formFunctionality(event: any) {
    let fieldName = event.srcElement.attributes[3].nodeValue;
    let placeholderAfterChange = event.srcElement.value;

    let placeholderAfterChange1 = this.placeholder1;
    let placeholderAfterChange2 = this.placeholder2;
    let placeholderAfterChange3 = this.placeholder3;
    
    if(fieldName === "field1") {
      placeholderAfterChange1 = event.srcElement.value;
      this.label2 = placeholderAfterChange1;
    }

    if(fieldName === "field3") {
      placeholderAfterChange2 = event.srcElement.value;
      this.label3 = placeholderAfterChange2;
    }

    if(fieldName === "field5") {
      placeholderAfterChange3 = event.srcElement.value;
      this.label4 = placeholderAfterChange3;
    }

     // reset the placeholders based on changes in the form
     if (this.placeholder1 <= this.label1) this.placeholder1 !== this.label1;
     if (this.placeholder2 <= this.label2) this.placeholder2++;
     if (this.placeholder3 <= this.label3) this.placeholder3++;

     // reset the validators based on changes in the form
    if (this.placeholder2 !== placeholderAfterChange2) {
      this.rangeForm.controls.field3.setValidators([
        Validators.max(this.maxPleaceholder),
        Validators.min(this.label2),
      ]);
    }

    if (this.placeholder2 < this.label2) {
      this.rangeForm.controls.field3.disable();
    }

    if (this.placeholder3 !== placeholderAfterChange3) {
      this.rangeForm.controls.field5.setValidators([
        Validators.max(this.maxPleaceholder),
        Validators.min(this.label3),
      ]);
    }

    if (this.placeholder3 < this.label3) {
      // this.rangeForm.controls.field5.disable();
    }
  }
}
