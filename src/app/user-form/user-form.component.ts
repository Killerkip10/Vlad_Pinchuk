import {Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import * as moment from 'moment';

import {User} from '../models';
import {
  NameAsyncValidatorService,
  LoginAsyncValidatorService,
  HttpValidatorService,
  ageValidator,
  dateValidator,
  passwordValidator
} from './validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [
    NameAsyncValidatorService,
    LoginAsyncValidatorService,
    HttpValidatorService,
  ]
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Output() submit = new EventEmitter<User>();

  public userForm;

  constructor(
    private nameAsyncValidService: NameAsyncValidatorService,
    private loginAsyncValidService: LoginAsyncValidatorService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      login: ['', [Validators.required], [this.loginAsyncValidService.loginAsyncValidator()]],
      password: ['', [Validators.required, passwordValidator]],
      name: ['', [Validators.required], [this.nameAsyncValidService.nameAsyncValidator()]],
      age: ['', [Validators.required, ageValidator]],
      dateOfBirth: ['', [Validators.required, dateValidator]],
      dateOfFirstLogin: [{value: '', disabled: true}, [Validators.required, dateValidator]],
      dateOfNextNot: ['', [Validators.required, dateValidator]],
      information: ['']
    });
  }

  public get login(){
    return this.userForm.get('login');
  }
  public get password(){
    return this.userForm.get('password');
  }
  public get name(){
    return this.userForm.get('name');
  }
  public get age(){
    return this.userForm.get('age');
  }
  public get dateOfBirth(){
    return this.userForm.get('dateOfBirth');
  }
  public get dateOfFirstLogin(){
    return this.userForm.get('dateOfFirstLogin');
  }
  public get dateOfNextNot(){
    return this.userForm.get('dateOfNextNot');
  }
  public get information(){
    return this.userForm.get('information');
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!Object.keys(this.user).length) {
      return;
    }

    this.nameAsyncValidService.initialName = this.user.name;
    this.loginAsyncValidService.initialLogin = this.user.login;
    this.userForm.patchValue({
      ...this.user,
      dateOfBirth: this.dateFormat(this.user.dateOfBirth),
      dateOfNextNot: this.dateFormat(this.user.dateOfNextNot),
      dateOfFirstLogin: this.dateFormat(this.user.dateOfFirstLogin)
    });
  }

  public onSubmit(event): void {
    this.submit.emit({...this.user, ...this.userForm.value});
    event.stopPropagation();
  }

  private dateFormat(date: string, format: string = 'YYYY/MM/DD'): string {
    return moment(date).format(format);
  }
}
