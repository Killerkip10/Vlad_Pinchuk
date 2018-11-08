import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';
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

interface Options {
  nameForm: string;
  send: string;
  reset: boolean;
  login: boolean;
  dateOfFirstLogin: boolean;
}

const initialUser = {
  login: '',
  password: '',
  name: '',
  age: '',
  dateOfBirth: '',
  dateOfFirstLogin: '',
  dateOfNextNot: '',
  information: ''
};

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
  @Input() options: Options = {} as Options;
  @Input() user: User = initialUser as User;
  @Output() submit = new EventEmitter<User>();

  public userForm;

  constructor(
    private nameAsyncValidService: NameAsyncValidatorService,
    private loginAsyncValidService: LoginAsyncValidatorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      login: [
        {value: this.user.login, disabled: this.options.login},
        [Validators.required],
        [this.loginAsyncValidService.loginAsyncValidator()]
      ],
      password: [
        this.user.password,
        [Validators.required, passwordValidator]
      ],
      name: [
        this.user.name,
        [Validators.required],
        [this.nameAsyncValidService.nameAsyncValidator()]
      ],
      age: [
        this.user.age,
        [Validators.required, ageValidator]
      ],
      dateOfBirth: [
        this.dateFormat(this.user.dateOfBirth),
        [Validators.required, dateValidator]
      ],
      dateOfFirstLogin: [
        {value: this.dateFormat(this.user.dateOfFirstLogin), disabled: this.options.dateOfFirstLogin},
        [Validators.required, dateValidator]
      ],
      dateOfNextNot: [
        this.dateFormat(this.user.dateOfNextNot),
        [Validators.required, dateValidator]
      ],
      information: [this.user.information]
    });

    this.nameAsyncValidService.initialName = this.user.name;
    this.loginAsyncValidService.initialLogin = this.user.login;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.user || changes.user.firstChange) {
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

  public onSubmit(event): void {
    this.submit.emit({...this.user, ...this.userForm.value});
    event.stopPropagation();

    if (this.options.reset) {
      this.userForm.reset(initialUser);
    }
  }

  private dateFormat(date: string, format: string = 'YYYY/MM/DD'): string {
    return date ? moment(date).format(format) : '';
  }
}
