import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  static getToken(): string | null {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + 'token'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));

    return matches ? matches[1] : null;
  }
  static decodeToken() {
    return (new JwtHelperService()).decodeToken(this.getToken());
  }
  static deleteToken(): void {
    document.cookie = `token= ;expires=${new Date(1)}`;
  }
}
