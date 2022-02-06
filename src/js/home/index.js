'use strict';

import tuiPagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

import { refs } from './refs';
import TmdbApi from '../components/tmdb-api';
import galleryCardTemplate from '../../templates/gallery-card';
import modalCardTemplate from '../../templates/modal-card';
import { FilmModalService } from '../components/modal';
import { LocalStorageService } from '../utils/localStorageService';

const tmdbApi = new TmdbApi();
const localStorageService = new LocalStorageService();
const modalService = new FilmModalService(refs.backdrop);

tmdbApi
  .firstFetchForThePopularFilms()
  .then(({ data }) => {
    createPagination({
      totalItems: data.total_results,
      page: data.page,
      totalPage: data.total_pages,
      method: 'fetchPopularFilms',
    });

    refs.filmGallery.innerHTML = galleryCardTemplate(data.results);
  })
  .catch(console.log);

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

refs.filmGallery.addEventListener('click', onGalleryCardClick);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['user_query'].value.trim();
  event.currentTarget.reset();
  refs.warningText.classList.add('is-hidden');
  refs.paginationContainer.innerHTML = '';
  tmdbApi.query = query;
  tmdbApi.page = 1;

  tmdbApi
    .searchFilmsByName()
    .then(({ data }) => {
      createPagination({
        totalItems: data.total_results,
        page: data.page,
        totalPage: data.total_pages,
        method: 'searchFilmsByName',
      });

      if (!data.results.length) {
        refs.warningText.classList.remove('is-hidden');
        refs.filmGallery.innerHTML = '';
        refs.paginationContainer.innerHTML = '';
        return;
      }

      refs.filmGallery.innerHTML = galleryCardTemplate(data.results);
    })
    .catch(console.log);
}

function onGalleryCardClick(event) {
  event.preventDefault();
  const filmCard = event.target.closest('.gallery-list__item');

  if (!filmCard) {
    return;
  }

  modalService.open();

  tmdbApi
    .fetchFullInfoAboutFilm(filmCard.dataset.filmId)
    .then(({ data }) => {
      refs.modalCardContainer.innerHTML = modalCardTemplate(data);

      refs.backdrop
        .querySelector('button[data-add-to-watched]')
        .addEventListener('click', event => {
          addFilmToLocalStorage('watched', data);
          modalService.close();
        });

      refs.backdrop.querySelector('button[data-add-to-queue]').addEventListener('click', event => {
        addFilmToLocalStorage('queue', data);
        modalService.close();
      });
    })
    .catch(console.log);
}

function createPagination({ totalItems, page, totalPage, method } = {}) {
  const pagination = new tuiPagination(refs.paginationContainer, {
    totalItems,
    itemsPerPage: totalItems / totalPage,
    visiblePages: 5,
    page,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      disabledMoveButton(event) {
        if (event.type === 'first' || event.type === 'last') {
          return '<span></span>';
        }

        return `<span class="tui-page-btn tui-is-disabled tui-${event.type}"><span class="tui-ico-${event.type}">${event.type}</span></span>`;
      },
      moveButton(event) {
        if (event.type === 'first' || event.type === 'last') {
          return '<span></span>';
        }

        return `<a href="#" class="tui-page-btn tui-${event.type}"><span class="tui-ico-${event.type}">${event.type}</span></a>`;
      },
    },
  });

  pagination.on('afterMove', event => {
    tmdbApi.page = event.page;

    tmdbApi[`${method}`]()
      .then(({ data }) => {
        refs.filmGallery.innerHTML = galleryCardTemplate(data.results);

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      })
      .catch(console.log);
  });
}

function addFilmToLocalStorage(key, data) {
  const filmsArr = localStorageService.load(key);

  if (!filmsArr) {
    localStorageService.save(key, [data]);
    return;
  }

  const isFilmInStorage = filmsArr.find(film => film.id === data.id);
  if (isFilmInStorage) {
    alert(`Фильм уже добавлен в ${key}`);
    return;
  }

  filmsArr.push(data);

  localStorageService.save(key, filmsArr);
}
