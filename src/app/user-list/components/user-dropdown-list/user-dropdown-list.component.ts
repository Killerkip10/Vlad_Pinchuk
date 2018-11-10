import {Component, ElementRef, OnInit, OnDestroy, ViewChild, Output, Input, EventEmitter} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {Store} from '@ngrx/store';
import {FindUsers, SelectUser} from '../../../store/actions/users';

import {User} from '../../../models';

interface InputEvent {
  target: {value: string};
}

@Component({
  selector: 'app-user-dropdown-list',
  templateUrl: './user-dropdown-list.component.html',
  styleUrls: ['./user-dropdown-list.component.scss']
})
export class UserDropdownListComponent implements OnInit, OnDestroy {
  @ViewChild('searchUser') searchUser: ElementRef;
  @Output() select = new EventEmitter();
  @Input() users: User[];

  private input$: Subscription;

  constructor(private store: Store<null>) {}

  ngOnInit(): void {
    this.input$ = fromEvent<InputEvent>(this.searchUser.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe(input => this.store.dispatch(new FindUsers(input.target.value)));
  }
  ngOnDestroy(): void {
    this.input$.unsubscribe();
  }

  public selectUser(user: User): void {
    this.store.dispatch(new SelectUser(user));
    this.select.emit();
  }
}
