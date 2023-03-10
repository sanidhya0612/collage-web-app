var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");


function take_snapshot()
{
    console.log(img_id);

    Webcam.snap (function(data_uri) {
   
    if(img_id=="selfie1"){
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }

    if(img_id=="selfie2"){
    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }

    if(img_id=="selfie3"){
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }

    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}