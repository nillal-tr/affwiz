import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css','../../../shared/ui/form-style.css']
})
export class OtherComponent {
  rateTypeParent = 'lead'
  affTypeFormOther = new FormGroup({
    createCustomLinksAffConsole: new FormControl('checked'),
  })
}
