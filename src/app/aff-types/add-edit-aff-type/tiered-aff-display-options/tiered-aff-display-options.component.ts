import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tiered-aff-display-options',
  templateUrl: './tiered-aff-display-options.component.html',
  styleUrls: [
    './tiered-aff-display-options.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class TieredAffDisplayOptionsComponent {
  affTypeFormTieredAffDisplayOption: FormGroup;

  @Output() affTypeFormTieredAffDisplayOptionEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormTieredAffDisplayOption = this.formBuilder.group({
      viewTieredAffCount: new FormControl(''),
      viewTieredAffDetail: new FormControl(''),
    });
  }

  // output of the form to the parent component
  addNewItem() {
    console.log('add new item func runs');
    if (this.affTypeFormTieredAffDisplayOption.valid) {
      this.affTypeFormTieredAffDisplayOptionEvent.emit(
        this.affTypeFormTieredAffDisplayOption.controls
      );
      console.log(this.affTypeFormTieredAffDisplayOption.controls);
    }
  }
}
