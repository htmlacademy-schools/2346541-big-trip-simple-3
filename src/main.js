//что бы не потеря вашего времени，списал у другого
import { render } from './framework/render.js';
import NewPointButtonView from './view/new-point-button-view.js';
import BoardPresenter from './presenter/listPresenter.js';
import FilterPresenter from './presenter/filterPresenter.js';
import PointsModel from './model/pointsModel.js';
import commonModel from './model/commonModel.js';
import FilterModel from './model/filterModel.js';
import PointsApiService from './api.js';

const AUTHORIZATION = 'Basic er883jdzbdw';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip/';

const boradContent = document.querySelector('.trip-events');
const filterContent = document.querySelector('.trip-controls__filters');
const buttonContent = document.querySelector('.trip-main');
const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const pointCommonModel = new commonModel({
  common: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();

const boardPresenter = new BoardPresenter({
  boardContainer: boradContent,
  pointsModel,
  pointCommonModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose,
});
const filterPresenter = new FilterPresenter({
  filterContainer: filterContent,
  filterModel,
  pointsModel
});
const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

filterPresenter.init();
boardPresenter.init();
pointsModel.init();
pointCommonModel.init();
render(newPointButtonComponent, buttonContent);

