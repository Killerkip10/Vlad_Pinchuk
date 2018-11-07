import {Injectable} from '@angular/core';
import {ValidationErrors, AbstractControl, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError, delay, map, mergeMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';

import {HttpValidatorService} from './http-validator.service';

@Injectable()
export class NameAsyncValidatorService {
  public initialName: string;

  constructor(public httpValidService: HttpValidatorService) {}

  public nameAsyncValidator(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      of(null)
        .pipe(
          delay(1000),
          map(() => this.checkLength(control.value, 2)),
          map(() => this.checkCamelSensitive(control.value)),
          map(() => this.checkLatinLetter(control.value)),
          mergeMap(() => this.checkNameHttp(control.value)),
          catchError(err => of({name: {message: err.message}}))
        );
  }

  private findWords(value: string): string[] {
    return value.trim().split(' ').filter(Boolean);
  }
  private checkLength(name: string, maxLength: number): null {
    if (this.findWords(name).length > maxLength) {
      throw new Error('ERROR.WORDS-COUNT');
    } else {
      return null;
    }
  }
  private checkCamelSensitive(name: string): null {
    for (const word of this.findWords(name)){
      if (word[0].toUpperCase() !== word[0]) {
        throw new Error('ERROR.CAMEL');
      }
    }

    return null;
  }
  private checkLatinLetter(name: string): null {
    const str = this.findWords(name).join('');

    for (let i = 0; i < str.length; i++) {
      const symbol = str.charCodeAt(i);

      if (!(symbol >= 65 && symbol <= 90) && !(symbol >= 97 && symbol <= 122)) {
        throw new Error('ERROR.LATIN');
      }
    }

    return null;
  }
  private checkNameHttp(name: string) {
    if (name === this.initialName) {
      return of(null);
    } else {
      return this.httpValidService.checkName(name);
    }
  }
}

