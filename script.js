const player = document.getElementById('player');
const containerDiv = document.getElementById("output-container");

// Default camera permission is on
const constraints = {
    video: true,
};

// Checks if user lets camera permissions on
var successCallback = function() {
  console.log("User accepted camera permission");
  timer();
};

// Attach the video stream to the video element and autoplay.
const userMediaPromise = navigator.mediaDevices.getUserMedia(constraints); 

const cameraSuccess = function(stream) {

  player.srcObject = stream;

  // Checks if users approve video camera 
  successCallback();
}

// run this function when promise succeeds!

userMediaPromise.then(cameraSuccess).catch(document.write("<h1>User denied access to webcam!</h1>"));

const pictureArray = [];

// Picture taking function
const picture = () => {

  console.log("new canvas");
  const newCanvas = document.createElement("CANVAS");
  const ctx = newCanvas.getContext("2d");

  // 1. Determine camera ratio
  const playerHeight = player.videoHeight * 0.3;
  const playerWidth = player.videoWidth * 0.3;

  // 2. Sets the actual video stream height to match the newCanvas ratio
  player.height = playerHeight;
  player.width = playerWidth;
  
  // 3. Set newCanvas ratio to same as camera
  newCanvas.height = playerHeight;
  newCanvas.width = playerWidth;

  // Draws the video frame to the canvas
  console.log("Photo drawn to newCanvas");
  ctx.drawImage(player, 0, 0, newCanvas.width, newCanvas.height);
  
  // Adds the newCanvas to the page
  console.log(pictureArray);

  //1. Remove all children from parent except for video 
  for(let i = 0; i < pictureArray.length; i++){
    containerDiv.removeChild(pictureArray[i]);
  }

  // 2. Append newest picture
  // Use unshift to add the newest newCanvas to the front of pictureArray
  pictureArray.unshift(newCanvas);
  containerDiv.appendChild(pictureArray[0]);

  // 3. Append all previous children that were removed
  for(let i = 1; i < pictureArray.length; i++){
    containerDiv.appendChild(pictureArray[i]);
  }
}

// 1 second timer to take pics
const timer = () => {
  setInterval(picture,1000);   
}