const url = 'http://localhost:3030/';

export const urlConfig = {
  url: url,

  login: url + 'login/',
  registration: url + 'registration/',
  forgot: url + 'forgot/',

  getUsers: url + 'users/',
  getProfile: url + 'users/profile',
  editProfile: url + 'users/profile',
  deleteUser: url + 'users/',
  addUser: url + 'users/add/',
  checkName: url + 'users/check/',
  findUsers: url + 'users/find/'
};
