function play(sound){
    const audio = document.getElementById("audio");
          audio.setAttribute('src', sound);
          audio.play();
 }

 function playNote(n){
    const note = document.querySelector(`audio[data-key="${n.keyCode}"]`);
          note.play();
 
}
window.addEventListener('keydown', playNote);
