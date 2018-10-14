import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-info',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: '/user-info'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class AppRouting{}
