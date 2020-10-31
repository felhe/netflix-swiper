export enum State {
  LIKE = 'like',
  UNSURE = 'unsure',
  DISLIKE = 'dislike',
  UNSET = 'unset'
}

export class Medium {
  type: 'tvshows' | 'movies';
  genres: string[];
  genre_ids: number[];
  image: string;
  link: string;
  region: 'de' | string;
  title: string;
  id: number;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  original_language: string;
  original_title?: string;
  backdrop_path: string;
  overview: string;
  adult?: boolean;
}
