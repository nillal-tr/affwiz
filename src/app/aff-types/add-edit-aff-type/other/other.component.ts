import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css','../../../shared/bl/form-control/form-style.css']
})
export class OtherComponent {

  affTypeFormOther = new FormGroup({
    createCustomLinksAffConsole: new FormControl('checked'),
  })


  placeholderParent1 = 9;
  placeholderParent2 = 19;
  placeholderParent3 = 29;

  labelParent1 = 1;
  labelParent2 = this.placeholderParent1;
  labelParent3 = this.placeholderParent2;
  labelParent4 = this.placeholderParent3;
  unitParent = 'FTDs';
  unitSymbolParent = '$'

}
