import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medium } from '../swiper/classes/Medium';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor() {}

  getMedia(): Observable<Medium[]> {
    return of([
      {
        type: 'movies',
        genres: ['Action', 'Thriller'],
        genre_ids: [],
        link: '/watch',
        image: '',
        region: 'de',
        title: 'Lorem Ipsum',
        id: 1,
        popularity: 100,
        vote_count: 10,
        vote_average: 10,
        poster_path: '',
        original_language: 'en',
        backdrop_path: '/sOmieSK2Zjlv8hCUlPTRz3vOZms.jpg',
        overview:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        adult: false
      },
      {
        type: 'tvshows',
        genres: ['Action', 'Comedy'],
        genre_ids: [],
        link: '/watch',
        image: '',
        region: 'de',
        title: 'Dolor Sit Amet',
        id: 1,
        popularity: 100,
        vote_count: 10,
        vote_average: 10,
        poster_path: '',
        original_language: 'en',
        backdrop_path: '/9UjeXIr8xMkrXY6yfkyciZOgu3K.jpg',
        overview:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        adult: false
      }
    ]);
  }
}
