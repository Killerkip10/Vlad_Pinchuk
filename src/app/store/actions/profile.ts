import {Action} from '@ngrx/store';

import {User} from '../../models';

export const GET_PROFILE = '[Profile] Get profile';
export const SUCCESS = '[Profile] Success';
export const EDIT = '[Profile] Update';
export const DELETE = '[Profile] Delete';

export class GetProfile implements Action {
  public readonly type = GET_PROFILE;
}
export class Edit implements Action {
  public readonly type = EDIT;

  constructor(public profile: User) {}
}
export class Delete implements Action {
  public readonly type = DELETE;
}
export class Success implements Action {
  public readonly type = SUCCESS;

  constructor(public profile: User) {}
}

export type Action = GetProfile
  | Edit
  | Success
  | Delete;
