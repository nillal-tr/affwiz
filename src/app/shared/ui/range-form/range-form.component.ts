import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-range-form',
  templateUrl: './range-form.component.html',
  styleUrls: ['./range-form.component.less', '../../bl/form-control/form-style.css']
})
export class RangeFormComponent {
 
  @Input() placeholder1: number | undefined = 9;
  @Input() placeholder2: number | undefined = 19;
  @Input() placeholder3: number | undefined = 29;


   @Input() label1: number = 1;
   @Input() label2: number | undefined;
   @Input() label3: number | undefined;
   @Input() label4: number | undefined;

   @Input() unit: string = 'CTs';
   @Input() unitSymbol: string = '$'

  rangeForm = new FormGroup({
    field1: new FormControl(this.placeholder1, Validators.max(999)),
    field2: new FormControl(''),
    field3: new FormControl(this.placeholder2, [
      Validators.max(999),
      Validators.min(1),
    ]),
    field4: new FormControl(''),
    field5: new FormControl(this.placeholder3, Validators.max(999)),
    field6: new FormControl(''),
    field7: new FormControl(''),
  })

}
