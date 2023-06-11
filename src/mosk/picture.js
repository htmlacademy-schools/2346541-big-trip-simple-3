import { randomPic,randomArrayElement } from '../utlis.js';
import { descriptionPhrases } from './consts.js';

function createImages() {
  return {
    src: randomPic(),
    description: randomArrayElement(descriptionPhrases)
  };
}

export {createImages};
