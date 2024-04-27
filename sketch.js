let searchPath = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
let searchJSON;
let img;
let searchObject;
let searchObjectPath = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
let inputBox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  imageMode(CENTER)
  let button = createButton('show artwork');
  button.position((windowWidth/2 - button.width/2), 50);
  button.mousePressed(searchTerm);
  inputBox = createInput(); 
  inputBox.position((windowWidth/2 - inputBox.width/2), (25));
}

function searchTerm() {
  let search = inputBox.value();
  searchJSON = loadJSON(searchPath + search, searchContent);
}

function searchContent() {
  if (searchJSON.total > 0) {
    searchObject = random(searchJSON.objectIDs); 
    objectJSON = loadJSON(searchObjectPath + searchObject, showContent);
  } else {
    console.log("No results were found at the met for: " + search);
  }
}

function showContent() {
  if (objectJSON.primaryImage == "") {
    searchContent(); 
  } else {
    img = loadImage(objectJSON.primaryImage, drawImage);
  }
}

function drawImage() {
  background(220);
  
  let scaledWidth, scaledHeight;
  if (img.width >= img.height) {
    let aspect = img.width / img.height;
    scaledWidth = windowWidth / 2;
    scaledHeight = scaledWidth / aspect;
  } else {
    let aspect = img.height / img.width;
    scaledHeight = windowHeight / 2;
    scaledWidth = scaledHeight / aspect;
  }
  
  image(img, windowWidth/2, windowHeight/2, scaledWidth, scaledHeight);
}
