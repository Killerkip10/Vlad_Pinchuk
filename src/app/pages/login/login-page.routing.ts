import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginPageComponent} from './login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class LoginPageRouting {}
