import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserDataComponent } from './components/users/user-data/user-data.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClickDirective } from './common/directives/click.directive';
import { HeaderComponent } from './common/components/header/header.component';
import { environment } from './../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotFoundComponent,
    UsersListComponent,
    UserDataComponent,
    LoginComponent,
    RegisterComponent,
    ClickDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.clientId)
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
