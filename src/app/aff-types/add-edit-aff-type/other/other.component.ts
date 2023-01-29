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

  constructor() {}
  ngOnInit() {}

}
