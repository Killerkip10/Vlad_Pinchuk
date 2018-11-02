import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {urlConfig} from '../../config';
import {User} from '../../models';

@Injectable()
export class SearchUserService {
  constructor(private http: HttpClient) { }

  public findUser(name: string): Observable<User[]> {
    const options = <object>{
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
      observe: 'response',
      withCredentials: true,
      params: new HttpParams().set('name', name)
    };
    return this.http.get<HttpResponse<User[]>>(urlConfig.findUsers, options)
      .pipe(
        map(resp => resp.body)
      );
  }
}
