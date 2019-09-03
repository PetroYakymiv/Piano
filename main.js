function play(sound){
    const audio = document.getElementById("audio");
          audio.setAttribute('src', sound);
          audio.play();
 }

//  function playNote(n){
//      const note = document.querySelector(`audio[data-key="${n.keyCode}"]`);
//            note.play();
 
// }


// function playNote(n){
//     const note = document.querySelector(`audio[data-key="${n.keyCode}"]`);
//           key = document.querySelector(`.key[data-key="${n.keyCode}"]`);

//     if(!key) return;

//     key.classList.add('playing'); 
//     audio.currentTime = 0;
//     audio.play(); 
// }
// window.addEventListener('keydown', playNote);
function audioPlayerByKey(event) {
    playNote(notes.filter(item => item.keyCode === event.keyCode)[0])
};

window.addEventListener("load", audioPlayer);

window.addEventListener("keypress", audioPlayerByKey);
