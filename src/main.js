import BoardPresenter from './presenter.js';
import Fliter from '../src/view/fliter.js';
import { render } from './render.js';
import TripPointModel from './model/point-model.js';
import { mockInit ,pointsId } from './mosk/point.js';
const tripTop = document.querySelector('.trip-controls__filters');
const tripEvent = document.querySelector('.trip-events');
mockInit(5,10);
const tripPointsModel = new TripPointModel(pointsId);
// eslint-disable-next-line no-console
console.log(tripPointsModel);

// eslint-disable-next-line no-console
const boardPre = new BoardPresenter({boardContainer : tripEvent ,tripPointsModel});
render(new Fliter(),tripTop);
boardPre.init();
