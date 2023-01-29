import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  // affTypeFormAddNew = new FormGroup({
  //   description: new FormControl('', Validators.required),
  //   notes: new FormControl(''),
  //   tierMethod: new FormControl(this.tierOptions[0].value),
  //   tiers: new FormControl('', Validators.required),
  //   // tier2Rate: new FormControl('', Validators.required),
  //   // tier3Rate: new FormControl('', Validators.required),
  //   // tier4Rate: new FormControl('', Validators.required),
  //   // tier5Rate: new FormControl('', Validators.required),

  //   cookieExpiration: new FormControl('60', Validators.required),
  //   hideTrackingLinks: new FormControl(''),
  //   hideCreatives: new FormControl(''),
  // });

  tiers: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
  ];

  tiersSubFields: any[] = [];

  @Output() affTypeFormAddNewAffTypeEvent = new EventEmitter<any>();



  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormAddNew = this.formBuilder.group({
      description: new FormControl('', Validators.required),
      notes: new FormControl(''),
      tierMethod: new FormControl(this.tierOptions[0].value),
      tiers: new FormControl('', Validators.required),
      // tier2Rate: new FormControl('', Validators.required),
      // tier3Rate: new FormControl('', Validators.required),
      // tier4Rate: new FormControl('', Validators.required),
      // tier5Rate: new FormControl('', Validators.required),
  
      cookieExpiration: new FormControl('60', Validators.required),
      hideTrackingLinks: new FormControl(''),
      hideCreatives: new FormControl(''),
    });
  }

  ngOnInit() {
    
  }

  // output of the form to the parent component
  addNewItem(value: string) {
    if (this.affTypeFormAddNew.valid) {
      console.log("valid form")
      this.affTypeFormAddNewAffTypeEvent.emit(this.affTypeFormAddNew.controls);
    }
  }

  // Build the tiers sub fields (tier #2 and above selected)
  onSelectChange(event: any) {
    this.tiersSubFields = [];
    if (event.value !== '1') {
      for (let i = 1; i < event.value; i++) {
        this.tiersSubFields.push(i);
        const control = new FormControl('', [Validators.required]);
        this.affTypeFormAddNew.addControl(`tier${i + 1}Rate`, control);
      }
      console.log(this.tiersSubFields);
    }
  }
}
