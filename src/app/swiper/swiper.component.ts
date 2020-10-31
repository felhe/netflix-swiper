import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Medium, State } from '../classes/Medium';
import { User } from '../classes/User';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() media: Medium[];
  currentIndex: number;
  state: State;
  StateEnum = State;

  constructor() {}

  ngOnInit(): void {
    this.currentIndex = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user && changes.user.currentValue) {
      console.log('User switched');
    }
  }

  next(): void {
    if (this.currentIndex < this.media.length - 1) {
      this.currentIndex++;
      this.updateStateView();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateStateView();
    }
  }

  updateStateView(): void {
    const currentMedium = this.media[this.currentIndex];
    if (this.user.likes.some((m) => m.id === currentMedium.id)) {
      this.state = State.LIKE;
    } else if (this.user.unsure.some((m) => m.id === currentMedium.id)) {
      this.state = State.UNSURE;
    } else if (this.user.dislikes.some((m) => m.id === currentMedium.id)) {
      this.state = State.DISLIKE;
    } else {
      this.state = State.UNSET;
    }
  }

  setState(state: State): void {
    this.state = state;
    switch (state) {
      case State.LIKE:
        this.user.addLike(this.media[this.currentIndex]);
        break;
      case State.UNSURE:
        this.user.addUnsure(this.media[this.currentIndex]);
        break;
      case State.DISLIKE:
        this.user.addDislike(this.media[this.currentIndex]);
        break;
    }
    this.next();
  }
}
