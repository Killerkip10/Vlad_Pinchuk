import {Component} from '@angular/core';

import {User} from '../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public selectedUser: User;
  public comboBox = false;

  constructor() { }

  public selectUser(user: User): void {
    this.comboBox = !this.comboBox;
    this.selectedUser = user;
  }
}
