import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { NgxBootstrapIconsModule, ColorTheme } from 'ngx-bootstrap-icons';
import { trash, pen } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './header/header.component';

const icons = {
  trash,
  pen,
};

@NgModule({
  declarations: [AppComponent, UsersComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(icons, {
      width: '1em',
      height: '1em',
      theme: ColorTheme.Danger,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
