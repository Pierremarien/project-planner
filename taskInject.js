function taskInject() {
    let send = document.querySelector('.submit');

    send.addEventListener("click", function (e) {
        e.preventDefault(); 

        let title = document.querySelector('.titleForm');
        let description = document.querySelector('.description');
        let titleValue = title.value.trim();
        let descriptionValue = description.value.trim();
        let datePicker = document.querySelector('.date');
        let dateValue = datePicker.value;

        addTask(titleValue, descriptionValue, dateValue);
    });

    function addTask(titleValue, descriptionValue, dateValue) {
        let target = document.querySelector('.tasksToDo');
        let currentDate = new Date(); 
        let dueDate = new Date(dateValue); 
        let daysRemaining = Math.floor((dueDate - currentDate) / (1000 * 60 * 60 * 24));
        let task = `
            <div class="tasks">
                <div class="infos">
                    <div class="elipse">
                        <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="4.5" cy="4.5" r="4.5" fill="#18B0FF" />
                        </svg>
                    </div>
                    <p class="date"><span class="dueDate">${dateValue}</span> ${daysRemaining} days left</p>
                    <div class="burger burger--card">
                        <input type="checkbox" class="burger--card_check" />
                        <div class="tasks--btn">
                        <svg
                            width="18"
                            height="4"
                            viewBox="0 0 18 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        </div>
                        <ul class="burger--card_menu-items">
                        <li>
                            <button class="kebab--btn" type="button">WIP</button>
                        </li>
                        <li>
                            <button class="kebab--btn delete" type="button">Delete</button>
                        </li>
                        <li>
                            <button class="kebab--btn" type="button">To Do</button>
                        </li>
                        <li>
                            <button class="kebab--btn modify" type="button">Modify</button>
                        </li>
                        <li>
                            <button class="kebab--btn" type="button">Done</button>
                        </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 class="title">${titleValue}</h3>
                    <p class="more">
                        ${descriptionValue}
                    </p>
                </div>
            </div>`;
            target.innerHTML += task;
    }

}

taskInject();




