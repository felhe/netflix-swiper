# Netflix Swiper

Can't decide what movie to watch? 
A Tinder-like UI for browsing and liking movies and tv shows available on Netflix, 
which helps you to find matches between you and your friends.

## Data

Currently, the app uses samples and no real data. In the future it will query a corresponding API (work-in-progress).

A list of all movies/shows will be scraped from Netflix with details being fetched from [TMDb](https://www.themoviedb.org/documentation/api).

## Roadmap

Features that are planned / not implemented yet:

- Algorithm for calculating matches / displaying matches
- Persist state (localStorage etc.)
- Filter/sort available movies/tv shows by genres or rating
- Watch trailer/teaser
- Mobile optimization
- Real-time cross-device support (WebRTC?)
- More streaming services (Prime Video...)

## Development

This app is built with Angular and [NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd).

After cloning run ``npm i`` and ``npm start`` to serve the app locally.
