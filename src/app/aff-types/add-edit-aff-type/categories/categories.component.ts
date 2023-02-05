import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class CategoriesComponent {

  // Categories field (mock)
  categoryList: any[] = [
    { name: 'Arabic Stock Material' },
    { name: 'Arabic_Bigger_Banners' },
    { name: 'Arabic_e-course (GIF)' },
  ];

  searchCat = '';

  // select all in Categories
  @ViewChild('selectCategories')
  selectCategories!: MatSelect;
  allSelected: boolean = false;

  // Search option in the Categories field
  searchValue: string = '';
  filteredCategoriesList: string[] = [];

  affTypeFormCategories: FormGroup;

  @Output() affTypeFormCategoriesEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.affTypeFormCategories = this.formBuilder.group({
      categories: new FormControl(''),
      searchCategories: new FormControl(''),
    });
  }

  // output of the form to the parent component - based on to service
  addNewItem() {
    console.log('add new item func runs');
    if (this.affTypeFormCategories.valid) {
      this.affTypeFormCategoriesEvent.emit(this.affTypeFormCategories.controls);
      console.log(this.affTypeFormCategories.controls);
    }
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
}
