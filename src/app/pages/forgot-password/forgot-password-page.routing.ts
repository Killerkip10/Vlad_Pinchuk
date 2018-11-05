import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ForgotPasswordPageComponent} from './forgot-password-page.component';

const routes: Routes = [
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ForgotPasswordPageRouting {}
