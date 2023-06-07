import { render } from './render.js';
import Board from '../view/board.js';
import Sort from '../view/sort.js';
import Events from '../view/tripEvent.js';
import EventEdit from '../view/event_edit.js';
import CreatTrip from '../view/trip_add.js';
export default class BoardPresenter{
  boardComponent = new Board();
  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init (){
    render(new EventEdit(),this.boardContainer);
    render(new CreatTrip(),this.boardContainer);
    render(new Sort(),this.boardContainer);
    for(let i = 1 ; i <= 3 ; i++){
      render(new Events(),this.boardContainer);
    }
  }
}
