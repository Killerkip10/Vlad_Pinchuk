import { Component} from '@angular/core';

import {User} from '../../../models';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent{
  public users: User[] = [];

  constructor() { }

  public addUser(user: User): void{
    this.users.push(user);
  }
}
