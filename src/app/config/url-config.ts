const url = 'http://localhost:3030/';

export const urlConfig = {
  url: url,

  login: url + 'login/',
  registration: url + 'registration/',
  forgot: url + 'forgot/',

  getUsers: url + 'users/',
  getProfile: url + 'users/profile',
  editProfile: url + 'users/profile',
  checkName: url + 'users/check-name/',
  checkLogin: url + 'users/check-login/',
  findUsers: url + 'users/find/',

  editUser: url + 'admin/users/',
  addUser: url + 'admin/users/',
  deleteUser: url + 'admin/users/'
};
