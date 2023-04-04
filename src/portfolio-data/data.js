import foodFinder from "../images/Food-Finder-Mock-Up.png";
import overBooked from "../images/OverBooked.jpg";
import RALLY from "../images/Rally-about.jpg";
import weatherChecker from "../images/Weather-Checker.png";
import passwordGen from "../images/password-gen-mock.up.png";
import quizGame from "../images/quiz-game-mockup.png";

export default [
  {
    id: 1,
    title: "RALLY",
    github: "https://github.com/luksvrd/Rally",
    deployed: "https://dulcet-cascaron-584908.netlify.app/",
    skills:
      "React, Apollo, GraphQL, MongoDB, Mongoose, Express, Node, Heroku, Netlify, TailwindCSS",
    src: RALLY,
  },
  {
    id: 2,
    title: "Javascript Quiz Game",
    github: "https://github.com/eabaynes/practice-quiz",
    deployed: "https://eabaynes.github.io/practice-quiz/",
    skills: "JS, HTML, CSS",
    src: quizGame,
  },
  {
    id: 3,
    title: "Food Finder",
    github: "https://github.com/eabaynes/Food-Finder",
    deployed:
      "https://63857389528963204b4dc037--startling-biscuit-4e7633.netlify.app/",
    skills: "JS, HTML, CSS, API",
    src: foodFinder,
  },
  {
    id: 4,
    title: "Weather Checker",
    github: "https://github.com/eabaynes/Weather-checker",
    deployed: "https://eabaynes.github.io/Weather-checker/",
    skills: "JS, HTML, CSS, API",
    src: weatherChecker,
  },
  {
    id: 5,
    title: "Password Generator",
    github: "https://github.com/eabaynes/Password-generator",
    deployed: "https://eabaynes.github.io/Password-generator/",
    skills: "JS, HTML, CSS,",
    src: passwordGen,
  },
  {
    id: 6,
    title: "OverBooked",
    github: "https://github.com/luksvrd/Social-Book-Club",
    deployed: "https://overbookedp2.herokuapp.com/",
    skills: "JS, HTML, CSS, API, Heroku, MySQL, Sequelize, Express, Handlebars",
    src: overBooked,
  },
];
