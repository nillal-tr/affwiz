import { Component, VERSION, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-aff-type',
  templateUrl: './add-edit-aff-type.component.html',
  styleUrls: [
    './add-edit-aff-type.component.css',
    '../../shared/ui/form-style.css',
  ],
})
export class AddEditAffTypeComponent implements OnInit {
  // get data from nested components (accordion sections)
  @Input() dataComissionTypes: any = [];
  dataNewAffType: any = ['New Affiliate Type:'];
  dataCategories: any = ['Categories:'];
  dataTieredAffDisplayOptions: any = ['Tiered Affiliate Display Options:'];
  dataOther: any = ['Other:'];
  dataComissionTypesWithData: any = ['Commission Types'];

  // accordion
  affTypesSections = [
    'Add A New Affiliate Type',
    'Categories',
    'Commission Types/Minimum Payout Amount',
    'Tiered Affiliate Display Options',
    'Other',
  ];

  // get data all accordions together
  dataAddAffTypeForm: any = [];

  constructor() {}
  ngOnInit() {}



  innerBtnSave() {
    console.log('not ready');
  }

  // add data to data arrays
  addItemNewAffType(data: FormGroup) {
    this.dataNewAffType.push(data);
  }

  addItemCategories(data: FormGroup) {
    this.dataCategories.push(data);
  }

  addItemComissionTypes(data: FormGroup) {
    this.dataComissionTypesWithData.push(data);
  }

  addItemTieredAffDisplayOptions(data: FormGroup) {
    this.dataTieredAffDisplayOptions.push(data);
  }

  addItemOther(data: FormGroup) {
    this.dataOther.push(data);
  }

  addAccordionSectionsDataToOneFile() {
    // if there are no errors all data will be pushed to dataAddAffTypeForm
  }

  // submitting the form
  onSubmit() {
    console.log('SUBMITTING:');
    console.log(this.dataNewAffType);
    console.log(this.dataCategories);
    console.log(this.dataComissionTypesWithData);
    console.log(this.dataTieredAffDisplayOptions);
    console.log(this.dataOther);

    // push all arrays to one array
    this.dataAddAffTypeForm.push(this.dataNewAffType);
    this.dataAddAffTypeForm.push(this.dataCategories);
    this.dataAddAffTypeForm.push(this.dataComissionTypesWithData);
    this.dataAddAffTypeForm.push(this.dataTieredAffDisplayOptions);
    this.dataAddAffTypeForm.push(this.dataOther);

    console.log('all form --- still not working');
    console.log(this.dataAddAffTypeForm);
  }
}
