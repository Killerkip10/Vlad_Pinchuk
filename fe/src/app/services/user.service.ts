import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

import {RestApiService} from './rest-api.service'
import {User} from '../models'
import {urlConfig} from '../config';

@Injectable()
export class UserService{
  constructor(private restApi: RestApiService){}

  public getAll(): Observable<User[]>{
    return this.restApi.get(urlConfig.getUsers)
      .pipe(
        map(response => <User[]>response.body)
      );
  }
  public getById(){

  }
  public remove(){

  }
  public update(){

  }
}
