import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {urlConfig, options} from '../../config';
import {ShortUser} from '../../models';


@Injectable()
export class SearchUserService {
  constructor(private http: HttpClient) { }

  public findUser(name: string): Observable<ShortUser[]> {
    return this.http.get<HttpResponse<ShortUser[]>>(urlConfig.findUsers + name, options)
      .pipe(
        map(resp => resp.body)
      );
  }
}
