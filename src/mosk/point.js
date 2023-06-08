import { getRandom } from '../utlis.js';
import { randomPla } from './destionction.js';
import { offersByType } from './consts.js';
const points = [];
function randomPri(){
  return getRandom(500,5000);
}
function randomOffersByType(){
  return offersByType[getRandom(0,offersByType.length - 1)];
}
function editPoint(){
  for(let i = 1; i <= 6 ; i++){
    const typesInEdit = randomOffersByType();
    points.push({
      id : i ,
      basePrice: randomPri(),
      dateFrom: 'datafrom',
      dateTo: 'dataTo',
      destination: randomPla(),
      offers: typesInEdit.offers,
      type: typesInEdit.type
    });
  }
  return points;
}
export{editPoint};
