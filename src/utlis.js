import dayjs from 'dayjs';

const EVENT_DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const FORM_DATE_FORMAT = 'DD/MM/YY';
const BASIC_DATE_FORMAT = 'DD/MM/YY H:mm';
const randomSliceFromItems = (items) => {
  const n = Math.floor(Math.random() * (items.length + 1));
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};
const createIDgenerator = () => {
  let id = 0;
  return () => ++id;
};

const escPushed = (evt) => evt.key === 'Escape';
const getItemFromItemsById = (items, id) => (items.find((item) => item.id === id));
const randomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];
const randomPrice = () => Math.floor(Math.random() * 1000) + 100;
const randomId = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    return 0;
  }
  return Math.floor( Math.random() * (theMax - theMin) + theMin) + 1;
};

const convertToEventDateTime = (date) => date.substring(0, date.indexOf('T'));
const convertToEventDate = (date) => dayjs(date).format(EVENT_DATE_FORMAT);
const convertToDateTime = (date) => date.substring(0, date.indexOf('.'));
const convertToTime = (date) => dayjs(date).format(TIME_FORMAT);
const convertToUpperCase = (type) => type.charAt(0).toUpperCase() + type.slice(1);
const convertToBasicime = (date) => dayjs(date).format(BASIC_DATE_FORMAT);
const convertToFormDate = (date) => dayjs(date).format(FORM_DATE_FORMAT);

export {randomSliceFromItems,createIDgenerator,escPushed ,getItemFromItemsById,
  randomArrayElement, randomPrice, randomId,
  convertToEventDateTime, convertToEventDate, convertToDateTime, convertToTime,
  convertToUpperCase,convertToBasicime, convertToFormDate};
