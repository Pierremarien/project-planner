const cards=document.querySelectorAll('.cards');

const all=document.querySelector('.btn--all').addEventListener('click', everything);
const done=document.querySelector('.btn--done').addEventListener('click', onlyDone);
const toDo=document.querySelector('.btn--todo').addEventListener('click', onlyToDo);
const WIP=document.querySelector('.btn--wip').addEventListener('click', onlyWIP);

const cardsToDo=document.querySelector('.todo'); //ne pas utiliser de queryselectorall, ça fout la mert'
const cardsWIP=document.querySelector('.wip');
const cardsDone=document.querySelector('.done');

console.log(cardsToDo);
console.log(cardsWIP);
console.log(cardsDone);
// works

function everything () {
    // alert('this is bullshit'); pêtage de plomb tout va bien
    cardsToDo.style.display='block';
    cardsWIP.style.display='block';
    cardsDone.style.display='block';
}

function onlyToDo () {
    // alert('this is bullshit');
    cardsToDo.style.display='block';
    cardsWIP.style.display='none';
    cardsDone.style.display='none';
}

function onlyWIP () {
    // alert('this is bullshit');
    cardsToDo.style.display='none';
    cardsWIP.style.display='block';
    cardsDone.style.display='none';
}

function onlyDone () {
    // alert('this is bullshit');
    cardsToDo.style.display='none';
    cardsWIP.style.display='none';
    cardsDone.style.display='block';
}



// WIP.addEventListener('click', () => {
//         cardsToDo.style.display='none';
//         cardsWIP.style.display='block';
//         cardsDone.style.display='none';
// });

// done.addEventListener('click', () => {
//         cardsToDo.style.display='none';
//         cardsWIP.style.display='none';
//         cardsDone.style.display='block';
// });

// toDo.addEventListener('click', () => {
//         cardsToDo.style.display='none';
//         cardsWIP.style.display='none';
//         cardsDone.style.display='none';
// })

// all.addEventListener('click', () => {
//         cardsToDo.style.display='block';
//         cardsWIP.style.display='block';
//         cardsDone.style.display='block';
// });
