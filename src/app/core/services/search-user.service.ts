import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {urlConfig} from '../../config';
import {User} from '../../models';

const options = {
  headers: new HttpHeaders({'content-type': 'application/json'}),
  observe: 'response',
  withCredentials: true,
  params: null
};

@Injectable()
export class SearchUserService {
  constructor(private http: HttpClient) { }

  public findUser(name: string): Observable<User[]> {
    options.params = new HttpParams().set('name', name);

    return this.http.get<HttpResponse<User[]>>(urlConfig.findUsers, options as object)
      .pipe(
        map(resp => resp.body)
      );
  }
  public checkName(name: string) {
    return this.http.get(urlConfig.checkName + name, options as object);
  }
}
