import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

import {select, Store} from '@ngrx/store';
import {getUserState, State} from '../store/reducers/users';
import {GetUsers} from '../store/actions/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public dropDownListFlag = false;
  public users$: Observable<State>;
  private loadFlag = true;

  constructor(private store: Store<State>) {
    this.users$ = store.pipe(select(getUserState));
  }

  public dropDownList(): void {
    this.dropDownListFlag = !this.dropDownListFlag;

    if (this.loadFlag) {
      this.store.dispatch(new GetUsers());
      this.loadFlag = !this.loadFlag;
    }
  }
}
