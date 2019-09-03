function play(sound){
    const audio = document.getElementById("audio");
          audio.setAttribute('src', sound);
          audio.play();
 }

//  function playNote(n){
//      const note = document.querySelector(`audio[data-key="${n.keyCode}"]`);
//            note.play();
 
// }


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
    const key = document.querySelector('.key[data-key="${e.keyCode}"]');
    if (!audio) return;
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing')
});
