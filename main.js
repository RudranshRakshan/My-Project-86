var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
        backgroudImg = img;
        backgroudImg.scaleToWidth(800);
        backgroudImg.scaleToHeight(600);
        backgroudImg.set({
            top: 0,
            left: 0
        })
        canvas.add(backgroudImg)
    })
	
}
new_image();
function playSound(){
    document.getElementById("myAudio").play();
}
