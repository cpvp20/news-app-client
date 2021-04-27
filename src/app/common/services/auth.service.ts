import { Injectable } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private socialAuthService: SocialAuthService) {
    this.loginStatus.next(this.isLoggedIn());
  }

  saveToken(data: { token: string; }, google?: boolean | undefined) {
    localStorage.setItem('token', data.token);
    this.loginStatus.next(true);
    // this.socket.connect(data.token, () => {
    //   console.log("");
    // });
    if (google) {
      localStorage.setItem('social', '1');
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isSocialUser() {
    return !!localStorage.getItem('social');
  }
 
  logout() {
    return new Promise((resolve, reject) => {
      const isSocial = this.isSocialUser();
      localStorage.clear();
      //this.socket.disconnect;
      if (isSocial) {
        this.socialAuthService.signOut(true).then((then) => {
          this.loginStatus.next(false);
          reject();
        });
      } else {
        this.loginStatus.next(false);
        reject();
      }
    });
  }
}
