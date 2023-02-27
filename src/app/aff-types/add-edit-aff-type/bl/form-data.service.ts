import { Injectable } from '@angular/core';
import { submitFormObj } from './form-data.model'


@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() {}

  // update data from UI to the submitFormObj - this Object will be sent so the server
  update(key: string, value: any) {
    submitFormObj[key] = value;
    console.log(submitFormObj);
  }
}
