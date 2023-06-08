import { editPoint } from '../mosk/point';
import { getRandom } from '../utlis';
function randPoints (){
  const pointModel = editPoint();
  return pointModel[0,getRandom(0,5)];
}
const POINT_COUNT = 3;

export default class TripPointModel {
  tripPoints = Array.from({length: POINT_COUNT},randPoints);

  getTripPoints() {
    return this.tripPoints;
  }
}
const testArray = Array.from({length: POINT_COUNT}, randPoints);
export {testArray};
