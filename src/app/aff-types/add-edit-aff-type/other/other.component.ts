import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlSettingsOther } from 'src/app/models/form-control-settings-other.model';
import { FormControlService } from '../../../shared/bl/form-control/form-control.service';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css', '../../../shared/ui/form-style.css'],
})
export class OtherComponent implements OnInit {
  rateTypeParent = 'lead';
  affTypeFormOtherGroup: FormGroup = this.fb.group({});

  @Output() affTypeFormOtherEvent = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
  ) {}

  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormOtherGroup.valid) {
      this.affTypeFormOtherEvent.emit(this.affTypeFormOtherGroup.controls);
    }
  }

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormOtherGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormOtherGroup,
      controlsSettings: FormControlSettingsOther,
    });
  }
}
