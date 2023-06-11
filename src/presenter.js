import { render } from './render.js';
import Board from '../src/view/board.js';
import Sort from '../src/view/sort.js';
import Events from '../src/view/tripEvent.js';
import EventEdit from './view/event-edit.js';
import CreatTrip from './view/trip-add.js';
import { escPushed } from './utlis.js';
export default class BoardPresenter{
  #boardContainer = null;
  #tripPointsModel = null;
  #eventListComponent = null;
  #tripPoints = null;
  constructor({boardContainer , tripPointsModel}) {
    this.#boardContainer = boardContainer;
    this.#tripPointsModel = tripPointsModel;
  }

  init (){
    this.#tripPoints = [...this.#tripPointsModel.tripPoints];
    this.#eventListComponent = new Board();
    render(new Sort(),this.#boardContainer);
    render(this.#eventListComponent, this.#boardContainer);
    render(new CreatTrip(this.#tripPoints[0]), this.#eventListComponent.element);
    for(let i = 1; i < this.#tripPoints.length - 1; i++){
      this.#renderTripPoint(this.#tripPoints[i]);
    }
  }

  #renderTripPoint(tripPoint) {
    const tripPointComponent = new Events({tripPoint});
    const editFormComponent = new EventEdit(tripPoint);

    const replacePointToForm = () => {
      this.#eventListComponent.element.replaceChild(editFormComponent.element, tripPointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#eventListComponent.element.replaceChild(tripPointComponent.element, editFormComponent.element);
    };

    tripPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.body.addEventListener('keydown', closeEditFormOnEcsapeKey);
    });


    editFormComponent.element.querySelector('.event__save-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.body.removeEventListener('keydown', closeEditFormOnEcsapeKey);
    });

    editFormComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.body.removeEventListener('keydown', closeEditFormOnEcsapeKey);
    });

    function closeEditFormOnEcsapeKey(evt) {
      if (escPushed(evt)) {
        evt.preventDefault();
        replaceFormToPoint();
        document.body.removeEventListener('keydown', closeEditFormOnEcsapeKey);
      }
    }
    render(tripPointComponent, this.#eventListComponent.element);
  }
}
