import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {getUserState, State} from '../store/reducers/users';
import {GetUsers} from '../store/actions/users';

import {User} from '../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public selectedUser: User;
  public dropDownListFlag = false;
  public users$: Observable<State>;

  constructor(private store: Store<State>) {
    this.users$ = this.store.pipe(select(getUserState));
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

  public dropDownList(): void {
    this.dropDownListFlag = !this.dropDownListFlag;
  }
  public selectUser(user: User): void {
    this.dropDownList();
    this.selectedUser = user;
  }
}
