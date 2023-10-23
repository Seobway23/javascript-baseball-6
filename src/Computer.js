import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.numbers = this.pickRandomNumbers();
  }

  pickRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  getNumbers() {
    return this.numbers;
  }
}

export default Computer;
