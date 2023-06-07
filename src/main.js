import BoardPresenter from './presenter.js';
import Fliter from '../view/fliter.js';
import { render } from './render.js';
const tripTop = document.querySelector('.trip-controls__filters');
const tripEvent = document.querySelector('.trip-events');
const boardPre = new BoardPresenter({boardContainer : tripEvent});
render(new Fliter(),tripTop);
boardPre.init();
