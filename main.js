song = "";
leftWristX = 0;
leftWristY = 0;
leftWristScore = 0;
rightWristX = 0;
rightWristY = 0;
rightWristScore = 0;
song_1="";
song1_status="";
song_2="";
song2_status="";

function preload(){
song_1=loadSound("music.mp3")
song_2=loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded() {
    console.log('PoseNet Is Initalized');    
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results)
            leftWristScore = results[0] .pose.keypoints[9].score;
            rightWristScore = results[0] .pose.keypoints[10].score;  
            leftWristX = results[0] .pose. leftWrist.x;
            leftWristY = results[0] .pose. leftWrist.y;
            console.log("leftWrist = " + leftWristX +"leftWristY = "+  leftWristY);
     
            rightWristX = results[0] .pose. rightWrist.x;
            rightWristY = results[0] .pose. rightWrist.y;
            console.log("rightWrist = " + rightWristX +"rightWristY = "+  rightWristY);
        }
    }
    function draw(){
    image(video,0 ,0 ,600 ,500);
    song1_status = song_1.isPlaying();
     song2_status = song_2.isPlaying();
     fill("red");
     stroke("blue");
     if(rightWristScore>0.2){
        circle(rightWristX,rightWristY,20);
song_2.stop();
if(song1_status==false){
    song_1.play();
    document.getElementById("song").innerHTML="music.mp3";
}
     }

     if(leftWristScore>0.2){
        circle(leftWristX,leftWristY,20);
song_1.stop();
if(song2_status==false){
    song_2.play();
    document.getElementById("song").innerHTML="music2.mp3";
}
     }
    }

    function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);

        
        
    }