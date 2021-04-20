[![LinkedIn][linkedin-shield]][linkedin-url]
![JavaScript](https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React%20-%2320232a.svg?&style=flat-square&logo=react&logoColor=%2361DAFB)
![Node](https://img.shields.io/badge/Node.js%20-%2343853D.svg?&style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express%20-%23404d59.svg?&style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=flat-square&logo=mongodb&logoColor=white)
![Docker](https://camo.githubusercontent.com/bbd68a3c0f4ee784672cdf8aeffe920f7870961711eecc0c5936e4dc51cd1c05/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f636b65722532302d2532333234393645442e7376673f267374796c653d666c61742d737175617265266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465)
![Jest](https://img.shields.io/badge/Jest%20-%23C21325.svg?&style=flat-square&logo=Jest&logoColor=white)
![Git](https://img.shields.io/badge/Git%20-%23F05033.svg?&style=flat-square&logo=git&logoColor=white)
# Mastermind: break the hidden code!

[Mastermind is now live!](https://mastermindbuild.azurewebsites.net/)

Mastermind is a code breaking game where one player (or the computer) chooses a code that's hidden from the other playing who wants to crack the code.



Mastermind allow users to:
- Develop strategies to most efficiently decipher the code
- Submit scores to the database, comparing time and number of guesses to compete for the top 20!
- Choose game difficulty
- Check out your competition by viewing the High Scores page.

<p>&nbsp;</p>

# Contents
- [Technologies](#Technologies)
- [Getting Started](#Development)
- [Prerequisites](#Prerequisites)
- [API documentation](#api-documentaton)
- [Testing](#Testing)
- [System Design](#System-Design)
- [Version 1](#Version-1)
- [Version 2](#Version-2)
- [Future Updates](#Future-Updates)

<p>&nbsp;</p>

## Screenshots
### Game
![Game](screenshots/game.png)


### HighScore
![HighScore](screenshots/highscores.png)


### Difficulty Selection
![Difficulty](screenshots/difficultyselection.png)


### Page Speed
![Page_Speed](screenshots/pagespeeds.png)


# Development
<p>&nbsp;</p>

## Technologies
React, Docker, MongoDB, Jest, Enzyme, Node.js, Express.js, Azure B1S, ACI, Supertest

<p>&nbsp;</p>

## Prerequisites


- Node v12.18.4

- npm v7.10.0

- MongoDB v4.4.0

<p>&nbsp;</p>


## Installing and running the application
<p>&nbsp;</p>


From project directory:
Install dependencies
```sh
npm install
```

Start server
```sh
npm start
```

<p>&nbsp;</p><p>&nbsp;</p>


## API documentation

![API](screenshots/APIDocumentation.png)


<p>&nbsp;</p><p>&nbsp;</p>

# Testing
```sh
npm test
```

Current status:

<p> </p>

![tests](screenshots/testing.png)


<p>&nbsp;</p><p>&nbsp;</p>

# System Design

<p>&nbsp;</p>

## Version 1

**The Minimum Viable Product:**
The target, was simple, minimal, and durable. Essentially I wanted something that had all of the bare functionalities necessary to play the game with an integrated API for the hidden code. There was never any intent to design anything more for the initial product. It wasn't meant to be beautiful, but rather intuitive so the user can experience the core game without frustration
- Integrated API from [Random.org](https://www.random.org/) to generate code
- Setup numeric value inputs via on-click functionality
- Provided a feedback system that utilizes position and values of guess and responds with number of exact or close guesses.
- Tracked and displayed remaining number of attempts on the client.

![version1](screenshots/version1.png)
![Version1](screenshots/V1Logic.png)

<p>&nbsp;</p><p>&nbsp;</p>

## Version 2

**Ready for production:**
When figuring out the scope of this refactor I decided to introduce a workflow that has worked for me in the past. I introduced a [ticketing system](https://trello.com/b/w2M2GfG9/mastermind-project) so I could break the project down into small user stories and then prioritize. By setting up my tickets daily I was able to continuously deliver great work.

<p>&nbsp;</p>
This full-stack version of Mastermind builds upon the prototype but is vastly different with many new features.

- Modularized components
- Design Patterns for state management
- Colored Pegs chosen via on-click functionality
- A more minimalistic feedback system
- Top 20 high scores get saved to the database
- A timer now introduces a new mechanic to prompt quick thinking
- Multiple difficulty levels that introduce new pegs
- Containerized with Docker and deployed on Azure


![Version2](screenshots/V2Logic.png)

<p>&nbsp;</p>

# Future Updates
-  Automated testing suite
-  Continuous integration with CircleCI
-  Online mulitplayer using websockets
-  User login page
-  User authentication with firebase
-  End Goal: Refactor to React-Native and launch application on iOS and Android

<p>&nbsp;</p>

# My Other Games

  - [TETRIS](https://github.com/coffeesnakes/tetris_JS "Tetris")
  - [TICTACTOE](https://github.com/coffeesnakes/tictactoeJS "Tic-Tac-Toe")
  - [SNAKE](https://github.com/coffeesnakes/snekGame "Snake")


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/coffeesnakes/