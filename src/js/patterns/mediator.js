/**
 * Created by tomekkociolek on 2016-09-15.
 */

import Component1 from '../components/component1';
import Component2 from '../components/component2';

export class EmptyMediator {
  constructor() {

  }
}


export class MediatorExample {
  constructor() {
    
    this.component1 = new Component1();
    this.component2 = new Component2();

    this.functionality1();
    this.functionality2();
    this.functionality3();
  }

  functionality1() {
    this.component1.do1(() => {
      this.component2.do2();
    });
  }

  functionality2() {
    this.component2.do2(() => {
      this.component1.do1();
    });
  }

  functionality3() {
    this.component1.do1();
    this.component2.do2();
  }
}
