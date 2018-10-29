import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {urlConfig, options} from '../../config';
import {Login} from '../../models';
import {TokenService} from './token.service';
import {ProfileService} from './profile.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: ProfileService,
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
    return this.http.get<HttpResponse<string>>(urlConfig.forgot + login, options)
      .pipe(
        map(resp => resp.body),
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
    return throwError(error.status === 404 ? 'ERROR.FORGOT' : 'ERROR.BASE');
  }
  private loginHelper(resp): void {
    this.userService.updateUser();
    this.router.navigate(['/']);
  }
}
