/**
 * Created by tomekkociolek on 2016-09-15.
 */

import ComponentPopup from '../components/componentPopup';
import ComponentTimeout from '../components/componentTimeout';

export default class Mediator {
  constructor() {

    this.componentPopup = new ComponentPopup();
    this.componentTimeout = new ComponentTimeout();

    this.functionality1();
  }

  functionality1() {
    this.componentTimeout.on('afterTimeout', () => {
      this.componentPopup.showPopup('po timeoutce'); // po timeoutce
    });
  }
}
