var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
setTimeout(() => {
    audio.play()
}, 1000);