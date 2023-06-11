import { createElement } from '../render.js';

const boardTemplate = () => '<section class="trip-events"></section>';
export default class Board {
  #element = null;
  get template () {
    return boardTemplate;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.element = null;
  }
}
