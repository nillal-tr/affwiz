import {Component, Inject, Input, ViewChild} from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { countries, ICountryItem } from 'src/app/data-countries';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-countries-modal',
  templateUrl: './countries-modal.component.html',
  styleUrls: ['./countries-modal.component.less', '../../bl/form-control/form-style.css']
})
export class countriesModalComponent {
  countryRate: ICountryItem[] | undefined;
  @Input() rateType: string = '';
  
  constructor(public dialog: Dialog) {}

  setRatePerCountry(): void {
    const dialogRef = this.dialog.open<ICountryItem[]>(countriesModalPopupComponent, {
      width: '450px',
      data: {countryRate: this.countryRate},
    });

    dialogRef.closed.subscribe(result => {
      this.countryRate = result;
    });
  }
}


// ************************************************* pop up
@Component({
  selector: 'app-countries-modal-popup',
  templateUrl: './countries-modal-popup.component.html',
  styleUrls: ['../../bl/form-control/form-style.css', './countries-modal-popup.component.css']
})
export class countriesModalPopupComponent {
  countryList: ICountryItem[] = countries;
  searchCat = '';

  ratePerCountry = new FormGroup({
    checkboxRatePerCountry: new FormControl(''),
    valueRatePerCountry: new FormControl('', Validators.min(0)),
    countriesDropdown: new FormControl(''),
    searchcountries: new FormControl('')
  });

  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: ICountryItem[]) {}
  
  // select all in countries
  @ViewChild('selectcountries')
  selectcountries!: MatSelect;
  allSelected: boolean = false;

  // Search option in the countries field
  searchValue: string = '';
  filteredcountriesList: string[] = [];

  // Select All in Cateories
  toggleAllSelection() {
    if (this.allSelected) {
      this.selectcountries.options.forEach((item: MatOption) => item.select());
    } else {
      this.selectcountries.options.forEach((item: MatOption) =>
        item.deselect()
      );
    }
  }

  optionClick() {
    let itemSelected = true;
    this.selectcountries.options.forEach((item: MatOption) => {
      if (!item.selected) {
        itemSelected = false;      }
    });
    this.allSelected = itemSelected;
  }
}
