import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/index";

import {User} from '../../../models';
import {UserService} from '../../../services';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy{
  public user: User = <User>{};
  private subscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.getUserSubject
      .subscribe(
        user => this.user = user
      )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
