import {User} from '../../models';

import * as usersAction from '../actions/users';
import {createFeatureSelector} from '@ngrx/store';

export interface State {
  users: User[];
  selected: User;
  loaded: boolean;
  err: string;
}

export const initialState: State = {
  users: [],
  selected: {} as User,
  loaded: false,
  err: ''
};

export function reducer(state = initialState, action: usersAction.Action) {
  switch (action.type) {
    case usersAction.GET_USERS: {
      return {
        ...state,
        users: [],
        loaded: false,
        err: ''
      };
    }
    case usersAction.FIND_USERS: {
      return {
        ...state,
        loaded: false
      };
    }
    case usersAction.SELECT_USER: {
      return {
        ...state,
        selected: action.user
      };
    }
    case usersAction.SUCCESS: {
      return {
        ...state,
        users: action.users,
        loaded: true,
        err: ''
      };
    }
    case usersAction.ERROR: {
      return {
        ...state,
        err: action.err
      };
    }
    default: {
      return state;
    }
  }
}

export const getUserState = createFeatureSelector<State>('users');
