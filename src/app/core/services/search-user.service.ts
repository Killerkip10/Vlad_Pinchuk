import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {urlConfig} from '../../config';

const options = {
  headers: new HttpHeaders({'content-type': 'application/json'}),
  observe: 'response',
  withCredentials: true,
  params: null
};

@Injectable()
export class SearchUserService {
  constructor(private http: HttpClient) { }

  public checkName(name: string) {
    return this.http.get(urlConfig.checkName + name, options as object);
  }
}
