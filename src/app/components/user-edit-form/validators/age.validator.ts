import {ValidationErrors, AbstractControl} from '@angular/forms';

export function ageValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const num = control.value.trim();

  if (isNaN(parseFloat(num)) && !isFinite(num)) {
    return {age: {message: 'ERROR.NOT-NUMBER'}};
  }
  if (num % 1 !== 0) {
    return {age: {message: 'ERROR.INTEGER'}};
  }
  if (num < 18 || num > 65) {
    return {age: {message: 'ERROR.RANGE'}};
  }

  return null;
}
