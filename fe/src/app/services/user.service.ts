import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

import {User} from '../models';
import {urlConfig} from '../config';
import {RestApiService} from './rest-api.service';
import {TokenService} from './token.service';

@Injectable()
export class UserService{
  private user = new BehaviorSubject<User>(null);

  constructor(private restApi: RestApiService){
    this.updateUser();
  }

  public get getUserSubject(): BehaviorSubject<User>{
    return this.user;
  }

  public updateUser(): void{
    const userToken = TokenService.decodeToken();

    if (userToken) {
      this.restApi.get(urlConfig.getUser + userToken.id)
        .subscribe(
          resp => this.user.next(<User>resp.body)
        );
    }
  }
  public deleteUser(): void {
    this.user.next(null);
  }
  public editUser(user: User) {
    return this.restApi.put(urlConfig.updateUser + TokenService.decodeToken().id, user)
      .pipe(
        map(resp => {
          this.user.next(<User>resp.body);
          return resp;
        })
      );
  }
  // Recreate to response only names
  public getAll(): Observable<User[]> {
    return this.restApi.get(urlConfig.getUsers)
      .pipe(
        map(response => <User[]>response.body)
      );
  }
}
