import { Component } from '@angular/core';

import {AuthService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(private authService: AuthService) { }

  public logout(): void{
    this.authService.logout();
  }
}
