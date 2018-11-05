import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {
  static getToken(): string | null {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + 'token'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));

    return matches ? matches[1] : null;
  }
  static deleteToken(): void {
    document.cookie = `token= ;expires=${new Date(1)}`;
  }
}
