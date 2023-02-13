import {
  Component,
  EventEmitter,
  Inject,
  Output,
  OnInit,
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
  ratePerCountry: FormGroup = new FormGroup({});
  
  // Search option in the countries field
  searchValue = '';
  filteredcountriesList: string[] = [];


  @Output() affTypeFormratePerCountryEvent = new EventEmitter<any>();

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: ICountryItem[],
    private formBuilder: FormBuilder
  ) {
    
  }
  ngOnInit() {
    // this.buildCheckboxFormGroup();
    this.createForm();
    console.log(this.ratePerCountry)
    }

  createForm(){
    this.ratePerCountry = this.formBuilder.group({
      chekboxName: this.formBuilder.array(this.createCheckboxList()),
      checkboxRate: this.formBuilder.array(this.createRateList()),
      checkboxRatePerCountry: new FormControl(),
      valueRatePerCountry: new FormControl(),
      searchcountries: new FormControl(''),
    });
  }

  createCheckboxList(): Array<any> {
    let checkboxList = [];
    checkboxList = this.countryList.map(country => country.name);
    return checkboxList;
    
    // //return array of objects
    // {
    //   countryName: 'checkboxState'
    // }
  }

  createRateList(){
    let RateList = [];
    RateList = this.countryList.map(country => country.rate);
    return RateList;
  }

  buildCheckboxFormGroup() {
    // this.countryList.forEach((country) => {
    //   this.checkbox = this.formBuilder.array([{
    //     [country.name]: new FormControl(country.isEnabled),
    //   }]);
    //   console.log(this.ratePerCountry);
    // });
    // console.log('done');
  }

  // output of the form to the parent component
  addNewItem() {
    if (this.ratePerCountry.valid) {
      this.affTypeFormratePerCountryEvent.emit(this.ratePerCountry.controls);
    }
    console.log(this.ratePerCountry.controls)
    console.log(this.countryList[0].isEnabled)
  }



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
