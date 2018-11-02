import {Component} from '@angular/core';

import {ProfileService} from '../../core/services';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent {
  public tabs = ['USER-PROFILE.TABS.PROFILE', 'USER-PROFILE.TABS.EDIT'];
  public tabIndex = 0;

  constructor(public profileService: ProfileService) {}

  public selectTab(changeTab): void {
    this.tabIndex = changeTab.index;
  }
}
