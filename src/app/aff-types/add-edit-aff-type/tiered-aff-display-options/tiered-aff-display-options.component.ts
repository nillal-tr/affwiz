import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tiered-aff-display-options',
  templateUrl: './tiered-aff-display-options.component.html',
  styleUrls: ['./tiered-aff-display-options.component.css', '../../../shared/ui/form-style.css']
})
export class TieredAffDisplayOptionsComponent {
  affTypeFormTieredAffDisplayOption = new FormGroup({
    viewTieredAffCount: new FormControl(''),
    viewTieredAffDetail: new FormControl(''),
  })
}
