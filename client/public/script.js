const sectionIDs = ["welcome", "about", "services", "contact"];
const sectionH2texts = ["Welcome to our site", "About us", "Our Services", "Contact"];

const sectionElement = function (id){
  return `<section id="${id}"></section>`;
}

const loadEvent = function() {
  const rootE = document.getElementById("root");
  sectionIDs.forEach(function (e){
    rootE.insertAdjacentHTML("beforeend", sectionElement(e));
  });
}

window.addEventListener("load", loadEvent);


function main(){
  addClassToClassList();
  addElementToSections();
}

window.addEventListener("load", main);

///////////////////////////////////////////////////////

function addClassToClassList(){
  const sections = document.querySelectorAll('#root section');
  sections.forEach(function(event){
    event.classList.add('co');
  });
}

///////////////////////////////////////////////////////

/* function addElementToSections() {
  const sections = document.querySelectorAll('#root section');
  sections.forEach(function(section, index){
    const h2Node = document.createElement('h2');
    const h2TextNode = document.createTextNode(sectionH2texts[index]);
    h2Node.appendChild(h2TextNode);
  
    section.appendChild(h2Node);
  });
} */


/* function addElementToSections() {
  const sections = document.querySelectorAll("#root section");
  sections.forEach(function (e,i){
    e.classList.add("co");

    e.insertAdjacentHTML("beforeend", `<h2>${sectionH2texts[i]}</h2>`)
  });
} */

function addElementToSections() {
  const sections = document.querySelectorAll('#root section');
  sections.forEach(function(section, index){
    const h2Node = document.createElement('h2');
    const h2TextNode = document.createTextNode(sectionH2texts[index]);
    h2Node.appendChild(h2TextNode);

    const sectionId = sectionIDs[index];
    document.querySelector(`#${sectionId}`).appendChild(h2Node);
  });
}

///////////////////////////////////////////////////////////

