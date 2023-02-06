import { Component, VERSION, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-edit-aff-type',
  templateUrl: './add-edit-aff-type.component.html',
  styleUrls: ['./add-edit-aff-type.component.css', '../../shared/ui/form-style.css'],
})
export class AddEditAffTypeComponent implements OnInit {
  
  // get data from nested components (accordion sections)
  dataNewAffType: any = [];
  dataCategories: any = [];
  @Input() dataComissionTypes: any = [];
  dataComissionTypes2: any = [];
  dataTieredAffDisplayOptions: any = [];
  dataOther: any = [];

  // get data all accordions together
  dataAddAffTypeForm: any = [];

  innerBtnSave() {
    
  }


  // add data to data arrays
  addItemNewAffType(data: FormGroup) {
    this.dataNewAffType.push(data);
  }

  addItemCategories(data: FormGroup) {
    this.dataCategories.push(data);
  }

  addItemComissionTypes(data: FormGroup) {
    this.dataComissionTypes2.push(data);
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

  // accordion
  affTypesSections = ['Add A New Affiliate Type', 'Categories', 'Commission Types/Minimum Payout Amount', 'Tiered Affiliate Display Options', 'Other'];
  expandedIndex = 0;


  constructor() {}
  ngOnInit() {}

  
  // submitting the form
  onSubmit() {
    console.log("SUBMITTING:");
    console.log(this.dataNewAffType);
    console.log(this.dataCategories);
    console.log(this.dataComissionTypes2);
    console.log(this.dataTieredAffDisplayOptions);
    console.log(this.dataOther);

    // push all arrays to one array
    this.dataAddAffTypeForm.push(this.dataNewAffType);
    this.dataAddAffTypeForm.push(this.dataCategories);
    this.dataAddAffTypeForm.push(this.dataComissionTypes2);
    this.dataAddAffTypeForm.push(this.dataTieredAffDisplayOptions);
    this.dataAddAffTypeForm.push(this.dataOther);

    console.log("all form --- still not working");  
    console.log(this.dataAddAffTypeForm);  
  }
}
