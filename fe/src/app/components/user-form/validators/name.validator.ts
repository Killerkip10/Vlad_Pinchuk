import {ValidationErrors, AbstractControl} from "@angular/forms";

export function countWordValidator(control: AbstractControl): ValidationErrors | null{
  const name = control.value.trim();

  if(name.split(' ').filter(v=>v).length > 2) {
    return {name: 'Must be 2 words'};
  }
  return null;
}

