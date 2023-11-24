const outer = () => {
  let message = 'Hello';
  const inner = () => {
    console.log(message);
  };
  inner();
};

outer();

const createCounter = () => {
  let count = 0;
  const increment = () => {
    count++;
    console.log(`Count increased to ${count}`);
  };

  const getCount = () => {
    return count;
  };

  return {
    increment,
    getCount,
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

const createGame = () => {
  let score = 0;
  const increaseScore = (points) => {
    score += points;
    console.log(`+${points} pts`);
  };

  const decreaseScore = (points) => {
    score -= points;
    console.log(`-${points} pts`);
  };

  const getScore = () => {
    return score;
  };

  return {
    increaseScore,
    decreaseScore,
    getScore,
  };
};

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`Score: ${game.getScore()} pts`);
