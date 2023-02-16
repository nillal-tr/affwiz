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
  countryItems: ICountryItem[] | undefined;
  countryData: ICountryItem[] = [];

  @Input() rateType: string = '';
  @Output() countriesEvent = new EventEmitter<any>();

  constructor(public dialog: Dialog) {}

  setRatePerCountry(): void {
    const dialogRef = this.dialog.open<ICountryItem[]>(
      CountriesModalPopupComponent,
      {
        width: '450px',
        height: '450px',
        data: { countryRate: this.countryItems },
      }
    );


    // update countryData array with the values the user selected in the popup:
    (
      dialogRef.componentInstance as CountriesModalPopupComponent
    ).affTypeFormratePerCountryEvent.subscribe((event) => {
      console.log('subscribe function');
      console.log(event)
      this.countryData = event;
      console.log(this.countryData);
    });


    // dialogRef.closed.subscribe((result) => {
    //   if (!result) {
    //     return;
    //   }
    //   console.log(result);

    //   this.countriesEvent.emit(this.countryData);
    //   this.countryItems = result;
    //   console.log(this.countryItems);
    // });



    /*
      const existingItem = this.countryData?.find(
        (country) => country.name === event.country.name
      );
      console.log(existingItem);
      
      // add new country:
      if (event.action === 'add' && existingItem === undefined) {
        this.countryData?.push({
          name: event.country.name,
          rate: event.country.rate,
        });
      }

      // update country that was added already
      if (event.action === 'add' && existingItem !== undefined) {
        // this.countryData?[existingItem].name = event.country.name;
      }

      // remove country that was added alreay (unchecked)
      if (event.action === 'remove') {
        const index = this.countryData?.findIndex(
          (country) => country.name === event.country.name
        );
        this.countryData?.splice(Number(index), 1);
        console.log(this.countryData);
      }

      console.log("the end!");
      console.log(this.countryData);
*/
      // const countryItemValues: any = Object.values(data);
      // const countryNames: string[] = Object.keys(data);

      // for (let i = 0; i < countryItemValues.length; i++) {
      //   if (countryItemValues[i].value > 0) {
      //     this.countryData?.push({
      //       name: countryNames[i],
      //       rate: countryItemValues[i].value,
      //     });
      //     console.log('countryData: ');
      //     console.log(this.countryData);
      //     // this.countriesEvent.emit(this.countryData);
      //   }
      // }

  }
}
