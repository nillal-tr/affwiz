import { ICountryItem } from 'src/app/data-countries';

// export class Helper {
  // itemToRemoveIndex: number = -1;
  // formDataByUser: any[] = [];
  // formValue: any;

  //0 form changes methods
  export function addItem(formValue: any, formDataByUser: any[]) {
    formDataByUser.push(formValue);
  }

  export function removeItem(formValue: any, itemToRemoveIndex: number, formDataByUser: any[]) {
    formDataByUser.splice(itemToRemoveIndex, 1);
  }

  export function updateItem(formValue: any, itemToRemoveIndex: number, formDataByUser: any[]) {
    formDataByUser[itemToRemoveIndex] = formValue;
  }
// }
