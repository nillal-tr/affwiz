import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from '../../../shared/bl/form-control/form-control.service';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css','../../../shared/ui/form-style.css']
})


export class OtherComponent implements OnInit {
  rateTypeParent = 'lead';

  affTypeFormOther: FormGroup;

  @Output() affTypeFormOtherEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private formControlService: FormControlService) {
    this.affTypeFormOther = this.formBuilder.group({
      createCustomLinksAffConsole: new FormControl('checked'),
    })
  }

  ngOnInit() {
    // this.formControlService.setFormControls();
  }

    // output of the form to the parent component
    addNewItem() {
      if (this.affTypeFormOther.valid) {
        this.affTypeFormOtherEvent.emit(this.affTypeFormOther.controls);
      }
    }
}

