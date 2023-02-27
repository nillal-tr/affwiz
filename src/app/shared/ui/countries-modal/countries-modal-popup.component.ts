import { Component, EventEmitter, Inject, Output, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { countries, ICountryItem } from 'src/app/data-countries';
import {
  addItem,
  buildArray,
  FormDataByUser,
  removeItem,
  updateItem,
} from '../../bl/helper';
import { FormControlService } from '../../bl/form-control/form-control.service';
import { FormControlSettingsCountriesModal } from 'src/app/models/form-control-settings-countriesmodal.model';
import { FormDataService } from 'src/app/aff-types/add-edit-aff-type/bl/form-data.service';
import { submitFormObj } from 'src/app/aff-types/add-edit-aff-type/bl/form-data.model';

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
  selectedDataByUser: FormDataByUser[] = [];
  selectedDataByUserFinal: FormDataByUser[] = [];

  // Search option in the countries field
  searchValue = '';
  filteredcountriesList: string[] = [];

  @Output() affTypeFormratePerCountryEvent = new EventEmitter<
    FormDataByUser[]
  >();

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: ICountryItem[],
    private fb: FormBuilder,
    private formControlService: FormControlService,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    if(submitFormObj['regRatePerCountry'].length === 0) {
      this.createForm();
    } else {
      this.createFormAfterChange();
    }
    
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormCountriesModalGroup,
      controlsSettings: FormControlSettingsCountriesModal,
    });

    this.countryList.forEach((country) => {
      this.affTypeFormCountriesModalGroup.addControl(
        `${country.fieldName}Rate`,
        this.fb.control(country.fieldValue, Validators.min(0))
      );
    });
  }

  createFormAfterChange() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormCountriesModalGroup,
      controlsSettings: FormControlSettingsCountriesModal,
    });


    this.countryList.forEach((submitFormObj: any) => {
      this.affTypeFormCountriesModalGroup.addControl(
        `${submitFormObj['regRatePerCountry'].fieldName}Rate`,
        this.fb.control(submitFormObj['regRatePerCountry'].fieldValue, Validators.min(0))
      );
    });
  }


  changeItem(checked: boolean, country: FormDataByUser) {
    let itemToRemoveIndex = Number(
      this.selectedDataByUser.findIndex(
        (countryArr) => countryArr.fieldName === country.fieldName
      )
    );   

    if (
      checked &&
      country.fieldValue &&
      country.fieldValue > 0 &&
      itemToRemoveIndex === -1
    ) {
      addItem(country, this.selectedDataByUser);
    } else if (
      checked &&
      country.fieldValue &&
      country.fieldValue > 0 &&
      itemToRemoveIndex > -1
    ) {
      updateItem(country, itemToRemoveIndex, this.selectedDataByUser);
    } else if (
      checked &&
      country.fieldValue &&
      country.fieldValue <= 0 &&
      itemToRemoveIndex > -1
    ) {
      removeItem(country, itemToRemoveIndex, this.selectedDataByUser);
    } else if (!checked && itemToRemoveIndex > -1) {
      removeItem(country, itemToRemoveIndex, this.selectedDataByUser);
    }
    
    console.log(this.selectedDataByUserFinal);
  }

  

  saveForm() {
    this.dialogRef.close();
    this.affTypeFormratePerCountryEvent.emit(this.selectedDataByUser);
    this.formDataService.update('regRatePerCountry', this.selectedDataByUser);


    
  }
}
