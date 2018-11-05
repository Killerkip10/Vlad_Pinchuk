import {Action} from '@ngrx/store';

import {User} from '../../models';

export const GET_USERS = '[Users] Get users';
export const SUCCESS = '[Users] Success';

export class GetUsers implements Action {
  public readonly type = GET_USERS;
}
export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public users: User[]) {}
}

export type Action = GetUsers | Success;
