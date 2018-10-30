import {Component} from '@angular/core';

import {ShortUser} from '../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public selectedUser: ShortUser;
  public changeComboBox = false;

  constructor() { }

  public selectUser(user: ShortUser): void {
    this.changeComboBox = !this.changeComboBox;
    this.selectedUser = user;
  }
}
