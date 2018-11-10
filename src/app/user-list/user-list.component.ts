import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {select, Store} from '@ngrx/store';
import {getUsersJsState} from '../store/reducers/users';
import {State} from '../store/reducers/users';
import {GetUsers} from '../store/actions/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public dropDownListFlag = false;
  public users$: Observable<State>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(getUsersJsState));
  }

  public dropDownList(): void {
    this.dropDownListFlag = !this.dropDownListFlag;

    this.users$
      .pipe(first())
      .subscribe(state => {
        if (!state.loaded) {
          this.store.dispatch(new GetUsers());
        }
      });
  }
}
