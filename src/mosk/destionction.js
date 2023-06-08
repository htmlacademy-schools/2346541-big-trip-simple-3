import { getRandom } from '../utlis.js';
import { description , place } from './consts.js';
function randomPic(){
  return`http://picsum.photos/248/152?r=${getRandom(0,100)}`;
}
function randomDis(){
  return description[getRandom(0,description.length - 1)];
}
function randomPla (){
  return place[getRandom(0,place.length - 1)];
}
const destinction = [
  {
    id: 0,
    description:randomDis(),
    name: randomPla(),
    pictures: [
      {
        src: randomPic(),
        description: randomDis(),
      }
    ]
  },
  {
    id: 1,
    description: randomDis(),
    name: randomPla(),
    pictures: [
      {
        src: randomPic(),
        description: randomDis(),
      }
    ]
  },
  {
    id: 2,
    description:  randomDis(),
    name: randomPla(),
    pictures: [
      {
        src: randomPic(),
        description: randomDis(),
      }
    ]
  },
  {
    id: 3,
    description: randomDis(),
    name: randomPla(),
    pictures: [
      {
        src: randomPic(),
        description: randomDis(),
      }
    ]
  },
  {
    id: 4,
    description: randomDis(),
    name: randomPla(),
    pictures: [
      {
        src: randomPic(),
        description: randomDis(),
      }
    ]
  },
  {
    id: 5,
    description: randomDis(),
    name: randomPla(),
    pictures: [
      {
        src: randomPic(),
        description: randomDis(),
      }
    ]
  },
];
function getDestinations() {
  return destinction;
}
export { getDestinations , destinction ,randomPla};
