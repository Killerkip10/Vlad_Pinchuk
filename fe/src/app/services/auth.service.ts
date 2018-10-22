import {Injectable} from '@angular/core';
import {throwError} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

import {RestApiService} from './rest-api.service';
import {TokenService} from './token.service';
import {UserService} from './user.service';
import {urlConfig} from '../config';
import {Login} from '../models';

@Injectable()
export class AuthService{
  constructor(
    private restApi: RestApiService,
    private userService: UserService,
    private router: Router
  ){}

  public login(loginObj: Login){
    return this.restApi.post(urlConfig.login, loginObj)
      .pipe(
        map(resp => this.loginHelper(resp)),
        catchError(err => this.handleError(err))
      );
  }
  public logout(): void{
    TokenService.deleteToken();
    this.userService.deleteUser();
    this.router.navigate(['/login']);
  }
  public forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'ERROR.BASE';

    if(error.status === 401) {
      message = 'ERROR.LOGIN';
    }

    return throwError(message);
  };
  private loginHelper(response){
    this.userService.updateUser();
    this.router.navigate(['/']);

    return response;
  }
}
