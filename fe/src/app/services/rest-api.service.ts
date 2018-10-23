import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {urlConfig} from '../config';

interface headers {
  [name: string]: string;
}

@Injectable()
export class RestApiService {
  constructor(private http: HttpClient) {}

  public get(route: string, headersObj?: headers) {
    return this.http.get(urlConfig.url + route, {
      headers: this.createHeaders(headersObj),
      observe: 'response',
      withCredentials: true
    });
  }
  public post(route: string, body: object, headersObj?: headers) {
    return this.http.post(urlConfig.url + route, body, {
      headers: this.createHeaders(headersObj),
      observe: 'response',
      withCredentials: true
    });
  }
  public put(route: string, body: object, headersObj?: headers) {
    return this.http.put(urlConfig.url + route, body, {
      headers: this.createHeaders(headersObj),
      observe: 'response',
      withCredentials: true
    });
  }
  public delete() {

  }

  //Don't work, problem with types
  // private createConfigObj(headersObj: headers){
  //   return {
  //     headers: this.createHeaders(headersObj),
  //     observe: 'response',
  //     withCredentials: true
  //   };
  // }
  private createHeaders(headersObj: headers): HttpHeaders {
    let headers = new HttpHeaders(headersObj);

    headers = headers.set('content-type', 'application/json');

    return headers;

  }
}
