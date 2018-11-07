import {ValidationErrors, AbstractControl} from '@angular/forms';
import * as moment from 'moment';

export function dateValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }

  const value = control.value.trim();

  if (!moment(value, ['YYYY/MM/DD', 'DD MMMM YYYY', 'DD-MMM-YY'], true).isValid()) {
    return {date: {message: 'ERROR.DATE'}};
  }

  return null;
}
