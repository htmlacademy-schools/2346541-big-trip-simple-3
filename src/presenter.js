import { render } from './render.js';
import Board from '../src/view/board.js';
import Sort from '../src/view/sort.js';
import Events from '../src/view/tripEvent.js';
import EventEdit from './view/event-edit.js';
import CreatTrip from './view/trip-add.js';
export default class BoardPresenter{
  boardComponent = new Board();
  constructor({boardContainer , tripPointsModel}) {
    this.boardContainer = boardContainer;
    this.tripPointsModel = tripPointsModel;
  }

  init (){
    this.tripPoints = [...this.tripPointsModel.getTripPoints()];
    render(new EventEdit(),this.boardContainer);
    render(new CreatTrip(),this.boardContainer);
    render(new Sort(),this.boardContainer);
    for(let i = 0; i < this.tripPoints.length; i++){
      render(new Events({tripPoint: this.tripPoints[i]}),this.boardContainer);
    }
  }
}
