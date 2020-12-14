

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
    homeType.pauseFor(3000)
    .typeString(`Oh, hello there${handwaveFinal}!`)
    .pauseFor(2000)
    .deleteAll()
    .typeString("I'm Raajat Gupta.")
    .start();


/*
==============================================
About Me Page Text
==============================================
*/

var introduction = document.getElementById('introduction');

const meType = new Typewriter(introduction);
    meType.pauseFor(1000)
    .typeString("I'm Raajat Gupta.")
    .typeString('<br/>')
    .pauseFor(500)
    .typeString("I use design as a tool🔧 for building community.")
    .typeString(" 🏚")
    .pauseFor(1000)
    .deleteChars(3)
    .typeString(" 🏘")
    .start();


