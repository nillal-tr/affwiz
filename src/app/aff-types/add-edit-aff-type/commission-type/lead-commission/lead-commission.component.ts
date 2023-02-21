import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { countries } from 'src/app/data-countries';
import { FormControlSettingsLead } from 'src/app/models/form-control-settings-commission-type-lead.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

@Component({
  selector: 'app-lead-commission',
  templateUrl: './lead-commission.component.html',
  styleUrls: [
    './lead-commission.component.css',
    '../../../../shared/ui/form-style.css',
  ],
})
export class LeadCommissionComponent {
  affTypeFormLeadGroup: FormGroup = this.fb.group({});
  countryitems = countries;
  rateTypeParent = 'lead';

  dataLeadCheckbox: any[] = [];
  dataCountries: any[] = [];
  @Output() affTypeFormCommissionTypeLeadCommissionEvent =
    new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {}

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormLeadGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormLeadGroup,
      controlsSettings: FormControlSettingsLead,
    });
  }

  // output of the form to the parent component
  addNewItem() {
    if (this.affTypeFormLeadGroup.valid) {
      this.affTypeFormCommissionTypeLeadCommissionEvent.emit([
        this.affTypeFormLeadGroup.controls,
        this.dataCountries,
      ]);
    }
  }

  // push data to array and push it parent
  addItemCountries(data: FormGroup) {
    this.dataCountries.push(data);
  }
}
