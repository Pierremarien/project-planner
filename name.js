const name=document.querySelector('.btn--name').addEventListener('click', sortByName);

const titleCards=document.querySelectorAll('.title');

console.log(titleCards);

function sortByName() {
    alert('Im sorting by name');
    let titleSort=[];
    for (let i=0; i<titleCards.length; i++) {
        titleSort.push(titleCards[i].textContent)
    }
    titleSort=titleSort.sort();
    for (let i=0; i<titleCards.length; i++) {
        titleCards[i].textContent=titleSort[i];
    }
}