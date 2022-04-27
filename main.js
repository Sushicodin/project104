Webcam.set({
    width:345,
    height:345,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="the_captured_image" src="'+data_uri+'">';
    })
}

console.log("the ml5 version is-",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QIVK4qixm/",modelLoaded);