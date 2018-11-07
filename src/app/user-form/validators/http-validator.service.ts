import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

import {urlConfig} from '../../config';

const options = {
  headers: new HttpHeaders({'content-type': 'application/json'}),
  observe: 'response',
  withCredentials: true,
  params: null
};

@Injectable()
export class HttpValidatorService {
  constructor(private http: HttpClient) {}

  public checkName(name: string) {
    return this.http.get(urlConfig.checkName + name, options as object)
      .pipe(
        map(() => null),
        catchError(() => of({name: {message: 'ERROR.EXIST-NAME'}}))
      );
  }
  public checkLogin(login: string) {
    return this.http.get(urlConfig.checkLogin + login, options as object)
      .pipe(
        map(() => null),
        catchError(() => of({login: {message: 'ERROR.EXIST-LOGIN'}}))
      );
  }
}
