import {User} from '../../models';

import * as usersAction from '../actions/users';
import {createFeatureSelector} from '@ngrx/store';

export interface State {
  users: User[];
  loaded: boolean;
}

export const initialState: State = {
  users: [],
  loaded: false
};

export function reducer(state = initialState, action: usersAction.Action) {
  switch (action.type) {
    case usersAction.GET_USERS: {
      return {
        ...state,
        loaded: false
      };
    }
    case usersAction.SUCCESS: {
      return {
        ...state,
        users: action.users,
        loaded: true
      };
    }
    default: {
      return state;
    }
  }
}

export const getUserState = createFeatureSelector<State>('users');
