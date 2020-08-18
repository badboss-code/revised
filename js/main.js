let op = document.getElementById('op');
let cl = document.getElementById('cl');
let nav = document.getElementById('nav');

// event listener 

op.addEventListener('click', ()=>{
    nav.classList.add('current');
})

cl.addEventListener('click', ()=>{
    nav.classList.remove('current');
})