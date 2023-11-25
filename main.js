const folder = './src/skills-logos';
import fs from 'fs';
//get the skills div
const element = document.getElementById("skills");

fs.readdirSync(folder).forEach(file => {
    let imgElement = document.createElement("img");
        imgElement.src = file
        element.appendChild(imgElement)
  });
