const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

//output container
const containerDiv = document.getElementById("output-container");

// Default camera permission is on
const constraints = {
    video: true,
};


// Checks if user lets camera permissions on
var successCallback = function() {
  timer();
};

var errorCallback = function() {
  if (error.name == 'NotAllowedError') {
    console.log("user denied access to camera");
  }
};


// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
    player.srcObject = stream;

    // Checks if users approve video camera 
    successCallback();
    errorCallback();
});






// Picture taking function
picture = () => {

  console.log("new canvas");
  var newCanvas = document.createElement("CANVAS");
  var ctx = newCanvas.getContext("2d");

  // Draws the video frame to the canvas
  console.log("photo taken");
  ctx.drawImage(player, 0, 0, canvas.width, canvas.height);
  document.body.appendChild(newCanvas);

  // Reverse output - newest is first upon output
  // newCanvas.prepend(newFirstChild);

  // puts picture into the output container
  containerDiv.appendChild(newCanvas);
}


// 1 second timer to take pics
timer = () => {
  setInterval(() => picture(), 1000);   
}