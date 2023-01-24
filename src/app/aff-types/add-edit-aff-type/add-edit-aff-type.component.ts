import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-add-edit-aff-type',
  templateUrl: './add-edit-aff-type.component.html',
  styleUrls: ['./add-edit-aff-type.component.css'],
})
export class AddEditAffTypeComponent implements OnInit {
  data: any;

  // accordion
  affTypesSections = ['Add A New Affiliate Type', 'Categories', 'Commission Types/Minimum Payout Amount', 'Tiered Affiliate Display Options', 'Other'];
  expandedIndex = 0;



  constructor() {}
  ngOnInit() {}

  
  // submitting the form
  onSubmit(data: any) {
    console.log(data);
  }
}
