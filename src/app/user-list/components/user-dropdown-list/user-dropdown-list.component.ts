import {Component, ElementRef, OnInit, ViewChild, Output, Input, EventEmitter} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

import {User} from '../../../models';

interface InputEvent {
  target: {value: string};
}

@Component({
  selector: 'app-user-dropdown-list',
  templateUrl: './user-dropdown-list.component.html',
  styleUrls: ['./user-dropdown-list.component.scss']
})
export class UserDropdownListComponent implements OnInit {
  @ViewChild('searchUser') searchUser: ElementRef;
  @Output() select = new EventEmitter<User>();
  @Input() users: User[];

  public filterUsers$: Observable<User[]>;

  constructor() {}

  ngOnInit(): void {
    this.filterUsers$ = fromEvent<InputEvent>(this.searchUser.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map(input => this.users.filter(v => v.name.startsWith(input.target.value)))
      );
   }
}
