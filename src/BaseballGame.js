class BaseballGame {
    calculateResult(userNumbers, computerNumbers) {
      let balls = 0;
      let strikes = 0;
  
      userNumbers.forEach((num, index) => {
        if (num === computerNumbers[index]) {
          strikes++;
        } else if (computerNumbers.includes(num)) {
          balls++;
        }
      });
  
      if (strikes === 0 && balls === 0) return '낫싱';
      if (strikes === 3) return '3스트라이크';
      
      let result = '';
      if (balls > 0) result += `${balls}볼 `;
      if (strikes > 0) result += `${strikes}스트라이크`;
  
      return result.trim();
    }
  }
  
  export default BaseballGame;
  