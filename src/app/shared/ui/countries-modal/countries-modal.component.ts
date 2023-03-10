import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { countries, ICountryItem } from 'src/app/data-countries';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { CountriesModalPopupComponent } from './countries-modal-popup.component';
import { FormDataByUser } from '../../bl/helper';

@Component({
  selector: 'app-countries-modal',
  templateUrl: './countries-modal.component.html',
  styleUrls: ['./countries-modal.component.less', '../../ui/form-style.css'],
})
export class CountriesModalComponent {
  countryData: FormDataByUser[] = [];

  @Input() rateType: string = '';
  @Output() countriesEvent = new EventEmitter<any>();

  constructor(public dialog: Dialog) {}

  setRatePerCountry(): void {
    const dialogRef = this.dialog.open<ICountryItem[]>(
      CountriesModalPopupComponent,
      {
        width: '450px',
        height: '450px',
      }
    );


    let instance = dialogRef.componentInstance as CountriesModalPopupComponent;
    instance.type = this.rateType;
    // update countryData array with the values the user selected in the popup:
    instance.affTypeFormratePerCountryEvent.subscribe((event) => {
      console.log('subscribe function');
      this.countryData = event;
      this.countriesEvent.emit(this.countryData);
    });
  }
}
