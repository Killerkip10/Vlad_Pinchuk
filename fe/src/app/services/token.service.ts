import {Injectable} from "@angular/core";

@Injectable()
export class TokenService{
  static setToken(token: string): void{
    localStorage.setItem('token', token);
  }
  static getToken(): string{
    return localStorage.getItem('token') || '';
  }
}
