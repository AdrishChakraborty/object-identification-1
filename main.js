img="" ;
status="" ;

function preload () {
    img=loadImage("download(2).jfif");
}

function setup() {
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector("cocossd",modelLoaded());
  document.getElementById("status").innerHTML="Status: Objects Detected";
}
function modelLoaded() {
    console.log=modelLoaded();
    status="true";
    objectDetector.detect(image,gotReaults);
}
function gotResults (error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw () {
   image=img(0,0,640,420);
   
} 

function preload () {
    img=loadImage("download.jfif");
}

function setup() {
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector("cocossd",modelLoaded());
  document.getElementById("status").innerHTML="Status: Objects Detected";
}
function modelLoaded() {
    console.log=modelLoaded();
    status="true";
    objectDetector.detect(image,gotReaults);
}
function gotResults (error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw () {
   image=img(0,0,640,420);
   
} 
