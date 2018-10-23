import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserProfileComponent} from './pages/user-profile-page.component';
import {AuthGuard} from '../../guards';

const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfileComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class UserProfileRouting{}
