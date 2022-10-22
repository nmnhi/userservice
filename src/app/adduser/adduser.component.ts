import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers: [UserService],
})
export class AdduserComponent implements OnInit {
  username: string = '';
  status: string = 'active';
  constructor(private userSevice: UserService) {}

  ngOnInit(): void {}
  AddUser() {
    this.userSevice.AddNewUser(this.username, this.status);
    // console.log(this.userSevice.users);
  }
}
