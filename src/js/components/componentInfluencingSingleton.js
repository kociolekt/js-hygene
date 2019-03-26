/**
 * Created by tomekkociolek on 2016-09-15.
 */
import {SingletonExample} from '../patterns/singleton';

export default class ComponentInfluencingSingleton {
  constructor() {
    this.singletonExample = new SingletonExample();
  }
  
  changeSingletonValue(newValue) {
    this.singletonExample.setValue(newValue);
  }
}
