import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";

import {User} from '../../models';
import {
  NameAsyncValidatorService,
  ageValidator,
  dateValidator,
} from './validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [NameAsyncValidatorService]
})
export class UserFormComponent implements OnInit{
  public userForm;

  @Output() onAdd = new EventEmitter<User>();

  constructor(
    private nameAsyncValidService: NameAsyncValidatorService,
    private fb: FormBuilder
  ) { }

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
      name: ['', [Validators.required], [this.nameAsyncValidService.nameAsyncValidator()]],
      age: ['', [Validators.required, ageValidator]],
      dateOfBirth: ['', [Validators.required, dateValidator]],
      dateOfFirstLogin: ['', [Validators.required, dateValidator]],
      dateOfNextNot: ['', [Validators.required, dateValidator]]
    });
  }
  public onSubmit(): void{
    this.onAdd.emit(this.userForm.value);
  }
}
