import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'

import './main.css'

console.log("Loaded");
document.addEventListener('DOMContentLoaded', init);


function colorPic(){
    let color = document.getElementById('color-pic').value;
    document.getElementById('focim').style.backgroundColor= color;

}

let kepek = [0, 0, 0, 0, 0]

function kepKatt(e){
    switch(e.target.id) {
        case "bokor-kep":
            kepek[0]++;
            e.target.title = kepek[0];
            break;
        case "bogyos-kep":
            kepek[1]++;
            e.target.title = kepek[1];
        break;
        case "parlag-kep":
            kepek[2]++;
            e.target.title = kepek[2];
            break;
        case "szaritott-kep":
            kepek[3]++;
            e.target.title = kepek[3];
            break;
        case "orlemeny-kep":
            kepek[4]++;
            e.target.title = kepek[4];
            break;


    }
}

function init() {
    let kepek = document.getElementsByClassName('kattKep');
    for (let i = 0; i < kepek.length; i++) {
        kepek[i].addEventListener('click', kepKatt)
    }
    document.addEventListener('change', colorPic)
}