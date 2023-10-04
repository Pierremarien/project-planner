function sortDate() {
    let sections = ['tasksToDo', 'tasksWip', 'tasksDone'];
    

    sections.forEach((section) => {
        let container = document.querySelector(`.${section}`);
        let tasks = Array.from(container.querySelectorAll('.tasks'));

        tasks.sort((a, b) => {
            let dueDateA = new Date(a.querySelector('.dueDate').textContent);
            let dueDateB = new Date(b.querySelector('.dueDate').textContent);
            return dueDateA - dueDateB;
        });

        tasks.forEach((task) => {
            container.appendChild(task);
        });
    });
}

let dateButton = document.querySelector('.dateBtn');
dateButton.addEventListener('click', sortDate);





