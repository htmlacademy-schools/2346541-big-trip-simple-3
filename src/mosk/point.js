import { randomArrayElement , randomPrice ,createIDgenerator} from '../utlis';
import { fromToDates, pointType } from './consts';
import { generateDestinations , destinations} from './distionction';
import { getRandomOffersIdsByType } from './offers';
const pointsId = [];
const generateTripPointId = createIDgenerator();

const generateTripPoints = (n) => {
  for (let i = 0; i < n; i++) {
    const dates = randomArrayElement(fromToDates);
    const type = randomArrayElement(pointType);
    const tripPoint = {
      basePrice: randomPrice(),
      dateFrom: dates.dateFrom,
      dateTo: dates.dateTo,
      destination: randomArrayElement(destinations).id,
      id: generateTripPointId(),
      offersIDs: getRandomOffersIdsByType(type),
      type
    };
    pointsId.push(tripPoint);
  }
};
const mockInit = (numberOfTripPoints, numberOfDestinations) => {
  generateDestinations(numberOfDestinations);
  generateTripPoints(numberOfTripPoints);
};


export {pointsId,mockInit,generateTripPoints};
