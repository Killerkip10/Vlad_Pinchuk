import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {urlConfig} from '../config';

@Injectable()
export class RestApiService{
  constructor(
    private http: HttpClient
  ){}

  public get(route: string, headersObj?: {[name: string]: string}){
    return this.http.get(urlConfig.url + route, {
      headers: this.createHeaders(headersObj),
      observe: 'response'
    });
  }
  public post(route: string, body: object, headersObj?: {[name: string]: string}){
    return this.http.post(urlConfig.url + route, body, {
      headers: this.createHeaders(headersObj),
      observe: 'response'
    });
  }
  public put(){

  }
  public delete(){

  }
  private createHeaders(headersObj: {[name: string]: string}): HttpHeaders{
    const headers = new HttpHeaders(headersObj);

    headers.set('content-type', 'application/json');

    return headers;
  }
}
