import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {

  affTypeFormOther = new FormGroup({
    createCustomLinksAffConsole: new FormControl('checked'),
  })

  constructor() {}
  ngOnInit() {}

}
