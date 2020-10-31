import { Medium } from './Medium';

export class User {
  id: number;
  name: string;
  likes: Medium[] = [];
  dislikes: Medium[] = [];
  unsure: Medium[] = [];

  addLike(medium: Medium): void {
    this.removeMedium(medium);
    this.likes.push(medium);
  }

  addUnsure(medium: Medium): void {
    this.removeMedium(medium);
    this.unsure.push(medium);
  }

  addDislike(medium: Medium): void {
    this.removeMedium(medium);
    this.dislikes.push(medium);
  }

  private removeMedium(medium: Medium): void {
    this.likes = this.likes.filter((m) => m.id !== medium.id);
    this.unsure = this.unsure.filter((m) => m.id !== medium.id);
    this.dislikes = this.dislikes.filter((m) => m.id !== medium.id);
  }
}
