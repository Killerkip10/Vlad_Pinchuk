import {Component} from '@angular/core';

@Component({
  selector: 'app-search-user-page',
  templateUrl: './search-users-page.component.html',
  styleUrls: ['./search-users-page.component.scss']
})
export class SearchUsersPageComponent {
  public tabs = ['SEARCH-USER.TABS.SEARCH', 'SEARCH-USER.TABS.ITEMS'];
  public tabIndex = 0;

  constructor() {}

  public selectTab(changeTab): void {
    this.tabIndex = changeTab.index;
  }
}
