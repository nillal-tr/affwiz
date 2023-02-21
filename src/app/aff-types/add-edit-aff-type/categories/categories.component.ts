import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import {
  CategoryList,
  FormControlSettingsCategories,
} from 'src/app/models/form-control-settings-categories.model';
import { FormControlService } from 'src/app/shared/bl/form-control/form-control.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class CategoriesComponent {
  categoryList = CategoryList;
  affTypeFormCategoriesGroup: FormGroup = this.fb.group({});
  searchCat = '';

  // select all in Categories
  @ViewChild('selectCategories')
  selectCategories!: MatSelect;
  allSelected: boolean = false;

  // Search option in the Categories field
  searchValue: string = '';
  filteredCategoriesList: string[] = [];

  @Output() affTypeFormCategoriesEvent = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formControlService: FormControlService
  ) {}

  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.affTypeFormCategoriesGroup;
    }, 10000);
  }

  createForm() {
    this.formControlService.setFormControls({
      fb: this.fb,
      fg: this.affTypeFormCategoriesGroup,
      controlsSettings: FormControlSettingsCategories,
    });
  }

  // Select All in Cateories
  toggleAllSelection() {
    if (this.allSelected) {
      this.selectCategories.options.forEach((item: MatOption) => item.select());
    } else {
      this.selectCategories.options.forEach((item: MatOption) =>
        item.deselect()
      );
    }
  }

  optionClick() {
    this.addNewItem();
    let newStatus = true;
    this.selectCategories.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  // not ready! -- transfer data to parent component
  addNewItem() {
    console.log('add new item func runs');
    if (this.affTypeFormCategoriesGroup.valid) {
      this.affTypeFormCategoriesEvent.emit(
        this.affTypeFormCategoriesGroup.controls
      );
      console.log(this.affTypeFormCategoriesGroup.controls);
    }
  }
}
