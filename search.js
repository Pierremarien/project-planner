//qu'est ce que je dois faire
//sur base de ce qui est écrit dans la .searchInput
//afficher la carte
//avec le titre correspondant dans la barre de recherche

function search() { //je crée la fonction
    const input=document.querySelector('.searchInput').value //je sélection la valeur de la barre de recherche
    const sections=['tasksToDo', 'tasksWip', 'tasksDone']; //je lui dis de prendre toutes les cartes
    const searchTitle=document.querySelectorAll('.title'); //je lui dis de prendre tous les titres qu'il trouve
    input.addEventListener('keyup', () => {
        for (const i=0; searchTitle.legnth>i; i++) {
            if (searchTitle[i].innerHTML.toLowerCase.includes(input())) {
                sections.style.display='block';
            } else {
                sections.style.display='none';
            }
        }
    })
}



// function searching() {
//     const input=document.querySelector('.searchInput').value;
//     input=input.toLowerCase();
//     const searchTitle=document.querySelectorAll('.title');

//     for (i=0; i < searchTitle.length; i++) {
//         if (!searchTitle[i].innerHTML.toLowerCase().includes(input())) {
//             searchTitle[i].classList.remove('is-hidden');
//         } else {
//             searchTitle[i].classList.add('is-hidden');
//         }
//     }
// }  trouvé sur le net

// const searchInput=document.querySelector('.searchInput');
// const searchItem=document.querySelectorAll('.title');
// searchInput.addEventListener('keyup', (event) => {
//     const { value } = event.target;
//     const search=value.toLowerCase();
//     for (const element of searchItem) {
//         let elem=element.textContent.toLowerCase();
//         if (elem.includes(search)) {
//             element.style.display='block';
//         } else {
//             element.style.display='none';
//         }
//     }
// }) une autre version

//aucune ne marche, tentative d'autre chose au-dessus ? ¯\_(ツ)_/¯ idfk