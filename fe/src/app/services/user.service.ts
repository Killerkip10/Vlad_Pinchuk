import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";

import {RestApiService} from './rest-api.service'
import {User} from '../models'
import {urlConfig} from '../config';

@Injectable()
export class UserService{
  constructor(private restApi: RestApiService){}

  public getAll(): Observable<User[]>{
    return new Observable(obs => {
      this.restApi.get(urlConfig.getUsers)
        .subscribe(
          resp => obs.next(<User[]>resp.body),
          error => obs.error(error),
          () => obs.complete()
        )
    });
  }
  public getById(){

  }
  public remove(){

  }
  public update(){

  }
}
