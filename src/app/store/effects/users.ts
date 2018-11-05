import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  GET_USERS,
  Success
} from '../actions/users';

import {User} from '../../../../server/models';
import {urlConfig} from '../../config';

const options = {
  headers: new HttpHeaders({'content-type': 'application/json'}),
  observe: 'response',
  withCredentials: true,
  params: null
};

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  loadUsers$ = this.actions$
    .pipe(
      ofType(GET_USERS),
      map(() => console.log('############')),
      switchMap(() => this.http.get<HttpResponse<User[]>>(urlConfig.getUsers, options as object)),
      map(resp => new Success(resp.body))
    );
}
