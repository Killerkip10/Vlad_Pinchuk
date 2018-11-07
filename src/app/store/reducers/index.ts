import * as fromUsers from './users';
import * as fromProfile from './profile';

export const reducers = {
  users: fromUsers.reducer,
  profile: fromProfile.reducer
};
