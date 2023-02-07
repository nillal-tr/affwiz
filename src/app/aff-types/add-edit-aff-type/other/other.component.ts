import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css','../../../shared/ui/form-style.css']
})
export class OtherComponent {
  rateTypeParent = 'lead';

  affTypeFormOther: FormGroup;

  @Output() affTypeFormOtherEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormOther = this.formBuilder.group({
      createCustomLinksAffConsole: new FormControl('checked'),
    })
  }

    // output of the form to the parent component
    addNewItem() {
      if (this.affTypeFormOther.valid) {
        this.affTypeFormOtherEvent.emit(this.affTypeFormOther.controls);
      }
    }
}

