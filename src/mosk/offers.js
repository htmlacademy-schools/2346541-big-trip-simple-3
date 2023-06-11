import { getArrayFromType ,offersByType } from './consts';
import { randomSliceFromItems } from '../utlis';
const getRandomOffersIdsByType = (type) => {
  const currentTypeRandomOffers = randomSliceFromItems(
    offersByType.find((currentOffers) => currentOffers.type === type).offers);
  return currentTypeRandomOffers.map((offer) => offer.id);
};

const getOfferById = (id, type) => (getArrayFromType(type)
  .find((offer) => offer.id === id));

export {getRandomOffersIdsByType, getOfferById};
