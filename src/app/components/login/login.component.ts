import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SessionService } from 'src/app/common/services/session.service';
import { SocketIoService } from 'src/app/common/services/socket-io.service';

interface Credential {
  password:String;
  username:String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: Credential = {
    username: "test",
    password: "12345"
  }
  error = false;
  form!: FormGroup;
  loginError: boolean | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    //private socketIoService: SocketIoService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.socialAuthService.authState.subscribe(user => {
      if (user) {
        console.log('se inicio sesion con google user', user);
        this.sessionService.googleLogin(user.idToken).then(response => {
          this.authService.saveToken(response);
          this.loginError = false;
          this.router.navigate(['/recientes']);
        }).catch(err => {
          console.log(err);
        })
      } else {
        console.log('No hay sesion');
      }
    });
  }

  login() {
    console.log('iniciar sesion', this.form.getRawValue());
    this.sessionService.login(this.form.getRawValue()).then(response => {
      console.log('inicio sesion', response.token);
      this.authService.saveToken(response);
      this.router.navigate(['/recientes']);
    }).catch(err => {
      this.loginError = true;
      console.log(err);
      this.router.navigate(['/recientes']);
    });
  }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

}
