import {ValidationErrors, AbstractControl} from "@angular/forms";

export function ageValidator(control: AbstractControl): ValidationErrors | null{
  if(!control.value){
    return null;
  }

  const num = control.value.trim();

  if(isNaN(parseFloat(num)) && !isFinite(num)) {
    return {age: {message: 'It\'s not a number'}};
  }
  if(num % 1 !== 0) {
    return {age: {message: 'Must be integer'}};
  }
  if(num < 18 || num > 65){
    return {age: {message: 'Age range from 18 till 65'}}
  }

  return null;
}
