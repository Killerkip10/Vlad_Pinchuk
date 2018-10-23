import {Component} from '@angular/core';

import {UserService} from '../../../services';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfileComponent {
  public tabs: string[] = ['USER-PROFILE.TABS.PROFILE', 'USER-PROFILE.TABS.EDIT'];
  public tabIndex = 0;

  constructor(public userService: UserService) {}

  public selectTab(changeTab): void {
    this.tabIndex = changeTab.index;
  }
}
