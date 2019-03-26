import {SingletonExample} from './patterns/singleton';
import ComponentInfluencingSingleton from './components/componentInfluencingSingleton';
function init() {
  let s1 = new SingletonExample(),
    s2 = new SingletonExample(),
    component = new ComponentInfluencingSingleton();

  s1.printValue(); // 1
  s2.printValue(); // 1

  s1.setValue(2);

  s1.printValue(); // 2
  s2.printValue(); // 2

  s2.setValue(3);

  s1.printValue(); // 3
  s2.printValue(); // 3

  console.log(s1 === s2); // true

  component.changeSingletonValue(6);

  s1.printValue(); // 6
  s2.printValue(); // 6
}

$(document).ready(init);
