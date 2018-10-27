import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {TokenService} from './token.service';
import {UserService} from './user.service';
import {urlConfig, options} from '../config';
import {Login} from '../models/index';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  public login(loginObj: Login) {
    return this.http.post(urlConfig.login, loginObj, options)
      .pipe(
        map(resp => this.loginHelper(resp)),
        catchError(err => this.handleLoginError(err))
      );
  }
  public forgotPassword(login: string): Observable<string> {
    return this.http.get(urlConfig.forgot + login, options)
      .pipe(
        map(resp => this.forgotHelper(resp)),
        catchError(err => this.handleForgotError(err))
      );
  }
  public logout(): void {
    TokenService.deleteToken();
    this.userService.deleteUser();
    this.router.navigate(['/login']);
  }

  private handleLoginError(error: HttpErrorResponse) {
    return throwError(error.status === 401 ? 'ERROR.LOGIN' : 'ERROR.BASE');
  }
  private handleForgotError(error: HttpErrorResponse) {
    return throwError('ERROR.FORGOT');
  }
  private loginHelper(response) {
    this.userService.updateUser();
    this.router.navigate(['/']);

    return response;
  }
  private forgotHelper(response) {
    const body = response.body;

    if (!body) {
      throw new Error();
    }

    return <string>response.body;
  }
}
