/**
 * Created by tomekkociolek on 2016-09-19.
 */

export default class Component1 {
  constructor() {
    
  }
  
  do1(callback = () => {}) {
    console.log('do1');
    
    callback();
  }
}
