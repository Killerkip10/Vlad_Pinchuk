import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {Store} from '@ngrx/store';
import {GetProfile} from './store/actions/profile';

import {TokenService} from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tokenService = TokenService;

  constructor(
    translateService: TranslateService,
    private store: Store<null>
  ) {
    translateService.addLangs(['en', 'ru']);
    translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProfile());
  }
}
