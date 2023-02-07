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

@Component({
  selector: 'app-countries-modal-popup',
  templateUrl: './countries-modal-popup.component.html',
  styleUrls: [
    '../../ui/form-style.css',
    './countries-modal-popup.component.css',
  ],
})
export class CountriesModalPopupComponent {
  countryList: ICountryItem[] = countries;
  searchCat = '';

  ratePerCountry: FormGroup;

  @Output() affTypeFormratePerCountryEvent = new EventEmitter<any>();

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: ICountryItem[],
    private formBuilder: FormBuilder
  ) {
    this.ratePerCountry = this.formBuilder.group({
      countriesDropdown: new FormControl(''),
      checkboxRatePerCountry: new FormControl(''),
      valueRatePerCountry: new FormControl('', Validators.min(0)),
      countryOption: new FormControl(''),
      searchcountries: new FormControl(''),
    });
  }

  // select all in countries
  @ViewChild('selectcountries')
  selectcountries!: MatSelect;
  allSelected: boolean = false;

  // Search option in the countries field
  searchValue = '';
  filteredcountriesList: string[] = [];

  // output of the form to the parent component
  addNewItem() {
    if (this.ratePerCountry.valid) {
      this.affTypeFormratePerCountryEvent.emit(this.ratePerCountry.controls);
    }
  }

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
    this.addNewItem();
    let itemSelected = true;
    this.selectcountries.options.forEach((item: MatOption) => {
      if (!item.selected) {
        itemSelected = false;
      }
    });
    this.allSelected = itemSelected;
  }
}
