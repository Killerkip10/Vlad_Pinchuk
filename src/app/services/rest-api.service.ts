import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {urlConfig} from '../config';

interface Headers {
  [name: string]: string;
}

@Injectable()
export class RestApiService {
  constructor(private http: HttpClient) {}

  public get(route: string, headersObj?: Headers) {
    return this.http.get(urlConfig.url + route, {
      headers: this.createHeaders(headersObj),
      observe: 'response',
      withCredentials: true
    });
  }
  public post(route: string, body: object, headersObj?: Headers) {
    return this.http.post(urlConfig.url + route, body, {
      headers: this.createHeaders(headersObj),
      observe: 'response',
      withCredentials: true
    });
  }
  public put(route: string, body: object, headersObj?: Headers) {
    return this.http.put(urlConfig.url + route, body, {
      headers: this.createHeaders(headersObj),
      observe: 'response',
      withCredentials: true
    });
  }

  private createHeaders(headersObj: Headers): HttpHeaders {
    let headers = new HttpHeaders(headersObj);

    headers = headers.set('content-type', 'application/json');

    return headers;

  }
}
