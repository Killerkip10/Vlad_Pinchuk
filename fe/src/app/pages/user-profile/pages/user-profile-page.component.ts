import {Component, OnInit, OnDestroy} from '@angular/core';

import {UserService} from '../../../services';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfileComponent {
  public tabs: string[] = ['profile', 'edit-profile'];
  public tabIndex: number = 1;
  // public subscription;
  // public user;

  constructor(public userService: UserService) {}

  public selectTab(changeTab): void {
    this.tabIndex = changeTab.index;
  }

  // ngOnInit(): void {
  //   this.subscription = this.userService.getUserSubject
  //     .subscribe(
  //       user => this.user = user
  //     )
  // }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
