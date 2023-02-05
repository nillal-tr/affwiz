import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/data-countries';

@Component({
  selector: 'app-lead-commission',
  templateUrl: './lead-commission.component.html',
  styleUrls: ['./lead-commission.component.css', '../../../../shared/ui/form-style.css'],
})
export class LeadCommissionComponent {
  countryitems = countries;
  rateTypeParent = 'lead';
  
  affTypeFormCommissionTypeLeadCommission: FormGroup;

  @Output() affTypeFormCommissionTypeLeadCommissionEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormCommissionTypeLeadCommission = this.formBuilder.group({
      leadCommissionsCheckbox: new FormControl(''),
      leadCommissionsValue: new FormControl('', Validators.min(0)),
    })
  }

    // output of the form to the parent component
    addNewItem() {
      console.log('add new item func runs');
      if (this.affTypeFormCommissionTypeLeadCommission.valid) {
        this.affTypeFormCommissionTypeLeadCommissionEvent.emit(this.affTypeFormCommissionTypeLeadCommission.controls);
        console.log(this.affTypeFormCommissionTypeLeadCommission.controls);
      }
    }
  
}
