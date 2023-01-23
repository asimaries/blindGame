const speech = window.speechSynthesis;

let voices;
speech.onvoiceschanged = function () {
    voices = speech.getVoices();
    console.log(voices)
}
const editor = document.getElementById("editorCode");
window.addEventListener("keypress", function (e) {
    console.log(e.key, e.code)
    if (editor.classList.contains("ace_focus")) {
        let val = e.code.startsWith("Key") ? e.key : e.code;
        if (e.shiftKey == true)
            val = e.key;
        else if (e.shiftKey == true && e.code.startsWith('Digit'))
            val = e.code;
        const speaktext = new SpeechSynthesisUtterance(val);
        speaktext.voice = voices[4];
        speaktext.rate = 1.8;
        speech.speak(speaktext);
    }
})