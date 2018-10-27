import {Injectable} from '@angular/core';
import {ValidationErrors, AbstractControl, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError, delay, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';

import {UserService} from '../../../services';

@Injectable()
export class NameAsyncValidatorService {
  private name: string;

  constructor(public userService: UserService) {}

  public nameAsyncValidator(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      of(control.value)
        .pipe(
          delay(1000),
          map(value => this.nameValidator(value)),
          switchMap(value => this.nameHttpValidator(value))
        );
  }

  private nameValidator(value: string): ValidationErrors {
    const name = this.findWords(value);
    let result: ValidationErrors = null;

    this.name = value;

    if (!this.checkLength(name, 2)) {
      result = {name: {message: 'Must server one or two words'}};
    }else if (!this.checkCamelSensitive(name)) {
      result = {name: {message: 'Must server camel case sensitive'}};
    }else if (!this.checkLatinLetter(name)) {
      result = {name: {message: 'Must server only latin letters'}};
    }

    return result;
  }
  private nameHttpValidator(value: ValidationErrors): Observable<ValidationErrors | null> {
    if (value || !this.name) {
      return of(value);
    }

    return this.userService.checkName(this.name)
      .pipe(
        map(() => null),
        catchError(() => of({name: {message: 'This name already exists'}}))
      );
  }
  private findWords(value: string): string[] {
    return value.trim().split(' ').filter(Boolean);
  }
  private checkLength(words: string[], maxLength: number): boolean {
    return words.length > maxLength ? false : true;
  }
  private checkCamelSensitive(words: string[]): boolean {
    for (const word of words){
      if (word[0].toUpperCase() !== word[0]) {
        return false;
      }
    }

    return true;
  }
  private checkLatinLetter(words: string[]): boolean {
    const letters: string = words[0] + words[1];

    for (let i = 0; i < letters.length; i++) {
      const symbol = letters.charCodeAt(i);

      if (symbol < 65 || (symbol > 90 && symbol < 97) || symbol > 122) {
        return false;
      }
    }

    return true;
  }
}

