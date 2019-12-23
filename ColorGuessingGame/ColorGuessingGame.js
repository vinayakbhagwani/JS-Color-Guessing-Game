var numSquares = 6
var color = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var msgDisplay = document.querySelector("#msgDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetButton");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    msgDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
    numSquares = 3;
    color = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
        if(color[i]) {
            squares[i].style.backgroundColor = color[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    msgDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
    numSquares = 6
    color = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }
});

resetBtn.addEventListener("click", function() {
    
    color = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    msgDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    console.log(pickedColor);
    
    /* ------------------------------------------ */

    for(var i=0; i<squares.length; i++) {
        
        squares[i].style.backgroundColor = color[i];

    }
    /* ------------------------------------------ */


});



for(var i=0; i<squares.length; i++) {

    squares[i].style.backgroundColor = color[i];

    squares[i].addEventListener("click" , function() {
        
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor == pickedColor) {
            msgDisplay.textContent = "Correct!";
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            msgDisplay.textContent = "Try Again!";
        } 
    
    });

}




function changeColor(color) {

    for(var i=0;i<squares.length;i++) {

        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    var randomColor = Math.floor(Math.random() * color.length);
    return color[randomColor];
}

function generateRandomColor(num) {
    var arr = [];

    for(var i=0; i<num; i++) {
        arr.push(randomColor());
    }

    return arr;

}

function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";

}