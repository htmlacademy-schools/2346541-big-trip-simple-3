const tyeps = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'];
const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'
];
const place = [
  'place1',
  'place2',
  'place3',
  'place4',
  'place5',
  'place6',
];
const offers = [
  {
    id: 1,
    title: 'Upgrade a business class',
    price: 120
  },
  {
    id: 2,
    title: 'Add luggage',
    price: 20
  },
  {
    id: 3,
    title: 'Switch to comfort',
    price: 50
  },
  {
    id: 4,
    title: 'Add meal',
    price: 90
  },
  {
    id: 5,
    title: 'Choose seats',
    price: 35
  },
  {
    id: 6,
    title: 'Travel by train',
    price: 190
  },
  {
    id: 7,
    title: 'Add alcohol',
    price: 250
  },
  {
    id: 8,
    title: 'Upgrade a car',
    price: 120
  },
  {
    id: 9,
    title: 'No queue',
    price: 150
  }
];
const offersByType = [
  {
    type: 'taxi',
    offers: [1,2,3,4]
  },
  {
    type: 'bus',
    offers: [2,4]
  },
  {
    type: 'train',
    offers: [2,3,5,7]
  },
  {
    type: 'ship',
    offers: [4,7]
  },
  {
    type: 'drive',
    offers: [1,3,8]
  },
  {
    type: 'flight',
    offers: [1,4,5,6]
  },
  {
    type: 'check-in',
    offers: [9]
  },
  {
    type: 'sightseeing',
    offers: [1]
  },
  {
    type: 'restaurant',
    offers: [3,5]
  },
];
const times = [
  {
    timeFrom: '2019-03-19T11:20',
    timeTo: '2019-03-19T13:00'
  },
  {
    timeFrom: '2019-03-18T10:30',
    timeTo: '2019-03-18T11:00'
  },
  {
    timeFrom: '2019-03-18T12:25',
    timeTo: '2019-03-18T13:35'
  },
  {
    timeFrom: '2019-04-20T12:25',
    timeTo: '2019-04-20T13:35'
  }
];
function getOfferByType (){
  return offersByType;
}
export{tyeps,description,place,offers,offersByType,times,getOfferByType};
