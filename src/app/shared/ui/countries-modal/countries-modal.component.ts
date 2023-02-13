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

@Component({
  selector: 'app-countries-modal',
  templateUrl: './countries-modal.component.html',
  styleUrls: ['./countries-modal.component.less', '../../ui/form-style.css'],
})
export class CountriesModalComponent {
  countryRate: ICountryItem[] | undefined;

  countryData: any = [];

  @Input() rateType: string = '';
  @Output() countriesEvent = new EventEmitter<any>();

  
  constructor(public dialog: Dialog) {}

  setRatePerCountry(): void {
    const dialogRef = this.dialog.open<ICountryItem[]>(
      CountriesModalPopupComponent,
      {
        width: '450px',
        height: '450px',
        data: { countryRate: this.countryRate },
      }
    );

    // console.log(dialogRef);
    (
      dialogRef.componentInstance as CountriesModalPopupComponent
    ).affTypeFormratePerCountryEvent.subscribe((data) => {
      this.countryData.push(data);
      // console.log(this.countryData);
      this.countriesEvent.emit(this.countryData);
    });

    dialogRef.closed.subscribe((result) => {
      this.countryRate = result;
    });
  }
}
