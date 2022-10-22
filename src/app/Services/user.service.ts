import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  constructor(private Logger: LoggerService) {}

  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.Logger.LogMessage(name, status);
  }
}
