import {Map} from 'immutable';

import * as profileAction from '../actions/profile';
import {createFeatureSelector, createSelector} from '@ngrx/store';

import {User} from '../../models';

export interface State {
  profile: User;
  loaded: boolean;
  err: string;
}

export type MapState = boolean | string | object;

export const initialState = Map({
  profile: {},
  loaded: false,
  err: ''
});

export function reducer(state = initialState, action: profileAction.Action) {
  switch (action.type) {
    case profileAction.GET_PROFILE: {
      return state.set('loaded', false);
    }
    case profileAction.DELETE: {
      return state
        .set('profile', {})
        .set('loaded', false);
    }
    case profileAction.SUCCESS: {
      return state
        .set('profile', action.profile)
        .set('loaded', true)
        .set('err', '');
    }
    case profileAction.ERROR: {
      return state.set('err', action.err);
    }
    default: {
      return state;
    }
  }
}

export const getProfileMapState = createFeatureSelector<Map<string, MapState>>('profile');
export const getProfileJsState = createSelector(getProfileMapState, state => state.toJS());
