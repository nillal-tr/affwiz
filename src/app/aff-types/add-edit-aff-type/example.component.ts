import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from '../../shared/bl/form-control/form-control.service';
import { AffTypeFormControlSettings } from '../../models/aff-types.model'


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['../../shared/ui/form-style.css']
})

export class ExampleComponent implements OnInit {

  affTypeFormOtherGroup: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder, 
    private formControlService: FormControlService
    ) {}

   ngOnInit() {
    this.createForm();

    setTimeout(()=>{
      this.affTypeFormOtherGroup;
    
    },10000)


   } 

    createForm() {
      this.formControlService.setFormControls({
        fb: this.fb,
        fg: this.affTypeFormOtherGroup,
        controlsSettings: AffTypeFormControlSettings
      })
    }
}



// export class ExampleComponent implements OnInit {
//   rateTypeParent = 'lead';

//   affTypeFormOther: FormGroup;

//   @Output() affTypeFormOtherEvent = new EventEmitter<any>();

//   constructor(private formBuilder: FormBuilder, private formControlService: FormControlService) {
//     this.affTypeFormOther = this.formBuilder.group({
//       createCustomLinksAffConsole: new FormControl('checked'),
//     })
//   }

//   ngOnInit() {
//     this.formControlService.setFormControls();
//   }

//     // output of the form to the parent component
//     addNewItem() {
//       if (this.affTypeFormOther.valid) {
//         this.affTypeFormOtherEvent.emit(this.affTypeFormOther.controls);
//       }
//     }
// }

