import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {TokenService} from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private tokenService = TokenService;

  constructor(translateService: TranslateService) {
    translateService.addLangs(['en', 'ru']);
    translateService.setDefaultLang('en');
  }
}
