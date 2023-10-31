var bayerThresholdMap = [
    [  15, 135,  45, 165 ],
    [ 195,  75, 225, 105 ],
    [  60, 180,  30, 150 ],
    [ 240, 120, 210,  90 ]
  ];
  
  var lumR = [];
  var lumG = [];
  var lumB = [];
  for (var i=0; i<256; i++) {
    lumR[i] = i*0.299;
    lumG[i] = i*0.587;
    lumB[i] = i*0.114;
  }

function gbCamera(imageData) {

    var imageDataLength = imageData.data.length;

    for (var i = 0; i <= imageDataLength; i += 4) {
        imageData.data[i] = Math.floor(lumR[imageData.data[i]] + lumG[imageData.data[i + 1]] + lumB[imageData.data[i + 2]]);
    }

    var w = imageData.width;

    for (var currentPixel = 0; currentPixel <= imageDataLength; currentPixel += 4) {
        var x = currentPixel / 4 % w;
        var y = Math.floor(currentPixel / 4 / w);
        var map = Math.floor( ((imageData.data[currentPixel] + imageData.data[currentPixel+1]  + imageData.data[currentPixel+2] )/3  + bayerThresholdMap[x % 4][y % 4]) / 2);
        
        if(map < 64){
            imageData.data[currentPixel] = 64
            imageData.data[currentPixel + 1] = 80
            imageData.data[currentPixel + 2] = 16
        }
        else if(map < 128){
            imageData.data[currentPixel] = 112
            imageData.data[currentPixel + 1] = 128
            imageData.data[currentPixel + 2] = 40  
        }
        else if(map < 192){
            imageData.data[currentPixel] = 160
            imageData.data[currentPixel + 1] = 168
            imageData.data[currentPixel + 2] = 64   
        }
        else{
            imageData.data[currentPixel] = 208
            imageData.data[currentPixel + 1] = 208
            imageData.data[currentPixel + 2] = 88
        }
    }

    return imageData;
}

var canvas = document.getElementById("display");
var ctx = canvas.getContext('2d');
var img = new Image();
var size = 128

document.querySelector('input[type="file"]').addEventListener('change', function() {
    ctx.clearRect(0, 0, size, size);
    if (this.files && this.files[0]) {
        img.width = size
        img.height = size
        img.src = URL.createObjectURL(this.files[0]);;
        img.onload = function () {
            ditherCall(this)
        };
    }
});


function ditherCall(){
    ctx.drawImage(img, 0, 0, size, size);
    var imageData = ctx.getImageData(0, 0, size, size);

    gbCamera(imageData)

    ctx.putImageData(imageData, 0, 0);
};