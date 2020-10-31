import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { User } from './classes/User';
import { MediaService } from './services/media/media.service';
import { Observable } from 'rxjs';
import { Medium } from './classes/Medium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-ui';
  user: User;
  media$: Observable<Medium[]>;

  constructor(
    public userService: UserService,
    private mediaService: MediaService
  ) {
    this.user = userService.createUser('User');
    this.media$ = mediaService.getMedia();
  }
}
