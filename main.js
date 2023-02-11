const whatsapp = document.querySelector('.whatsapp');
const whatsappIMG = document.querySelector('.whatsapp img');
const headerNavCabecalho = document.querySelector('header.cabecalho nav');
const headerNavCabecalhoOculto = document.querySelector('header.cabecalho-oculto nav');
const headerCabecalhoOculto = document.querySelector('header.cabecalho-oculto');
const btn = document.querySelector('.botao');
const btnSpan = document.querySelectorAll('.botao span');
const [a, b, c] = btnSpan;

headerNavCabecalho.addEventListener('click', e => {
    const el = e.target;
    e.preventDefault();
    
    const classe = el.getAttribute('href');
    const to = document.querySelector(classe).offsetTop;

    scroll({
        top: to,
        behavior: 'smooth'
    })

})

headerNavCabecalhoOculto.addEventListener('click', e => {
    const el = e.target;
    e.preventDefault();
    
    const classe = el.getAttribute('href');
    const to = document.querySelector(classe).offsetTop;

    scroll({
        top: to,
        behavior: 'smooth'
    })

})

document.addEventListener('click', e => {
    const el = e.target;

    if(el == btn || el == a || el == b || el == c){
        headerCabecalhoOculto.classList.toggle('visibilidade-cabecalho');
        a.classList.toggle('um');
        b.classList.toggle('dois');
        c.classList.toggle('tres');
    }

})
