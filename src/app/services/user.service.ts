import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';

import {User} from '../models/index';
import {urlConfig, options} from '../config';
import {TokenService} from './token.service';

@Injectable()
export class UserService {
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
    return this.http.put<HttpResponse<User>>(urlConfig.updateUser + TokenService.decodeToken().id, user, options)
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
