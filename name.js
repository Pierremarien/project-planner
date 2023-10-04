const nameTitle=document.querySelector('.btn--name').addEventListener('click', sortByName);
    // alert('Im sorting by name');

function sortByName() {
    
    const sections = ['tasksToDo', 'tasksWip', 'tasksDone'];
    // let title=document.querySelector('.title');

    sections.forEach((section) => {
        let elem=document.querySelector(`.${section}`);
        let tasks=Array.from(elem.querySelectorAll('.tasks'));
        tasks.sort((a,b) => {
            const aTitle=a.querySelector('.title').textContent.toLowerCase();
            const bTitle=b.querySelector('.title').textContent.toLowerCase();
            
            console.log(aTitle);
            console.log(bTitle);
            console.log(elem);
            console.log(tasks);

            return aTitle.localeCompare(bTitle);
        })
        tasks.forEach((task) => {
            elem.appendChild(task);
        })
        
    })
    //     tasks.sort((a,b) => {
    //         let titleA= new title(a.querySelector('.title').textContent);
    //         let titleB= new title(b.querySelector('.title').textContent);
    //     })
    //     tasks.forEach((task) => {
    //         elem.appendChild(task);
    //     });
    // });
    
    // containers.forEach(container => {
    //     const tasks=container.querySelector('.tasks');
    //     const sortCards=array.from(tasks);
}
