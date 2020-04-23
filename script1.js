var video = document.querySelector("video");

if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video:true
    })
    .then(function(stream){
        video.srcObject = stream;
    })
    .catch(function(error){
        console.log("Error");
    })
}





// Timer function to take pictures every 1 second

function timer(){
    // eventually replace the photo taking function;
    setInterval(() => console.log('photo taken'), 1000);   
}

timer();