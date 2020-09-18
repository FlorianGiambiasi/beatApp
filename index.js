var bg = document.getElementById("particles-js");

document.addEventListener("keydown", function(event){
    bg.style.backgroundColor = getRandomColor();
    //var key = event.key;
    //playMusic(key);
    console.log(event);
});



function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random()*letters.length)]
    }
    return color;
}