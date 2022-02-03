'use strict';
import { refs } from './refs';
import { LocalStorageService } from '../utils/localStorageService';
import galleryCardTemplate from '../../templates/gallery-card';
import { FilmModalService } from '../components/modal';
import watchedModalCardTemplate from '../../templates/watched-modal-card';

const localStorageService = new LocalStorageService();
const modalService = new FilmModalService(refs.backdrop);

renderFilms('watched');

let prevBtn = refs.filterBtnsContainer.querySelector('button[data-filter="watched"]');

refs.filterBtnsContainer.addEventListener('click', onFilterBtnClick);
refs.filmGallery.addEventListener('click', onGalleryCardClick);

function onFilterBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (event.target.classList.contains('utils-list__btn_active')) {
    return;
  }

  const key = event.target.dataset.filter;

  prevBtn.classList.remove('utils-list__btn_active');
  event.target.classList.add('utils-list__btn_active');
  renderFilms(key);
  prevBtn = event.target;
  refs.filmGallery.dataset.gallery = key;
}

function renderFilms(key) {
  refs.filmGallery.innerHTML = '';

  const filmsArr = localStorageService.load(key);

  if (!filmsArr) {
    return;
  }

  refs.filmGallery.innerHTML = galleryCardTemplate(filmsArr);
}

function onGalleryCardClick(event) {
  event.preventDefault();

  const filmCard = event.target.closest('.gallery-list__item');

  if (!filmCard) {
    return;
  }

  modalService.open();

  const galleryCondition = event.currentTarget.dataset.gallery;
  const filmsArr = localStorageService.load(galleryCondition);
  const filmId = +filmCard.dataset.filmId;
  const currentFilm = filmsArr.find(film => film.id === filmId);
  refs.modalCardContainer.innerHTML = watchedModalCardTemplate({
    ...currentFilm,
    libraryCondition: galleryCondition,
  });

  refs.backdrop.querySelector('button[data-remove-btn]').addEventListener('click', event => {
    const films = localStorageService.load(galleryCondition);

    films.forEach((film, i, arr) => {
      if (film.id === filmId) {
        arr.splice(i, 1);
      }
    });

    localStorageService.save(galleryCondition, films);
    renderFilms(galleryCondition);
    modalService.close();
  });
}
