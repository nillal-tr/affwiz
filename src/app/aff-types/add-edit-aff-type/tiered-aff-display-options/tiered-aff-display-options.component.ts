import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControlSettingsTieredAffDisplay } from 'src/app/models/form-control-settings-tiered-aff-display.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

@Component({
  selector: 'app-tiered-aff-display-options',
  templateUrl: './tiered-aff-display-options.component.html',
  styleUrls: [
    './tiered-aff-display-options.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class TieredAffDisplayOptionsComponent {
  // affTypeFormTieredAffDisplayOption: FormGroup;
  affTypeFormTieredAffDisplayGroup: FormGroup = this.fb.group({});

  @Output() affTypeFormTieredAffDisplayOptionEvent = new EventEmitter<any>();

  constructor(
    // private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {
    // this.affTypeFormTieredAffDisplayOption = this.formBuilder.group({
    //   viewTieredAffCount: new FormControl(''),
    //   viewTieredAffDetail: new FormControl(''),
    // });
  }

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormTieredAffDisplayGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormTieredAffDisplayGroup,
      controlsSettings: FormControlSettingsTieredAffDisplay,
    });
  }


  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormTieredAffDisplayGroup.valid) {
      this.affTypeFormTieredAffDisplayOptionEvent.emit(
        this.affTypeFormTieredAffDisplayGroup.controls
      );
    }
  }
}
