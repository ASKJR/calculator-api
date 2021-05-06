import Calculator from './interfaces/Calculator';

class Factorial implements Calculator {
  a: number;

  constructor(a: number) {
    this.a = a;
  }

  compute(): number {
    return this.fat(this.a);
  }

  private fat(n: number): number {
    if (n === 0) return 1;
    return n * this.fat(n - 1);
  }
}

export default Factorial;
