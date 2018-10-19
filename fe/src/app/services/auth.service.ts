import {Injectable} from "@angular/core";
import {throwError} from "rxjs/index";
import {catchError, map} from "rxjs/internal/operators";
import {HttpErrorResponse} from "@angular/common/http";

import {RestApiService} from './rest-api.service';
import {TokenService} from './token.service';
import {urlConfig} from '../config';
import {Login} from '../models';

@Injectable()
export class AuthService{
  constructor(private restApi: RestApiService){}

  public login(loginObj: Login){
    return this.restApi.post(urlConfig.login, loginObj)
      .pipe(
        map(this.saveToken),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'Something bad happened; please try again later.';

    if(error.status === 401){
      message = 'Invalid email or password.';
    }

    return throwError(message);
  };
  private saveToken(response){
    TokenService.setToken(response.body.token);

    return response;
  }
}
