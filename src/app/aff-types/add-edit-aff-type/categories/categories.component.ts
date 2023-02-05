import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css',
    '../../../shared/ui/form-style.css',
  ],
})
export class CategoriesComponent {
  affTypeFormCategories = new FormGroup({
    categories: new FormControl(''),
    searchCategories: new FormControl(''),
  });

  // Categories field
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
    let newStatus = true;
    this.selectCategories.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  @Output() affTypeFormCategoriesEvent = new EventEmitter<FormGroup>();

  // output of the form to the parent component
  addNewItem(value: FormGroup) {
    this.affTypeFormCategoriesEvent.emit(value);
  }
  
}
