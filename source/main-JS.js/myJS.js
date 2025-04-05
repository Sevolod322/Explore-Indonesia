



const footerBtn = document.querySelector('.footer__btn-scroll')


footerBtn.addEventListener(
    'click',
    (event) => {
        const header = document.querySelector('.header');
        header.scrollIntoView( {
            behavior: 'smooth'
        })
    }
)


















