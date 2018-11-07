import {Map, List} from 'immutable';

import * as usersAction from '../actions/users';
import {createFeatureSelector, createSelector} from '@ngrx/store';

import {User} from '../../models';

export interface State {
  users: User[];
  selected: User;
  loaded: boolean;
  err: string;
}

export const initialState = Map({
  users: List<User>(),
  selected: Map(),
  loaded: false,
  err: ''
});

export function reducer(state = initialState, action: usersAction.Action) {
  switch (action.type) {
    case usersAction.GET_USERS: {
      return state
        .set('users', List())
        .set('loaded', false)
        .set('err', '');
    }
    case usersAction.FIND_USERS: {
      return state.set('loaded', false);
    }
    case usersAction.SELECT_USER: {
      return state.set('selected', Map(action.user));
    }
    case usersAction.SUCCESS: {
      return state
        .set('users', List(action.users))
        .set('loaded', true)
        .set('err', '');
    }
    case usersAction.ERROR: {
      return state.set('err', action.err);
    }
    default: {
      return state;
    }
  }
}

export const getUserMapState = createFeatureSelector<Map<string, List<User> | object | boolean | string>>('users');
export const getUserJsState = createSelector(getUserMapState, state => state.toJS());
