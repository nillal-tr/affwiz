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
import { FormControlService } from '../../bl/form-control/form-control.service';
import { FormControlSettingsCountriesModal } from 'src/app/models/form-control-settings-countriesmodal.model';

@Component({
  selector: 'app-countries-modal-popup',
  templateUrl: './countries-modal-popup.component.html',
  styleUrls: [
    '../../ui/form-style.css',
    './countries-modal-popup.component.css',
  ],
})
export class CountriesModalPopupComponent implements OnInit {
  affTypeFormCountriesModalGroup: FormGroup = this.fb.group({});
  countryList: ICountryItem[] = countries;
  searchCat = '';
  selectedDataByUser: ICountryItem[] = [];

  // Search option in the countries field
  searchValue = '';
  filteredcountriesList: string[] = [];

  @Output() affTypeFormratePerCountryEvent = new EventEmitter<ICountryItem[]>();
  
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: ICountryItem[],
    private fb: FormBuilder,
    private formControlService: FormControlService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormCountriesModalGroup,
      controlsSettings: FormControlSettingsCountriesModal,
    });

    this.countryList.forEach((country) => {
      this.affTypeFormCountriesModalGroup.addControl(
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
