import * as fromUsers from './users';
import * as fromProfile from './profile';

export interface State {
  users: Map<string, fromUsers.MapState>;
  profile: Map<string, fromProfile.MapState>;
}

export const reducers = {
  users: fromUsers.reducer,
  profile: fromProfile.reducer
};
