import { Injectable } from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static textValidate(control: AbstractControl){
    const reg = /^[A-Za-z +-]+$/;
    if(control.value.match(reg)) {return null; }
    else{return {'textValidate' : true};}
  };

  static NumberValidate = () => (control: AbstractControl) => {
    const result = /^[0-9]+$/.test(control.value);
    return result == true ? null : {'error': "Number only"}
  };

}
