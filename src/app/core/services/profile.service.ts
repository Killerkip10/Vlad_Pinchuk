import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {User} from '../../models/index';
import {urlConfig} from '../../config';
import {TokenService} from './token.service';

const options = <object>{
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  observe: 'response',
  withCredentials: true
};

@Injectable()
export class ProfileService {
  private user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    this.updateUser();
  }

  public get getUserSubject(): BehaviorSubject<User> {
    return this.user;
  }

  public updateUser(): void {
    if (TokenService.getToken()) {
      this.http.get<HttpResponse<User>>(urlConfig.getProfile, options)
        .subscribe(
          resp => this.user.next(resp.body)
        );
    }
  }
  public deleteUser(): void {
    this.user.next(null);
  }
  public editUser(user: User) {
    return this.http.put<HttpResponse<User>>(urlConfig.editProfile, user, options)
      .pipe(
        map(resp => {
          this.user.next(resp.body);
          return resp;
        })
      );
  }
  public checkName(name: string) {
    return this.http.get(urlConfig.checkName + name, options);
  }
}
