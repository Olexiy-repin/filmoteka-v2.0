'use strict';

export class ModalService {
  #onEscPress = this.#windowKeyDownHandler.bind(this);

  constructor(rootSelector) {
    this.backdrop = rootSelector;

    this.backdrop.querySelector('.close-btn').addEventListener('click', this.close.bind(this));
    this.backdrop.addEventListener('click', event => {
      if (event.target.classList.contains('backdrop')) {
        this.close();
      }
    });
  }

  open() {
    this.backdrop.classList.remove('is-hidden');

    window.addEventListener('keydown', this.#onEscPress);
  }

  close() {
    this.backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', this.#onEscPress);
  }

  #windowKeyDownHandler(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  }
}

export class FilmModalService extends ModalService {
  constructor(rootSelector) {
    super(rootSelector);
  }
}
