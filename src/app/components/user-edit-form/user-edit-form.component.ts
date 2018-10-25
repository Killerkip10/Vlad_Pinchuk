import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Validators, FormBuilder} from '@angular/forms';
import * as moment from 'moment';

import {User} from '../../models/index';
import {UserService} from '../../services/index';
import {
  NameAsyncValidatorService,
  ageValidator,
  dateValidator,
} from './validators/index';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss'],
  providers: [NameAsyncValidatorService]
})
export class UserEditFormComponent implements OnInit {
  @Input() public user: User;

  public userForm;

  constructor(
    private userService: UserService,
    private nameAsyncValidService: NameAsyncValidatorService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

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

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required], [this.nameAsyncValidService.nameAsyncValidator()]],
      age: [this.user.age, [Validators.required, ageValidator]],
      dateOfBirth: [this.dateFormat(this.user.dateOfBirth), [Validators.required, dateValidator]],
      dateOfFirstLogin: [{value: this.dateFormat(this.user.dateOfFirstLogin), disabled: true}, [Validators.required, dateValidator]],
      dateOfNextNot: [this.dateFormat(this.user.dateOfNextNot), [Validators.required, dateValidator]]
    });
  }

  public submit(): void {
    this.userService.editUser(this.userForm.value)
      .subscribe(
        () => this.snackBar.open('Updated', 'Profile', {duration: 3000})
      );
  }

  private dateFormat(date: string, format: string = 'YYYY/MM/DD'): string {
    return moment(date).format(format);
  }
}
