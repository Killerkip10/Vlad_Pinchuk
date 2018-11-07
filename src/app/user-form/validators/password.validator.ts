import {ValidationErrors, AbstractControl} from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value;

  for (let i = 0; i < password.length; i++) {
    const symbol = password.charCodeAt(i);

    if (!(symbol >= 65 && symbol <= 90) && !(symbol >= 97 && symbol <= 122) && !(symbol >= 48 && symbol <= 57)) {
      return {password: {message: 'ERROR.LATIN-FIGURE'}};
    }
  }

  return null;
}
