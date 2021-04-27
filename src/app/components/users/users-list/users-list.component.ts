import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input('items') users: User[] = [];

  @Output() onUserSelected: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(response => {
      this.users = response
    })
  }

  selectUser(user: any) {
    console.log('I selected ', user)

    this.onUserSelected.emit(user);
  }

}

