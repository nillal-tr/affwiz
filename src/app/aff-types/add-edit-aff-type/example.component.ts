import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlService } from '../../shared/bl/form-control/form-control.service';
import { FormControlSettingsExample } from '../../models/form-control-settings-example.model';

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
      controlsSettings: FormControlSettingsExample,
    });
  }
}
