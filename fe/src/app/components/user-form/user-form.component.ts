import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {
  NameAsyncValidatorService,
  loggerValidation
} from './validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [NameAsyncValidatorService]
})
export class UserFormComponent implements OnInit {
  public userForm = this.fs.group({
    name: ['', [Validators.required], [this.nameAsyncValidatorService.nameValidator]],
    age: [''],
    birthday: [''],
    dateOfLogin: [''],
    dateOfNextNot: ['']
  }, {validator: [loggerValidation]});

  constructor(
    private fs: FormBuilder,
    private nameAsyncValidatorService: NameAsyncValidatorService
  ) { }

  public get name(){
    return this.userForm.get('name');
  }
  public get age(){
    return this.userForm.get('age');
  }
  public get birthday(){
    return this.userForm.get('birthday');
  }
  public get dateOfLogin(){
    return this.userForm.get('dateOfLogin');
  }
  public get dateOfNextNot(){
    return this.userForm.get('dateOfNextNot');
  }


  ngOnInit() {
  }
}
