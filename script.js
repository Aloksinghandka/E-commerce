const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

/* OPEN MENU */

if(bar){

    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

/* CLOSE MENU */

if(close){

    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

}