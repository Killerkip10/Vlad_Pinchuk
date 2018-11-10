import {Action} from '@ngrx/store';

import {User} from '../../models';

export const GET_PROFILE = '[Profile] Get profile';
export const EDIT = '[Profile] Update';
export const DELETE = '[Profile] Delete';
export const SUCCESS = '[Profile] Success';
export const ERROR = '[Profile] Error';

export class GetProfile implements Action {
  public readonly type = GET_PROFILE;
}
export class EditProfile implements Action {
  public readonly type = EDIT;

  constructor(public profile: User) {}
}
export class DeleteProfile implements Action {
  public readonly type = DELETE;
}
export class Success implements Action {
  public readonly type = SUCCESS;

  constructor(public profile: User) {}
}
export class Error implements Action {
  public readonly type = ERROR;

  constructor(public err: string) {}
}

export type Action = GetProfile
  | EditProfile
  | DeleteProfile
  | Success
  | Error;
