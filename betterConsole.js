console.rainbow = function(text) {
    console.log(`%c${text}`,"background: linear-gradient(to bottom, #ff00ff 21%,#0026ff 33%,#10ff00 49%,#fff200 65%,#ff9400 85%,#ff0000 100%);color:black;font-size:200%;font-family: Comic Sans MS;");
}
console.comicSans = function(text) {
    console.log(`%c${text}`,"font-family: Comic Sans MS;font-size:200%;");
}
console.red = function(text) {
    console.log(`%c${text}`,"color:red;font-family:Arial, Helvetica, sans-serif;outline: black;font-size:200%;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000; ");
}
console.bigWarn = function(text) {
    console.log(`%c ⚠ 🚨🚨🚨 🚓🚑🚒❗‼‼‼ ${text} ‼‼‼❗🚓🚑🚒 🚨🚨🚨 ⚠`,"color:red;font-family:Arial, Helvetica, sans-serif;outline: black;font-size:200%;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000; ");
}
console.smallWarn = function(text) {
    console.log(`%c ⚠ 🚨 ❗ ${text} ❗ 🚨 ⚠`,"color:red;font-family:Arial, Helvetica, sans-serif;outline: black;font-size:100%;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000; ");
}
console.tiny = function(text) {
    console.log(`%c${text}`,"font-size:50%;");
}
console.color = function(text,color) {
    console.log(`%c${text}`,`color:${color};`);
}