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

// let timerId = setInterval(() => console.log('tick'), 1000);

function timerId(){
    setInterval(() => console.log('tick'), 1000);   
}

timerId();