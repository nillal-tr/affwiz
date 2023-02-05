import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-edit-aff-type',
  templateUrl: './add-edit-aff-type.component.html',
  styleUrls: ['./add-edit-aff-type.component.css', '../../shared/ui/form-style.css'],
})
export class AddEditAffTypeComponent implements OnInit {
  
  // get data from nested components
  dataAddAffTypeForm: any = [];

  addItem(dataAddAffTypeForm: FormGroup) {
    this.dataAddAffTypeForm.push(dataAddAffTypeForm);
  }

  // accordion
  affTypesSections = ['Add A New Affiliate Type', 'Categories', 'Commission Types/Minimum Payout Amount', 'Tiered Affiliate Display Options', 'Other'];
  expandedIndex = 0;


  constructor() {}
  ngOnInit() {}

  
  // submitting the form
  onSubmit() {
    console.log(this.dataAddAffTypeForm);  
  }
}
