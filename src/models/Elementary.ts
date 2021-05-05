import Calculator from './interfaces/Calculator';
import {
  ADDITION_OPERATOR,
  SUBTRACTION_OPERATOR,
  MULTIPLICATION_OPERATOR,
  DIVISION_OPERATOR,
} from '../common/Const';

class Elementary implements Calculator {
  a: number;

  b: number;

  operation: string;

  constructor(a: number, b: number, operation: string) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  compute(): number {
    switch (this.operation) {
      case ADDITION_OPERATOR:
        return this.a + this.b;
      case SUBTRACTION_OPERATOR:
        return this.a - this.b;
      case MULTIPLICATION_OPERATOR:
        return this.a * this.b;
      case DIVISION_OPERATOR:
        return this.a / this.b;
      default:
        break;
    }
    return -1;
  }
}

export default Elementary;
