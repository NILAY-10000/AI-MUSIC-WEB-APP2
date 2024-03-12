var song1="";
var song2="";
var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;

function preload(){
    song1=loadSound("blinding_lights.mp3");
    song2=loadSound("boulevard_of_broken_dreams.mp3");
}
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(550,150);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,550,500);
}
function modelLoaded(){
    console.log("The model has loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist x = "+leftWristX+" and Left wrist y = "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+rightWristX+" and Right wrist y = "+rightWristY);
    }
}