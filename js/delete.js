

// deleteBtn.forEach((bouton) => {
//     bouton.addEventListener("click", function () {
//         let parent = bouton.parentNode.parentNode.parentNode.parentNode.parentNode;
//         parent.remove();
//     })
// });
// deleteBtn.addEventListener("click", function(event) {
//     let parent = deleteBtn.parentNode.parentNode.parentNode.parentNode;
//     parent.remove();
// }); 



function deleter() { 
    const tasksSection=document.querySelector('.cards');
    tasksSection.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            const parent=e.target.closest('.tasks');
            parent.remove();
        }
    })
}
