import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

import {User} from '../models'
import {urlConfig} from '../config';
import {RestApiService} from './rest-api.service'
import {TokenService} from './token.service';

@Injectable()
export class UserService{
  private user = new BehaviorSubject<User>(<User>{});

  constructor(private restApi: RestApiService){
    this.updateUser();
  }

  public get getUserSubject(): BehaviorSubject<User>{
    return this.user;
  }

  public updateUser(): void{
    const userToken = TokenService.decodeToken();

    if(userToken) {
      this.restApi.get(urlConfig.getUser + userToken.id)
        .subscribe(
          resp => this.user.next(<User>resp.body)
        );
    }
  }
  public editUser(user: User){
    return this.restApi.put(urlConfig.updateUser + TokenService.decodeToken().id, user)
      .pipe(
        map(resp => {
          this.user.next(<User>resp.body);
          return resp;
        })
      );
  }
  //Переделать, чтобы не приходили все данные, а только name и id
  public getAll(): Observable<User[]>{
    return this.restApi.get(urlConfig.getUsers)
      .pipe(
        map(response => <User[]>response.body)
      );
  }
}
