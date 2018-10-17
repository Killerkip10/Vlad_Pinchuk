import { Component } from '@angular/core';

import {Login} from '../../models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor() { }

  public onSubmit(value: Login){
    console.log(value);
  }
}
