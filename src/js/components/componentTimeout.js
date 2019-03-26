/**
 * Created by tomekkociolek on 2016-09-19.
 */

import SimpleEventer from 'simple-eventer';

export default class ComponentTimeout extends SimpleEventer {
  constructor() {
    super();

    this.initTimeout();
  }

  initTimeout() {
    setTimeout(() => {
      this.fire('afterTimeout');
    }, 2000);
  }
}
