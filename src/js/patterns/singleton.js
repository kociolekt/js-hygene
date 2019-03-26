/**
 * Created by tomekkociolek on 2016-09-15.
 */
export class EmptySingleton {
  constructor() {
    if(EmptySingleton.singletonInstance) {
      return EmptySingleton.singletonInstance;
    }

    EmptySingleton.singletonInstance = this;


  }
}

export class SingletonExample {
  constructor() {
    if(SingletonExample.singletonInstance) {
      return SingletonExample.singletonInstance;
    }

    SingletonExample.singletonInstance = this;

    this.value = 1;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }
  
  printValue() {
    console.log(this.value);
  }
}
