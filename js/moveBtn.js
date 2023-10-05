/* // To Do ALLER DANS TO DO
    //1> recurerer bouton par la class
    //2> recuperer le parent du bouton (tasks)
const boutonToDo = document.querySelector('.btnToDo');//recup .btnToDo
const boutonWip = document.querySelector('.btnWip');// recup .btnWip
const boutonDone = document.querySelector('btnDone');// recup .btnDone

const tachesTodo = document.querySelector('.tasksTodo'); // Recup parent du btn: "To Do"
const tachesWip = document.querySelector('.tasksWip'); // Recup parent du btn: "Work In Progress"
const tachesDone = document.querySelector('tasksDone'); //Recup parentdu btn: "Done"

boutonToDo.addEventListener('click', deplacerTache); //gestion d'évent via bouton

function deplacerTache() { // fonction de déplacer la tâche
    const laTache =
        tachesWip.querySelector('.tasks');// envoyer une tâche dans "To Do"
        
    if (laTache) {
    tachesTodo.appendChild(laTache);// déplace la tâche de "To Do" dans "Work In Progress" avec appendChild
    }
}
// function deplacerTache() { // fonction de déplacer la tâche
//     const laTache = tachesWip.querySelector('.tasks');// envoyer une tâche dans "To Do"
//     if (laTache) {
//     tachesTodo.appendChild(laTache);// déplace la tâche de "To Do" dans "Work In Progress" avec appendChild
//     }
// }

// Wip

// Done */

function moveTasks() {
    const tasksSection = document.querySelector('.cards'); 
    tasksSection.addEventListener('click', function (e) {
        if (e.target.classList.contains('btnTodo')) {
            const parent = e.target.closest('.tasks');
            const section = document.querySelector('.tasksToDo');
            section.appendChild(parent);
        }

        if (e.target.classList.contains('btnWip')) {
            const parent = e.target.closest('.tasks');
            const section = document.querySelector('.tasksWip');
            section.appendChild(parent);
            
        }

        if (e.target.classList.contains('btnDone')) {
            const parent = e.target.closest('.tasks');
            const section = document.querySelector('.tasksDone');
            section.appendChild(parent);
        }

    });

}
