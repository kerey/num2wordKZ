// named import
import { sayHello } from "./util";

// default import
import greet from "./greet";
import num2word from './num2word';

// sayHello and greet will be available upon installing the lib
export {
  sayHello,
  greet,
  num2word
}
