const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

const constraints = {
    video: true,
};

// captureButton.addEventListener('click', () => {
//     // Draw the video frame to the canvas.
//     context.drawImage(player, 0, 0, canvas.width, canvas.height);
// });


// function that takes pictures and prints to new canvas

picture = () => {
    // Make new canvas
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    // Draws the video frame to the canvas
    ctx.drawImage(player, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(x);

    console.log("new canvas");
    // context.drawImage(player, 0, 0, canvas.width, canvas.height);
    // console.log("new image");
}




// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
    player.srcObject = stream;
});

// 1 second timer to take pics
timer = () => {
    console.log("new picture taken");
    setInterval(() => picture(), 1000);   
}

timer();