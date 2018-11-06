import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {Delete} from '../../../store/actions/profile';

import {AuthService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public translateService: TranslateService,
    private authService: AuthService,
    private router: Router,
    private store: Store<null>
  ) {}

  public selectLanguage(event): void {
    this.translateService.use(event.value);
  }
  public logout(): void {
    this.authService.logout();
    this.store.dispatch(new Delete());
    this.router.navigate(['/login']);
  }
}
