import {Injectable} from "@angular/core";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class TokenService{
  static setToken(token: string): void{
    localStorage.setItem('token', token);
  }
  static getToken(): string{
    return localStorage.getItem('token');
  }
  static decodeToken(){
    return (new JwtHelperService()).decodeToken(this.getToken());
  }
}
