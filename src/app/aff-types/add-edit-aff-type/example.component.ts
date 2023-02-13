import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from '../../shared/bl/form-control/form-control.service';
import { AffTypeFormControlSettings } from '../../models/aff-types.model';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['../../shared/ui/form-style.css'],
})
export class ExampleComponent implements OnInit {
  affTypeFormOtherGroup: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
  ) {}

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
      controlsSettings: AffTypeFormControlSettings,
    });
  }
}
