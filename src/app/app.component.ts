import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LoggerService],
})
export class AppComponent {
  constructor(private userService: UserService) {}
  title = 'UserService';
  users: { name: string; status: string }[] = [];
  ngOnInit() {
    this.users = this.userService.users;
  }
}
