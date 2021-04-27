import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input() user = {
    name: ""
  }
  constructor(private ActivatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params)=> {
      //this.userService.getUserById(params.id).then(response => {
        //console.log(response);
      //});
    });
 
  }

}
