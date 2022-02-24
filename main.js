Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML = "<img src='"+data_uri+"' id='captured_image'>"
    });
}

console.log('Ml5 version '+ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z0D55L-b-/model.json",modelLoaded);

function modelLoaded() {
    console.log('model Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("falily_member_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}