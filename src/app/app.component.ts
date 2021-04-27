import { Component } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { SocketIoService } from './common/services/socket-io.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app-client';
  isLoggedIn: boolean = false;

  constructor( private authService: AuthService) {//before socket was here too
    this.authService.loginStatus.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
/*
  ongOnInit() {
    if (this.authService.isLoggedIn()) {
      const token = this.authService.getToken();
      this.socketIoService.connect(token, () => {
        console.log('client connected');
      });

      this.socketIoService.on('userLikedNews', (data: any) => {
        console.log("user liked", data);
      });
    }
  }
  */
}
