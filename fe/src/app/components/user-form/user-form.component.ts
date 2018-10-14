import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {
  countWordValidator,
  loggerValidation
} from './validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userForm = this.fs.group({
    name: ['', [Validators.required, countWordValidator]],
    age: [''],
    birthday: [''],
    dateOfLogin: [''],
    dateOfNextNot: ['']
  }, {validator: [loggerValidation]});

  constructor(private fs: FormBuilder) { }

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
