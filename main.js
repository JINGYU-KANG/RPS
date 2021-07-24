document.addEventListener("DOMContentLoaded", function () {
  const playerRock = document.getElementsByClassName("player_result")[0];
  const playerPaper = document.getElementsByClassName("player_result")[1];
  const playerScissors = document.getElementsByClassName("player_result")[2];

  const comRock = document.getElementsByClassName("fa-hand-rock")[0];
  const comPaper = document.getElementsByClassName("fa-hand-paper")[0];
  const comScissors = document.getElementsByClassName("fa-hand-scissors")[0];

  const result = document.getElementById("results_final");
  let playerClicked = 0;

  const comRandom = (i) => Math.floor(Math.random() * i);

  const showComSide = (playerClicked) => {
    const temComRandom = comRandom(3);

    const resultsOfGame = () => {
      if (playerClicked === temComRandom) {
        result.innerHTML = "Draw";
      } else if (playerClicked === 0 && temComRandom === 1) {
        result.innerHTML = "Lose";
      } else if (playerClicked === 0 && temComRandom === 2) {
        result.innerHTML = "Win";
      } else if (playerClicked === 1 && temComRandom === 0) {
        result.innerHTML = "Win";
      } else if (playerClicked === 1 && temComRandom === 2) {
        result.innerHTML = "Lose";
      } else if (playerClicked === 2 && temComRandom === 0) {
        result.innerHTML = "Lose";
      } else if (playerClicked === 2 && temComRandom === 1) {
        result.innerHTML = "Win";
      }
    };
    switch (temComRandom) {
      case 0:
        comRock.style.background = "#afa9ff91";
        comPaper.style.background = "none";
        comScissors.style.background = "none";
        resultsOfGame();
        break;
      case 1:
        comRock.style.background = "none";
        comPaper.style.background = "#afa9ff91";
        comScissors.style.background = "none";
        resultsOfGame();

        break;
      default:
        comPaper.style.background = "none";
        comRock.style.background = "none";
        comScissors.style.background = "#afa9ff91";
        resultsOfGame();
    }
  };

  playerRock.addEventListener("click", () => {
    playerClicked = 0;
    showComSide(playerClicked);
  });

  playerPaper.addEventListener("click", () => {
    playerClicked = 1;
    showComSide(playerClicked);
  });

  playerScissors.addEventListener("click", () => {
    playerClicked = 2;
    showComSide(playerClicked);
  });
});
