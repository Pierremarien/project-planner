const btn=document.querySelector('.click');

const form=document.querySelector('.form');

if (form.style.display==='block') {
    form.style.display='none';
}
btn.addEventListener('click', () =>{
    form.style.display==='none'? form.style.display='block' : form.style.display='none'
})
