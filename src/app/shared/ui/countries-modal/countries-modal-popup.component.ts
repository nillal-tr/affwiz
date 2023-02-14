import { Component, EventEmitter, Inject, Output, OnInit } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { countries, ICountryItem } from 'src/app/data-countries';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Event } from '@angular/router';

@Component({
  selector: 'app-countries-modal-popup',
  templateUrl: './countries-modal-popup.component.html',
  styleUrls: [
    '../../ui/form-style.css',
    './countries-modal-popup.component.css',
  ],
})
export class CountriesModalPopupComponent implements OnInit {
  countryList: ICountryItem[] = countries;
  searchCat = '';
  ratePerCountryForm: FormGroup = new FormGroup({});

  // Search option in the countries field
  searchValue = '';
  filteredcountriesList: string[] = [];

  @Output() affTypeFormratePerCountryEvent = new EventEmitter<any>();

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: ICountryItem[],
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.ratePerCountryForm = this.fb.group({
      searchcountries: new FormControl(),
    });

    this.countryList.forEach((country) => {
      this.ratePerCountryForm.addControl(
        `${country.name}Rate`,
        this.fb.control(country.rate)
      );
    });
  }

  // output of the form to the parent component
  addNewItem(checkbox: any) {
    if (!checkbox.checked) return;
    if (this.ratePerCountryForm.valid) {
      this.affTypeFormratePerCountryEvent.emit(
        this.ratePerCountryForm.controls
      );
    }
    console.log(this.ratePerCountryForm.controls);
  }

  // createCheckboxList(): Array<any> {
  //   return this.countryList.map(country => country.name);
  // }

  // createRateList(){
  //   return this.countryList.map(country => country.rate);
  // }

  // buildCheckboxFormGroup() {
  //   this.countryList.forEach((country) => {
  //     this.checkbox = this.formBuilder.array([{
  //       [country.name]: new FormControl(country.isEnabled),
  //     }]);
  //     console.log(this.ratePerCountry);
  //   });
  //   console.log('done');
  // }

  // select all in countries
  // @ViewChild('selectcountries')
  // selectcountries!: MatSelect;
  // allSelected = false;

  // // Select All in Cateories
  // toggleAllSelection() {
  //   if (this.allSelected) {
  //     this.selectcountries.options.forEach((item: MatOption) => item.select());
  //   } else {
  //     this.selectcountries.options.forEach((item: MatOption) =>
  //       item.deselect()
  //     );
  //   }
  // }

  // optionClick() {
  //   this.addNewItem();
  //   let itemSelected = true;
  //   this.selectcountries.options.forEach((item: MatOption) => {
  //     if (!item.selected) {
  //       itemSelected = false;
  //     }
  //   });
  //   this.allSelected = itemSelected;
  // }
}
