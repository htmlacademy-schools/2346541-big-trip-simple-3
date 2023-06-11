import { createElement } from '../render.js';

const boardTemplate = () => '<section class="trip-events"></section>';
export default class Board {
  getTemplate () {
    return boardTemplate;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
