import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  MinValidator,
  Validators,
} from '@angular/forms';
import { FormSubmittingService } from 'src/app/shared/bl/form-control/form-submitting.service';

interface ITierCalcMethod {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-aff-type',
  templateUrl: './new-aff-type.component.html',
  styleUrls: [
    './new-aff-type.component.css',
    '../../../shared/bl/form-control/form-style.css',
  ],
})
export class NewAffTypeComponent {
  tierOptions: ITierCalcMethod[] = [
    {
      value: 'New (Calculate % by Customer NetRevenue)',
      viewValue: 'New (Calculate % by Customer NetRevenue)',
    },
    {
      value: 'Old (Calculate % by Affiliate Gross Revenue)',
      viewValue: 'Old (Calculate % by Affiliate Gross Revenue)',
    },
  ];

  affTypeFormAddNew: FormGroup;

  tiers: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
  ];

  tiersSubFields: any[] = [];

  @Output() affTypeFormAddNewAffTypeEvent = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formSubmitting: FormSubmittingService
  ) {
    this.affTypeFormAddNew = this.formBuilder.group({
      description: new FormControl('', Validators.required),
      notes: new FormControl(''),
      tierMethod: new FormControl(this.tierOptions[0].value),
      tiers: new FormControl('', Validators.required),
      cookieExpiration: new FormControl('60', Validators.required),
      hideTrackingLinks: new FormControl(''),
      hideCreatives: new FormControl(''),
    });
  }

  ngOnInit() {}

  // output of the form to the parent component - based on to service
  addNewItem() {
    console.log('add new item func runs');
    if (this.affTypeFormAddNew.valid) {
      this.affTypeFormAddNewAffTypeEvent.emit(this.affTypeFormAddNew.controls);
    }
  }

  // Build the tiers sub fields (tier #2 and above selected)
  onSelectChange(event: any) {
    this.tiersSubFields = [];
    if (event.value === '1') {
      this.addNewItem();
      return;
    }
    for (let i = 1; i < event.value; i++) {
      this.tiersSubFields.push(i);
      const controlTierSubRate = new FormControl('', [Validators.required, Validators.min(0)]);
      this.affTypeFormAddNew.addControl(`tier${i + 1}Rate`, controlTierSubRate);
    }
    // console.log(this.tiersSubFields);

    this.addNewItem();
  }
}
