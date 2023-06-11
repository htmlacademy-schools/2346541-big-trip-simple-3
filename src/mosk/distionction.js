import { descriptionPhrases,namesOfPlaces } from './consts';
import { randomId,randomArrayElement } from '../utlis';
import { createImages } from './picture.js';

const destinationsId = [];
const destinations = [];

const getRandomDestination = () => {
  let id = randomId();
  while (destinationsId.indexOf(id) >= 0) {
    id = randomId();
  }
  destinationsId.push(id);
  const description = randomArrayElement(descriptionPhrases);
  const name = randomArrayElement(namesOfPlaces);
  const pictures = createImages();
  const destination = {
    id, description, name, pictures
  };
  destinations.push(destination);
  return id;
};

const getCityNameById = (id) => destinations.find((destination) => destination.id === id).name;
const getCityDescriptionById = (id) => destinations.find((destination) => destination.id === id).description;
const getCityPicById = (id) => destinations.find((destination) => destination.id === id).pictures.src;
export {getRandomDestination, getCityNameById, getCityDescriptionById, getCityPicById};
