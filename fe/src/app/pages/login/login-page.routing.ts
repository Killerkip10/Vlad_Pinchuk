import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginPageComponent} from './pages/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ]
})
export class LoginPageRouting{}
