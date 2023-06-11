import dayjs from 'dayjs';

const EVENT_DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const FORM_DATE_FORMAT = 'DD/MM/YY';
const getRandom = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    return 1;
  }
  return Math.floor( Math.random() * (theMax - theMin) + theMin) + 1;
};
const randomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];
const randomPrice = () => Math.floor(Math.random() * 1000) + 100;
const randomId = () => Math.floor(Math.random() * 100) + 1;
const randomPic = () => `img/photos/${getRandom(1,5)}.jpg`;
const convertToEventDateTime = (date) => date.substring(0, date.indexOf('T'));
const convertToEventDate = (date) => dayjs(date).format(EVENT_DATE_FORMAT);
const convertToDateTime = (date) => date.substring(0, date.indexOf('.'));
const convertToTime = (date) => dayjs(date).format(TIME_FORMAT);
const convertToUpperCase = (type) => type.charAt(0).toUpperCase() + type.slice(1);
const convertToFormDate = (date) => dayjs(date).format(FORM_DATE_FORMAT);

export {randomArrayElement, randomPrice, randomId, randomPic,
  convertToEventDateTime, convertToEventDate, convertToDateTime, convertToTime,
  convertToUpperCase, convertToFormDate};
