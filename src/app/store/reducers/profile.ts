import * as profileAction from '../actions/profile';
import {User} from '../../models';

import {createFeatureSelector} from '@ngrx/store';

export interface State {
  profile: User;
  loaded: boolean;
  err: string;
}

export const initialState: State = {
  profile: {} as User,
  loaded: false,
  err: ''
};

export function reducer(state = initialState, action: profileAction.Action) {
  switch (action.type) {
    case profileAction.GET_PROFILE: {
      return {
        ...state,
        loaded: false
      };
    }
    case profileAction.DELETE: {
      return {
        ...state,
        profile: {} as User,
        loaded: false
      };
    }
    case profileAction.SUCCESS: {
      return {
        ...state,
        profile: action.profile,
        loaded: true,
        err: ''
      };
    }
    case profileAction.ERROR: {
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

export const getProfileState = createFeatureSelector<State>('profile');

