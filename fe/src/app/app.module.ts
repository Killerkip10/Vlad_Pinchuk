import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {UserInfoModule} from './pages';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,

    UserInfoModule,
    AppRouting, //last!!!
  ],
  declarations: [
    AppComponent,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
