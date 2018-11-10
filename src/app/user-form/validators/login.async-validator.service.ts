import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, delay, map, mergeMap} from 'rxjs/operators';

import {HttpValidatorService} from './http-validator.service';

@Injectable()
export class LoginAsyncValidatorService {
  public initialLogin: string;

  constructor (
    private http: HttpClient,
    private httpValidService: HttpValidatorService
  ) {}

  public loginAsyncValidator(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      of(null)
        .pipe(
          delay(1000),
          map(() => this.checkLatinFigurSymbols(control.value)),
          mergeMap(() => this.checkLoginHttp(control.value)),
          catchError(err => of({login: {message: err.message}}))
        );
  }

  private checkLatinFigurSymbols(word: string): null {
    for (let i = 0; i < word.length; i++) {
      const symbol = word.charCodeAt(i);

      if (!(symbol >= 65 && symbol <= 90) && !(symbol >= 97 && symbol <= 122) && !(symbol >= 48 && symbol <= 57)) {
        throw new Error('ERROR.LATIN-FIGURE');
      }
    }

    return null;
  }
  private checkLoginHttp(login: string) {
    if (login === this.initialLogin) {
      return of(null);
    } else {
      return this.httpValidService.checkLogin(login);
    }
  }
}
