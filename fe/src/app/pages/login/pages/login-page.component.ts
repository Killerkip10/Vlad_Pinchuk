import { Component } from '@angular/core';

import {AuthService} from '../../../services';
import {Login} from '../../../models';

@Component({
  selector: 'app-pages',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private authService: AuthService) { }

  public loginSubmit(loginObj: Login): void{
    this.authService.login(loginObj)
      .subscribe(
        () => console.log('Succes'),
        err => console.log(err)
      )
  }
}
