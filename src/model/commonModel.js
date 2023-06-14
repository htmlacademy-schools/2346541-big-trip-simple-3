import Observable from '../framework/observable.js';
import { UpdateType } from '../const.js';

export default class commonModel extends Observable {
  #common = null;
  #pointCommon = null;

  constructor({ common }) {
    super();
    this.#common = common;
  }

  get pointCommon() {
    return this.#pointCommon;
  }

  async init() {
    let allOffers, allDestinations;
    try {
      [allOffers, allDestinations] = await Promise.all([
        this.#common.offers,
        this.#common.destinations
      ]);
      this.#pointCommon = { allOffers, allDestinations };
      this._notify(UpdateType.INIT_POINT_COMMON);
    } catch (err) {
      this._notify(UpdateType.ERROR_LOADING);
      throw new Error('Error in load');
    }
  }
}
