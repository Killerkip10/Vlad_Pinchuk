import * as profileAction from '../actions/profile';
import {User} from '../../models';
import {createFeatureSelector} from '@ngrx/store';

export interface State {
  profile: User;
  loaded: boolean;
}

export const initialState: State = {
  profile: null,
  loaded: false
};

export function reducer(state = initialState, action: profileAction.Action) {
  switch (action.type) {
    case profileAction.GET_PROFILE: {
      return {
        ...state,
        loaded: false
      };
    }
    case profileAction.EDIT: {
      return state;
    }
    case profileAction.DELETE: {
      return null;
    }
    case profileAction.SUCCESS: {
      return {
        ...state,
        profile: action.profile,
        loaded: true
      };
    }
    default: {
      return state;
    }
  }
}

export const getProfileState = createFeatureSelector<State>('profile');

