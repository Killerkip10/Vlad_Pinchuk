import {Component} from '@angular/core';

import {AuthService} from '../../services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent {
  public errorMessage = '';
  public password = ' ';

  constructor(private authService: AuthService) {}

  public submit(forgotForm): void {
    if (!forgotForm.valid) {
      return;
    }

    this.authService.forgotPassword(forgotForm.value.login)
      .subscribe(
        password => {
            this.password = password;
            this.errorMessage = '';
          },
        err => this.errorMessage = err
      );
  }
}

