import { Component} from '@angular/core';

import {User} from '../../../models';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfileComponent{
  public users: User[] = [];

  constructor() { }

  public addUser(user: User): void{
    this.users.push(user);
  }
}
