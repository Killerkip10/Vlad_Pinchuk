import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {State, getProfileState} from '../../store/reducers/profile';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnDestroy {
  public tabs = ['USER-PROFILE.TABS.PROFILE', 'USER-PROFILE.TABS.EDIT'];
  public tabIndex = 0;
  public profile$: Observable<State>;
  private subscription$: Subscription;

  constructor(private store: Store<State>) {
    this.profile$ = this.store.pipe(select(getProfileState));
    // another don't work, i can explain; super COSTIL; may be better use decode token?
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
