/**
 * Created by tomekkociolek on 2016-09-19.
 */

export default class Component2 {
  constructor() {

  }

  do2(callback = () => {}) {
    console.log('do2');

    callback();
  }
}
