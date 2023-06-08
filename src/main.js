import BoardPresenter from './presenter.js';
import Fliter from '../src/view/fliter.js';
import { render } from './render.js';
//test
import { testArray } from './model/point-model.js';
import { editPoint } from './mosk/point.js';
import { destinction } from './mosk/destionction.js';
//test
const tripTop = document.querySelector('.trip-controls__filters');
const tripEvent = document.querySelector('.trip-events');
const boardPre = new BoardPresenter({boardContainer : tripEvent});
render(new Fliter(),tripTop);
boardPre.init();
// eslint-disable-next-line no-console
console.log(destinction);
// eslint-disable-next-line no-console
console.log(editPoint());
// eslint-disable-next-line no-console
console.log(testArray);
