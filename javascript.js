var submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    askMagic8Ball();
})

function askMagic8Ball() {
    image1 = document.getElementsByClassName("image1")
    var answers = ["of course", "never", "yes", "no", "definately not", "for sure", "in your dreams", "absolutely not", "withot a doubt", "totally", "better luck next time", "not even a little bit", "NOOOO", "what a ridiculous question", "take a lap", "maybe", "if you work really hard", "it will take years of dedication", "probably", "a thousand times yes"];
    var randomNum = Math.floor(Math.random() * 20);
    var response = answers[randomNum];
    var print = document.getElementById('answers');
    print.textContent = response;
}




