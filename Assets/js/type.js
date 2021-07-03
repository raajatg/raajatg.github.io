

var app = document.getElementById('app');

/*
==============================================
Home Page Text
==============================================
*/

let emoji = "👋",
    codePoint = emoji.codePointAt();

let handwaveFinal = String.fromCodePoint(codePoint);


const homeType = new Typewriter(app);
    homeType.pauseFor(2000)
    .typeString(`Oh, hello there${handwaveFinal}!`)
    .pauseFor(2000)
    .deleteAll()
    .typeString("<strong>I'm Raajat Gupta.</strong>")
    .start();


/*
==============================================
About Me Page Text
==============================================
*/

var introduction = document.getElementById('introduction');

const meType = new Typewriter(introduction);
    meType.pauseFor(1000)
    .typeString("I'm Raajat Gupta")
    .start();

var introductionTwo = document.getElementById('introductionTwo');

    const meTypeTwo = new Typewriter(introductionTwo);
        meTypeTwo.pauseFor(4000)
        .typeString("Let's define the <strong>future of human relations. 👫</strong>")
        .pauseFor(1500)
        .deleteChars(14)
        .typeString("<strong>-AI bonds. 🤖</strong>")
        .pauseFor(1500)
        .deleteChars(18)
        .typeString("<strong>connection. 💛</strong>")
        .start();