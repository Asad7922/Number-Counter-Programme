// setting-function
function settingop() {
    var setlayer = document.getElementById("setting-layer");
    setlayer.style.height = "30vh"
    var closelayer = document.getElementById("info-layer");
    closelayer.style.display = "none"
}
function settingcl() {
    var setlayer = document.getElementById("setting-layer");
    setlayer.style.height = "0"
    var closelayer = document.getElementById("info-layer");
    closelayer.style.display = ""
}
// information-function
function infoop() {
    var closelayer = document.getElementById("info-layer");
    closelayer.style.height = "30vh"
    var setlayer = document.getElementById("setting-layer");
    setlayer.style.display = "none"
}
function infocl() {
    var closelayer = document.getElementById("info-layer");
    closelayer.style.height = "0"
    var setlayer = document.getElementById("setting-layer");
    setlayer.style.display = ""
}






// counter-function
const incrementbutton = document.getElementById("btn-1");
const decrementbutton = document.getElementById("btn-2");
const countspan = document.getElementById("counter");

let count = 0

incrementbutton.addEventListener('click', () => {
    count++;
    updatacount();
});
decrementbutton.addEventListener('click', () => {
    count--;
    updatacount();
});
function updatacount() {
    countspan.textContent = count;
};
// refresh-function

function refresh() {
     count = 0;
    countspan.textContent = count;
}