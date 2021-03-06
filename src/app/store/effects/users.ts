import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  GET_USERS,
  FIND_USERS,
  EDIT_USER,
  CREATE_USER,
  EditUser,
  FindUsers,
  CreateSuccess,
  EditSuccess,
  Success,
  Error, CreateUser,
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
      mergeMap(() => this.http.get<HttpResponse<User[]>>(urlConfig.getUsers, options as object)
        .pipe(
          map(resp => new Success(resp.body)),
          catchError(() => of(new Error('ERROR.BASE')))
        )
      )
    );

  @Effect()
  findUsers$ = this.actions$
    .pipe(
      ofType(FIND_USERS),
      mergeMap((action: FindUsers) => {
        const option = { ...options, params: new HttpParams().set('name', action.name)};

        return this.http.get<HttpResponse<User[]>>(urlConfig.findUsers, option as object)
          .pipe(
            map(resp => new Success(resp.body)),
            catchError(() => of(new Error('ERROR.BASE')))
          );
      })
    );

  @Effect()
  editUser$ = this.actions$
    .pipe(
      ofType(EDIT_USER),
      mergeMap((action: EditUser) => this.http.put<HttpResponse<User>>(urlConfig.editUser, action.user, options as object)
        .pipe(
          map(resp => new EditSuccess(resp.body)),
          catchError(() => of(new Error('ERROR.BASE')))
        )
      )
    );

  @Effect()
  createUser$ = this.actions$
    .pipe(
      ofType(CREATE_USER),
      mergeMap((action: CreateUser) => this.http.post<HttpResponse<User>>(urlConfig.createUser, action.user, options as object)
        .pipe(
          map(resp => new CreateSuccess(resp.body)),
          catchError(() => of(new Error('ERROR.BASE')))
        )
      )
    );
}
