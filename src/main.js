import BoardPresenter from './presenter.js';
import Fliter from '../src/view/fliter.js';
import { render } from './render.js';
import TripPointModel from './model/point-model.js';
//test
import { getRandomPoint } from './mosk/point.js';
const tripTop = document.querySelector('.trip-controls__filters');
const tripEvent = document.querySelector('.trip-events');
const tripPointsModel = new TripPointModel();
const boardPre = new BoardPresenter({boardContainer : tripEvent ,tripPointsModel});
render(new Fliter(),tripTop);
boardPre.init();
// eslint-disable-next-line no-console
console.log(getRandomPoint());
// eslint-disable-next-line no-console
console.log(getRandomPoint);
