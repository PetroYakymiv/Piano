function play(sound){
    const audio = document.getElementById("audio");
          audio.setAttribute('src', sound);
          audio.play();
 }

 document.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
	if (e.keyCode === 65) {
		alert("The 'a' key is pressed.");
	}
}
 
