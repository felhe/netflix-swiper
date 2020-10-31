import { Injectable } from '@angular/core';
import { User } from '../../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() {}

  createUser(name: string): User {
    const user = new User();
    // create likely unique number
    user.id = Math.floor(new Date().valueOf() * Math.random());
    user.name = name;
    this.users.push(user);
    return user;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
  }
}
