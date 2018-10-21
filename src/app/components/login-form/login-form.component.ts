import { Component} from '@angular/core';

import {Login} from '../../models';
import {AuthService} from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public errorMessage: string = '';

  constructor(private authService: AuthService) { }

  public submit(loginObj: Login){
    this.authService.login(loginObj)
      .subscribe(
        () => {},
        errMessage => this.errorMessage = errMessage
      )
  }
}
