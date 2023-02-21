import { Component, EventEmitter, Inject, Output, OnInit } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { countries, ICountryItem } from 'src/app/data-countries';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Event } from '@angular/router';
import { addItem, removeItem, updateItem } from '../../bl/helper';

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
  selectedDataByUser: ICountryItem[] = [];

  // Search option in the countries field
  searchValue = '';
  filteredcountriesList: string[] = [];

  @Output() affTypeFormratePerCountryEvent = new EventEmitter<ICountryItem[]>();

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
        this.fb.control(country.rate, Validators.min(0))
      );
    });
  }

  changeItem(checked: boolean, country: ICountryItem) {
    let itemToRemoveIndex = Number(
      this.selectedDataByUser.findIndex(
        (countryArr) => countryArr.name === country.name
      )
    );

    if (
      checked &&
      country.rate &&
      country.rate > 0 &&
      itemToRemoveIndex === -1
    ) {
      addItem(country, this.selectedDataByUser);
    } else if (
      checked &&
      country.rate &&
      country.rate > 0 &&
      itemToRemoveIndex > -1
    ) {
      updateItem(country, itemToRemoveIndex, this.selectedDataByUser);
    } else if (
      checked &&
      country.rate &&
      country.rate <= 0 &&
      itemToRemoveIndex > -1
    ) {
      removeItem(country, itemToRemoveIndex, this.selectedDataByUser);
    } else if (!checked && itemToRemoveIndex > -1) {
      removeItem(country, itemToRemoveIndex, this.selectedDataByUser);
    }
    console.log(this.selectedDataByUser);
  }

  saveForm() {
    this.dialogRef.close();
    this.affTypeFormratePerCountryEvent.emit(this.selectedDataByUser);
  }
}
