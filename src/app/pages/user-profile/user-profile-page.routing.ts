import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserProfilePageComponent} from './user-profile-page.component';
import {AuthGuard} from '../../core/guards';

const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class UserProfileRouting {}
