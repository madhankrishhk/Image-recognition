Webcam.set({
    width:350,
    height:300,
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('mi5 version:',ml5.version);
classifier=ml5.imageClasifier('https://teachablemachine.withgoogle.com/models/Yxh1f3EeW/model.json',modelLoaded);
