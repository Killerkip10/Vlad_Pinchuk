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

export type MapState = List<User> | object | boolean | string;

export const initialState = Map({
  users: List<User>(),
  selected: {},
  loaded: false,
  err: ''
});

export function reducer(state = initialState, action: usersAction.Action) {
  switch (action.type) {
    case usersAction.GET_USERS: {
      return state
        .set('users', List())
        .set('loaded', false);
    }
    case usersAction.FIND_USERS: {
      return state.set('loaded', false);
    }
    case usersAction.SELECT_USER: {
      return state.set('selected', action.user);
    }
    case usersAction.CREATE_SUCCESS: {
      return state.updateIn(['users'], users => users.push(action.user));
    }
    case usersAction.EDIT_SUCCESS: {
      return state
        .set('selected', action.user)
        .updateIn(['users'], users => users.map(v => v.id === action.user.id ? action.user : v));
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

export const getUsersMapState = createFeatureSelector<Map<string, MapState>>('users');
export const getUsersJsState = createSelector(getUsersMapState, state => state.toJS());
