mustachX=150; mustachY=190;
     
function preload() { 
    mustach_face = loadImage('https://i.postimg.cc/CxpQxMVj/download-removebg-preview-2.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intitialized');
}



function take_snapshot() {
    save('myFilterImage.png');
}



    function gotPoses(results)
    {
        if(results.lenght > 0)
        {
            console.log(results);
            noseX = results [0].pose.mustach.x;
            noseY = results [0].pose.mustach.y;
            console.log("mustach x = " + mustachX);
            console.log("mustach y = " + mustachY);
        }
    }

   

    function draw() {
        image(video, 0, 0, 300, 300);
        image(mustach_face, mustachX, mustachY, 30, 30);
    }