import {Injectable} from '@angular/core';
import {ValidationErrors, AbstractControl, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {delay, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';

import {User} from '../../../models';
import {
  UserService,
  TokenService
} from '../../../services';

@Injectable()
export class NameAsyncValidatorService {
  constructor(
    public userService: UserService
  ) {}

  public nameAsyncValidator(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value)
        .pipe(
          delay(1000),
          switchMap(value => this.nameValidator(value)),
          switchMap(value => this.nameHttpValidator(value))
        );
    };
  }

  private nameValidator(value: string): Observable<ValidationErrors> {
    return new Observable(obs => {
      const name = this.findWords(value);
      let result: ValidationErrors = {name: {value: value.trim()}};

      if (this.checkLength(name, 0)) {
        result = null;
      }else if (!this.checkLength(name, 2)) {
        result = {name: {message: 'Must be one or two words'}};
      }else if (!this.checkCamelSensitive(name)) {
        result = {name: {message: 'Must be camel case sensitive'}};
      }else if (!this.checkLatinLetter(name)) {
        result = {name: {message: 'Must be only latin letters'}};
      }

      obs.next(result);
      obs.complete();
    });
  }
  private nameHttpValidator(value: ValidationErrors): Observable<ValidationErrors | null> {
    if (!value || value.name.message) {
      return of(value);
    }

    return this.userService.getAll()
      .pipe(
        map(users => {
          if (this.checkFindName(users, value.name.value)) {
            return {name: {message: 'This name already exists'}};
          }

          return null;
        })
      );
  }

  private findWords(value: string): string[] {
    return value.trim().split(' ').filter(Boolean);
  }
  private checkLength(words: string[], maxLength: number): boolean {
    if (words.length > maxLength) {
      return false;
    }else {
      return true;
    }
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
  private checkFindName(users: User[], name: string): boolean {
    if (users.find(v => v.name === name && v.id !== TokenService.decodeToken().id)) {
      return true;
    }else {
      return false;
    }
  }
}

