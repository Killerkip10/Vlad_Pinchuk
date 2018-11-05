import {ActionReducerMap} from '@ngrx/store';

import * as fromUsers from './users';
import * as fromProfile from './profile';

export interface State {
  users: fromUsers.State;
  profile: fromProfile.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer,
  profile: fromProfile.reducer
};
