var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

setupAudio('playButton1', 'audio1');
setupAudio('playButton2', 'audio2');
setupAudio('playButton3', 'audio3');
setupAudio('playButton4', 'audio4');
setupAudio('playButton5', 'audio5');
setupAudio('playButton6', 'audio6');