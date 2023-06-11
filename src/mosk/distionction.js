import { descriptionPhrases,namesOfPlaces } from './consts';
import { randomId,randomArrayElement,createIDgenerator } from '../utlis';


const destinations = [];

const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < 6; i++) {
    const picture = {
      src: `img/photos/${randomId(1,5)}.jpg`,
      description: randomArrayElement(descriptionPhrases)
    };
    pictures.push(picture);
  }
  return pictures;
};
const generateDestinationId = createIDgenerator();

const generateDestinations = (n) => {
  for (let i = 0; i < n; i++) {
    const destination = {
      id: generateDestinationId(),
      description: randomArrayElement(descriptionPhrases),
      name: randomArrayElement(namesOfPlaces),
      pictures: generatePictures()
    };
    destinations.push(destination);
  }
};
export {generateDestinations,destinations};
