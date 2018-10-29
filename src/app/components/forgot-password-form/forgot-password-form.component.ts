import {Component} from '@angular/core';

import {AuthService} from '../../core/services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent {
  public errorMessage = '';
  public password = '';

  constructor(private authService: AuthService) {}

  public submit(forgotForm): void {
    this.errorMessage = '';
    this.authService.forgotPassword(forgotForm.value.login)
      .subscribe(
        password => this.password = password,
        err => this.errorMessage = err
      );
  }
}

