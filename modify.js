function modifybtn() {
    // const modifybtn=document.querySelectorAll('.modify');


    // modifybtn.forEach ((bouton) => {
    //     bouton.addEventListener('click', function() {
            
    //         const parent=bouton.parentNode.parentNode.parentNode.parentNode.parentNode;

    //         const modifydate=parent.children[0].children[1];
    //         const modifytitle=parent.children[1].children[0]; //siblings;
    //         const modifyInfo=parent.children[1].children[1];

    //         modifydate.textContent=prompt('enter your new date: ');
    //         modifytitle.textContent = prompt('change your title:');
    //         modifyInfo.textContent=prompt('enter your new description: ');

    //         console.log(parent);
    //         console.log(modifydate);
    //         console.log(modifytitle);
    //         console.log(modifyInfo);
    //     })    
    // });
    const tasksSection = document.querySelector('.cards'); 
    tasksSection.addEventListener('click', function (e) {
        if (e.target.classList.contains('modify')) {
            const parent = e.target.closest('.tasks');
            const modifydate = parent.querySelector('.dueDate');
            const modifytitle = parent.querySelector('.title');
            const modifyInfo = parent.querySelector('.more');

            modifydate.textContent = prompt('Enter your new date: ');
            modifytitle.textContent = prompt('Change your title: ');
            modifyInfo.textContent = prompt('Enter your new description: ');
        }
    });

}
