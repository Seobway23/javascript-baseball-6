import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";
import BaseballGame from "./BaseballGame";

class App {
  constructor() {
    this.computer = new Computer();
    this.baseballGame = new BaseballGame();
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if (!userInput) {
        throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
      }

      const userNumbers = userInput.split("").map(Number);

      const result = this.baseballGame.calculateResult(
        userNumbers,
        this.computer.getNumbers()
      );
      Console.print(result);

      if (result === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restart = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (restart === "1") {
          this.computer = new Computer();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
