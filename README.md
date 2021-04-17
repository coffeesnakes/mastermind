# Mastermind: break the hidden code!

[Mastermind is now live!](https://mastermindbuild.azurewebsites.net/)


I have created a web app that closely resembles the board game Mastermind. Version one can be found in the Github repository under branch: V1, which utilizes an API to randomly generate a 4 digit code that must be guessed by the user.
**Version2 is now live hosted on Azure and can be played by clicking the link above! Version 2 is a full-stack application for Mastermind, much more closely resembling the original game of Mastermind whilst hosting a bunch of cool new features.**

Mastermind allow users to:
- Develop strategies to most efficiently decipher the code
- Submit scores to the database, comparing time and number of guesses to compete for the top 20!
- Choose game difficulty
- Check out your competition by viewing the High Scores page.


## Screenshots
### Game
![Game](screenshots/game.png)

### HighScore
![HighScore](screenshots/highscores.png)

### Difficulty Selection
![Difficulty](screenshots/difficultyselection.png)

### Page Speed
![Page_Speed](screenshots/pagespeeds.png)


## Tech Stack
React, Docker, MongoDB, Azure B1S VM, Node.js, Express.js, Azure Container Instances

## Requirements


- Node v12.18.4


- MongoDB v4.4.0


## Development

### Installing and running the application

From project directory:
Install dependencies.
```sh
npm install
```

Start the server
```sh
npm start
```

## My Other Games

  - [TETRIS](https://github.com/coffeesnakes/tetris_JS "Tetris")
  - [TICTACTOE](https://github.com/coffeesnakes/tictactoeJS "Tic-Tac-Toe")
  - [SNAKE](https://github.com/coffeesnakes/snekGame "Snake")
