const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    message: "What is your location?",
    name: "location",
    choices: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    type: "input",
    message: "What's your story?",
    name: "bio",
  },
  {
    type: "input",
    message: "What's your linkedin?",
    name: "linkedin",
  },
  {
    type: "input",
    message: "What's your github?",
    name: "github",
  },
]);

const questions = `
<div class="questions">
<h2>${inquirer.prompt}</h2>
<p class="name">${inquirer.prompt.name}

</div>`
console.log(inquirer.prompt.name);

// const music = {
//   title: "The Less I Know The Better",
//   artist: "Tame Impala",
//   album: "Currents"
// };

// // write code between the <div> tags to output your objects data
// const songSnippet = `;
//   <div class="song">
//      <h2>${music.title}</h2>
//      <p class="artist">${music.artist}</p>
//      <p class="album">${music.album}</p>
//   </div>
// `;
// const element = document.getElementById("music");
// element.innerHTML = songSnippet;
