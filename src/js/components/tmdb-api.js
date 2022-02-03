'use strict';

import axios from 'axios';

export default class TmdbApi {
  #API_KEY = '08c8955d1f3be6891cd82ae214d79041';
  #BASE_URL = 'https://api.themoviedb.org/3';
  #IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  constructor() {
    this.page = 1;
    this.query = '';
    this.#fetchAllGenres();
  }

  async fetchPopularFilms() {
    const popularFilms = await axios.get(`${this.#BASE_URL}/trending/movie/day`, {
      params: {
        api_key: this.#API_KEY,
        page: this.page,
      },
    });

    popularFilms.data.results.forEach(film => {
      this.#addGenresPosterAndDateToResult(film);
    });

    return popularFilms;
  }

  async searchFilmsByName() {
    const searchedFilms = await axios.get(`${this.#BASE_URL}/search/movie`, {
      params: {
        api_key: this.#API_KEY,
        query: this.query,
        page: this.page,
      },
    });

    searchedFilms.data.results.forEach(film => {
      this.#addGenresPosterAndDateToResult(film);
    });

    return searchedFilms;
  }

  async fetchFullInfoAboutFilm(filmId) {
    const filmInfo = await axios.get(`${this.#BASE_URL}/movie/${filmId}`, {
      params: {
        api_key: this.#API_KEY,
      },
    });

    this.#addGenresPosterAndDateToResult(filmInfo.data);

    return filmInfo;
  }

  async #fetchAllGenres() {
    const response = await axios.get(`${this.#BASE_URL}/genre/movie/list`, {
      params: {
        api_key: this.#API_KEY,
      },
    });

    localStorage.setItem('genres', JSON.stringify(response.data.genres));
  }

  #addGenresPosterAndDateToResult(film) {
    const genres = JSON.parse(localStorage.getItem('genres'));

    film.backdrop_path = film.backdrop_path
      ? `${this.#IMAGE_BASE_URL}${film.backdrop_path}`
      : film.backdrop_path;
    film.poster_path = film.poster_path
      ? `${this.#IMAGE_BASE_URL}${film.poster_path}`
      : film.poster_path;
    film.release_date = film.release_date ? film.release_date.slice(0, 4) : '';

    if (film.genre_ids) {
      film.genre_ids.forEach((genre, idx, arr) => {
        arr[idx] = genres.find(el => el.id === genre);
      });
    }
  }
}
