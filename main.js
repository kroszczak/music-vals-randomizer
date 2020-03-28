
let data = [
    [
        ['C', 'D', 'E', 'F', 'G', 'A', "B"],
        [' Dur', ' Mol']
    ],
    [
        ['C', 'D', 'E', 'F', 'G', 'A', "B"],
        [' Jońska', 
        ' Dorycka', 
        ' Lidyjska', 
        ' Miksolidyjska', 
        ' Lokrycka', 
        ' Frygijska', 
        ' Eolska'] 
    ]
];

function getContent(){

    let output = '';
    data[mode].forEach((item) => output +=item[Math.floor(Math.random() * item.length)]);
    return output;
}

let mode;
let speed = document.querySelector('input[type = "range"]').value;
let Interval;



let display = () => document.querySelector('#display').innerHTML = getContent();

document.querySelector('input[value = "Chords"]').addEventListener('click', () => {
    mode = 0; clearInterval(Interval); Interval = setInterval(display, 800000/(speed/5));
});
document.querySelector('input[value = "Scales"]').addEventListener('click', () => {
    mode = 1; clearInterval(Interval); Interval = setInterval(display, 800000/(speed/5));
});
document.querySelector('input[type = "range"]').addEventListener('click', () => {
    speed = document.querySelector('input[type = "range"]').value;
    clearInterval(Interval); Interval = setInterval(display, 800000/(speed/5));
});