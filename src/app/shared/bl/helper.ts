export interface FormDataByUser {
  fieldName: string;
  fieldValue: any;
}

export interface FormDataByUser extends Array<FormDataByUser> {}

let data = {
  fieldName: '',
  fieldValue: '',
};


// methods for multi-select field

export function buildArray(formMainName: any, formDataByUserFinal: FormDataByUser[], formDataByUser: FormDataByUser[]) {
  // if(formDataByUser.length === 0) {
    formDataByUserFinal.push(formMainName);
    formDataByUserFinal[0].fieldValue.push(formDataByUser);
  // }
}
export function addItem(formValue: any, formDataByUser: FormDataByUser[]) {
  formDataByUser.push(formValue);
}

export function removeItem(
  formValue: any,
  itemToRemoveIndex: number,
  formDataByUser: FormDataByUser[]
) {
  formDataByUser.splice(itemToRemoveIndex, 1);
}

export function updateItem(
  formValue: any,
  itemToRemoveIndex: number,
  formDataByUser: FormDataByUser[]
) {
  formDataByUser[itemToRemoveIndex] = formValue;
}


// methods for field with only one option

export function createItemToPush(fieldName: string, fieldValue: any) {
  const formData = Object.create(data);
  formData.fieldName = fieldName;
  formData.fieldValue = fieldValue;
  return formData;
}

export function addItemSingleField(
  formValue: any,
  formDataByUser: FormDataByUser[]
) {
  formDataByUser.push(formValue);
}

export function removeItemSingleField(
  formValue: any,
  itemToRemoveIndex: number,
  formDataByUser: FormDataByUser[]
) {
  formDataByUser.splice(itemToRemoveIndex, 1);
}

export function updateItemSingleField(
  formValue: any,
  itemToRemoveIndex: number,
  formDataByUser: FormDataByUser[]
) {
  formDataByUser[itemToRemoveIndex] = formValue;
}


// methods for checkboxes 
export function checkedItem2(isChecked: boolean) {
  console.log(isChecked);
  // create
}
