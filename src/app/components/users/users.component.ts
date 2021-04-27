import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = {};

  constructor(private userService: UserService) {
    console.log(userService);
  }

  ngOnInit(): void {
    console.log('Users Initialized');
    this.userService.getUsers().then(response => {
      this.users = response;
    });
  }

  handleClick(user: any) {
    console.log("clicked", user);
  }

  handleUserSelected(user: any) {
    console.log("seleccionaron al usuario", user);
    this.selectedUser = user
  }

}
