import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {GetProfile} from '../../../../store/actions/profile';

import {AuthService} from '../../../../core/services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<null>
  ) { }

  public submit(loginForm) {
    if (!loginForm.valid) { return; }

    this.authService.login(loginForm.value)
      .subscribe(
        () => {
          this.store.dispatch(new GetProfile());
          this.router.navigate(['/']);
        },
        err => this.errorMessage = err
      );
  }
}
