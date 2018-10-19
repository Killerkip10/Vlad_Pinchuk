import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {urlConfig} from '../config';
import {TokenService} from './token.service'

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
      observe: 'response',
    });
  }
  public put(route: string, body: object, headersObj?: {[name: string]: string}){
    return this.http.put(urlConfig.url + route, body, {
      headers: this.createHeaders(headersObj),
      observe: 'response'
    });
  }
  public delete(){

  }
  private createHeaders(headersObj: {[name: string]: string}): HttpHeaders{
    let headers = new HttpHeaders(headersObj);

    headers = headers.set('content-type', 'application/json');
    headers = headers.set('token', TokenService.getToken());

    return headers;
  }
}
