Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"captured_image" src="'+data_uri+'"/>';
    });
}  
console.log('ml5 version:',ml5.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/mJbuaDVe4/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelo cargado;')
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "La primer prediccion es "+prediccion;
    speak_data2 = "la segunda prediccion es "+prediccion2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    }
}