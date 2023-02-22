// methods for multi-select field

import { Form } from "@angular/forms";

export function addItem(formValue: any, formDataByUser: any[]) {
    formDataByUser.push(formValue);
  }

  export function removeItem(formValue: any, itemToRemoveIndex: number, formDataByUser: any[]) {
    formDataByUser.splice(itemToRemoveIndex, 1);
  }

  export function updateItem(formValue: any, itemToRemoveIndex: number, formDataByUser: any[]) {
    formDataByUser[itemToRemoveIndex] = formValue;
  }

  export interface FormDataByUser {
    fieldName: string;
    fieldValue: any;
  }

  export interface FormDataByUser extends Array<FormDataByUser>{}


  // methods for field with only one option
  let data = {
    fieldName: '',
    fieldValue: ''
  }


  export function createItemToPush(fieldName: string, fieldValue: any) {
    const formName = Object.create(data);
    console.log(formName);
    formName.fieldName = fieldName;
    formName.fieldValue = fieldValue;
    console.log(formName);
    return formName;
  }

  export function addItemSingleField(formValue: any, formDataByUser: FormDataByUser[]) {
    formDataByUser.push(formValue);
  }

  export function removeItemSingleField(formValue: any, itemToRemoveIndex: number, formDataByUser: FormDataByUser[]) {
    formDataByUser.splice(itemToRemoveIndex, 1);
  }

  export function updateItemSingleField(formValue: any, itemToRemoveIndex: number, formDataByUser: FormDataByUser[]) {
    formDataByUser[itemToRemoveIndex] = formValue;
  }

  


