import { Injectable } from '@angular/core';
import { User } from '../../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  createUser(name: string): User {
    const user = new User();
    user.id = 1;
    user.name = name;
    return user;
  }
}
