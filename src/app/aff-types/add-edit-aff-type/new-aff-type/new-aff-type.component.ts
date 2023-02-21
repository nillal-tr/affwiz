import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormControlSettingsNewAffType, TierOptions, Tiers } from 'src/app/models/form-control-settings-new-aff-type.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';


@Component({
  selector: 'app-new-aff-type',
  templateUrl: './new-aff-type.component.html',
  styleUrls: [
    './new-aff-type.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class NewAffTypeComponent implements OnInit {
  tierOptions = TierOptions;
  tiers = Tiers;
  tiersSubFields: number[] = [];
  affTypeFormNewAffGroup: FormGroup = this.fb.group({});
  affTypeFormNewAffGroupData = [];
  
  @Output() affTypeFormAddNewAffTypeEvent = new EventEmitter<any>();
  @Output() innerSaveBtnEvent = new EventEmitter<any>();

  constructor(
    // private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private formControlService: FormControlService
    ) {}

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormNewAffGroup;
    }, 10000);

  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormNewAffGroup,
      controlsSettings: FormControlSettingsNewAffType,
      
    });
    console.log(this.affTypeFormNewAffGroup)
  }


  // Build the tiers sub fields (tier #2 and above selected)
  onSelectChangeTiersDropdown(event: any) {
    this.tiersSubFields = [];
    if (event.value === '1') {
      this.addNewItem();
      return;
    }
    for (let i = 1; i < event.value; i++) {
      this.tiersSubFields.push(i);
      const controlTierSubRate = new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]);
      this.affTypeFormNewAffGroup.addControl(`tier${i + 1}Rate`, controlTierSubRate);
    }
    console.log(this.tiersSubFields);
    this.addNewItem();
  }

  
  // not ready! -- transfer data to parent component
  addNewItem() {
    console.log('add new item func runs');
    // if (this.affTypeFormAddNew.valid) {
    //   this.affTypeFormAddNewAffTypeEvent.emit(this.affTypeFormAddNew.controls);
    //   console.log(this.affTypeFormAddNew.controls);
    // }
  }

  // not ready!
  onClickinnerBtnSave() {
    console.log(Object.values(this.affTypeFormNewAffGroup.controls)[0].valid);
    let x = Object.values(this.affTypeFormNewAffGroup.controls);
    // for(let i=0; i< 5 ; i++)
    // console.log(this.affTypeFormAddNewAffTypeEvent)
    // this.innerSaveBtnEvent.emit(this.affTypeFormAddNewAffTypeEvent)
  }
}
