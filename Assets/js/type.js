

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
    .typeString("<h1 style='font-size:3rem;'>I'm Raajat Gupta.</h1>")
    .pauseFor(500)
    .typeString("I use research as a tool for creating connections. 🏚")
    .pauseFor(1000)
    .deleteChars(3)
    .typeString(" 🏘")
    .start();

var introductionTwo = document.getElementById('introductionTwo');

    const meTypeTwo = new Typewriter(introductionTwo);
        meTypeTwo.pauseFor(14500)
        .typeString("Let's define the <strong>future of human relationships. 👫</strong>")
        .pauseFor(1500)
        .deleteChars(18)
        .typeString("<strong>-AI bonds. 🤖</strong>")
        .pauseFor(1500)
        .deleteChars(18)
        .typeString("<strong>connection. 💛</strong>")
        .start();