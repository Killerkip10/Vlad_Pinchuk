import {FormGroup, ValidationErrors} from "@angular/forms";

export function loggerValidation(control: FormGroup): ValidationErrors | null{
  console.log(control);
  return null;
}
