import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {State, getProfileJsState} from '../../store/reducers/profile';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit, OnDestroy {
  public tabs = ['USER-PROFILE.TABS.PROFILE', 'USER-PROFILE.TABS.EDIT'];
  public tabIndex = 0;
  public profile$: Observable<State>;
  private subscription$: Subscription;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.profile$ = this.store.pipe(select(getProfileJsState));
    // super COSTIL
    this.subscription$ = this.profile$
      .subscribe(state => {
        if (state.profile.role === '2') {
          this.tabs[2] = 'USER-PROFILE.TABS.USERS';
        }
      });
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public selectTab(changeTab): void {
    this.tabIndex = changeTab.index;
  }
}
