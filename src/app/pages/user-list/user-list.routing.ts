import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserListComponent} from './user-list.component';
import {AuthGuard} from '../../core/guards';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class UserListRouting {}
