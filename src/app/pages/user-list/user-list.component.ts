import {Component} from '@angular/core';

import {ShortUser} from '../../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public selectedUser: ShortUser;

  constructor() { }

  public selectUser(user: ShortUser): void {
    this.selectedUser = user;
  }
}
