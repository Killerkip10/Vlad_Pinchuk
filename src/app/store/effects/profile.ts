import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import {User} from '../../../../server/models';
import {urlConfig} from '../../config';
import {
  GET_PROFILE,
  EDIT,
  Edit,
  Success
} from '../actions/profile';

const options = {
  headers: new HttpHeaders({'content-type': 'application/json'}),
  observe: 'response',
  withCredentials: true,
  params: null
};

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  loadProfile$ = this.actions$
    .pipe(
      ofType(GET_PROFILE),
      switchMap(() => this.http.get<HttpResponse<User>>(urlConfig.getProfile, options as object)),
      map(resp => new Success(resp.body))
    );

  @Effect()
  editProfile$ = this.actions$
    .pipe(
      ofType(EDIT),
      switchMap((action: Edit) => this.http.put<HttpResponse<User>>(urlConfig.editProfile, action.profile, options as object)),
      map(resp => new Success(resp.body))
    );
}
