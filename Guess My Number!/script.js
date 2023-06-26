let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector(".number").textContent = "?";

// document.querySelector(".message").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number! 😓";

    //win
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "Correct Number! 💖";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "rgb(36, 137, 177)";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //Too high
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game! 😭";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game! 😭";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1; //reassgin a value to secret number
  document.querySelector(".message").textContent = "Start guessing！";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";
});
