// methods for multi-select field

export function addItem(formValue: any, formDataByUser: any[]) {
    formDataByUser.push(formValue);
  }

  export function removeItem(formValue: any, itemToRemoveIndex: number, formDataByUser: any[]) {
    formDataByUser.splice(itemToRemoveIndex, 1);
  }

  export function updateItem(formValue: any, itemToRemoveIndex: number, formDataByUser: any[]) {
    formDataByUser[itemToRemoveIndex] = formValue;
  }


  // methods for field with only one option
  export interface FormDataByUser {
    fieldName: string;
    fieldValue: any;
  }

  export interface FormDataByUser extends Array<FormDataByUser>{}


  let data = {
    fieldName: '',
    fieldValue: ''
  }


  export function createItemToPush(fieldName: string, fieldValue: any) {
    const formData = Object.create(data);
    console.log(formData);
    formData.fieldName = fieldName;
    formData.fieldValue = fieldValue;
    console.log(formData);
    return formData;
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

  


