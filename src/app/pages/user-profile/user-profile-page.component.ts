import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {GetProfile} from '../../store/actions/profile';
import {State, getProfileState} from '../../store/reducers/profile';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  public tabs = ['USER-PROFILE.TABS.PROFILE', 'USER-PROFILE.TABS.EDIT'];
  public tabIndex = 0;
  public profile$: Observable<State>;

  constructor(private store: Store<State>) {
    this.profile$ = this.store.pipe(select(getProfileState));
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProfile());
  }

  public selectTab(changeTab): void {
    this.tabIndex = changeTab.index;
  }
}
