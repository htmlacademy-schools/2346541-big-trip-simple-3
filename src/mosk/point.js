import { getRandom } from '../utlis.js';
import { randomPla } from './destionction.js';
import { offersByType ,times } from './consts.js';
function randomPri(){
  return getRandom(500,5000);
}
function randomOffersByType(){
  return offersByType[getRandom(0,offersByType.length - 1)];
}
function randomTim(){
  return times[getRandom(0,times.length - 1)];
}
function editPoint(){
  const points = [];
  for(let i = 1; i <= 6 ; i++){
    const typesInEdit = randomOffersByType();
    const timesInEdit = randomTim();
    points.push({
      id : i,
      basePrice: randomPri(),
      dateFrom: new Date(timesInEdit.timeFrom),
      dateTo: new Date(timesInEdit.timeTo),
      destination: randomPla(),
      offers: typesInEdit.offers,
      type: typesInEdit.type
    });
  }
  return points;
}
export{editPoint};
