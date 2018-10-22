import { Component} from '@angular/core';

import {AuthService} from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public errorMessage = '';

  constructor(private authService: AuthService) { }

  public submit(loginForm) {
    if (!loginForm.valid) {
      return;
    }

    this.authService.login(loginForm.value)
      .subscribe(
        () => {},
        errMessage => this.errorMessage = errMessage
      );
  }
  public forgotPassword(): void {
    this.authService.forgotPassword();
  }
}
