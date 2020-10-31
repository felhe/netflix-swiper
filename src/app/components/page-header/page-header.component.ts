import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../classes/User';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  users: User[];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  addUser(): void {
    this.userService.createUser('New User');
  }

  switchUser(user: User): void {
    this.userService.switchUser(user.id);
  }
}
