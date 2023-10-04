const deleteBtn = document.querySelectorAll('.delete');

deleteBtn.forEach((bouton) => {
    bouton.addEventListener("click", function () {
        let parent = bouton.parentNode.parentNode.parentNode.parentNode.parentNode;
        parent.remove();
    })
});
// deleteBtn.addEventListener("click", function(event) {
//     let parent = deleteBtn.parentNode.parentNode.parentNode.parentNode;
//     parent.remove();
// }); 

