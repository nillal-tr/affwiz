import { Validators } from '@angular/forms';


  // Categories field (mock)
 export const CategoryList: any[] = [
    { name: 'Arabic Stock Material' },
    { name: 'Arabic_Bigger_Banners' },
    { name: 'Arabic_e-course (GIF)' },
  ];



export const FormControlSettingsCategories: any[] = [
  {
    name: 'categories',
    validators: [Validators.required]
  },
  {
    name: 'searchCategories',
    validators: [Validators.required]
  }
]