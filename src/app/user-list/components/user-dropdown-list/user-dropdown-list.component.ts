import {Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, switchMap, tap} from 'rxjs/operators';

import {User} from '../../../models';
import {SearchUserService} from '../../../core/services';

interface InputEvent {
  target: {value: string};
}

@Component({
  selector: 'app-user-dropdown-list',
  templateUrl: './user-dropdown-list.component.html',
  styleUrls: ['./user-dropdown-list.component.scss']
})
export class UserDropdownListComponent implements OnInit, AfterViewInit {
  @ViewChild('searchUser') searchUser: ElementRef;
  @Output() select = new EventEmitter<User>();

  public input$: Observable<User[]>;
  public spinner = false;

  constructor(private searchUserService: SearchUserService) {}

  ngOnInit(): void {
    this.input$ = fromEvent<InputEvent>(this.searchUser.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        tap(() => this.spinner = true),
        switchMap(v => this.searchUserService.findUser(v.target.value)),
        tap(() => this.spinner = false),
      );
   }
  ngAfterViewInit(): void {
    this.searchUser.nativeElement.dispatchEvent(new Event('input'));
  }
}
