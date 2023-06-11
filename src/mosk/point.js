import { randomId , randomPrice ,randomArrayElement} from '../utlis';
import { fromToDates, getArrayFromType, pointType } from './consts';
import { getRandomDestination } from './distionction';
const pointsId = [];


const getRandomPoint = () => {
  let id = randomId();
  while (pointsId.indexOf(id) >= 0) {
    id = randomId();
  }
  pointsId.push(id);
  const basePrice = randomPrice();
  const dates = randomArrayElement(fromToDates);
  const dateFrom = dates.dateFrom;
  const dateTo = dates.dateTo;
  const destination = getRandomDestination();
  const type = randomArrayElement(pointType);
  const offers = getArrayFromType(type);


  return {
    basePrice, dateFrom, dateTo, destination, id, offers, type
  };
};


export {getRandomPoint};
