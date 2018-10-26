import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {AuthService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private translateService: TranslateService
  ) {}

  public selectLanguage(event): void {
    this.translateService.use(event.value);
  }
  public logout(): void {
    this.authService.logout();
  }
}
