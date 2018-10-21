import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Validators, FormBuilder} from '@angular/forms';
import * as moment from 'moment';

import {User} from '../../models';
import {UserService} from '../../services';
import {
  NameAsyncValidatorService,
  ageValidator,
  dateValidator,
} from './validators';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss'],
  providers: [NameAsyncValidatorService]
})
export class UserEditFormComponent implements OnInit, OnChanges {
  @Input() public user: User;

  public userForm;

  constructor(
    private userService: UserService,
    private nameAsyncValidService: NameAsyncValidatorService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  public get name() {
    return this.userForm.get('name');
  }
  public get age() {
    return this.userForm.get('age');
  }
  public get dateOfBirth() {
    return this.userForm.get('dateOfBirth');
  }
  public get dateOfFirstLogin() {
    return this.userForm.get('dateOfFirstLogin');
  }
  public get dateOfNextNot() {
    return this.userForm.get('dateOfNextNot');
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required], [this.nameAsyncValidService.nameAsyncValidator()]],
      age: ['', [Validators.required, ageValidator]],
      dateOfBirth: ['', [Validators.required, dateValidator]],
      dateOfFirstLogin: ['', [Validators.required, dateValidator]],
      dateOfNextNot: ['', [Validators.required, dateValidator]]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.firstChange) {
      return;
    }

    this.userForm.patchValue({
      name: this.user.name,
      age: this.user.age,
      dateOfBirth: moment(this.user.dateOfBirth).format('YYYY/MM/DD'),
      dateOfFirstLogin: moment(this.user.dateOfFirstLogin).format('YYYY/MM/DD'),
      dateOfNextNot: moment(this.user.dateOfNextNot).format('YYYY/MM/DD')
    });
  }

  public submit(): void {
    this.userService.editUser(this.userForm.value)
      .subscribe(
        () => this.snackBar.open('Updated', 'Profile', {duration: 3000})
      );
  }
}
