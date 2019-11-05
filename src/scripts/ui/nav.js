import effects from "../effects/effects";
const nav = () => {
    let mb = document.querySelector('.menu-btn');
    let as = document.querySelector('.arrow-side');
    const ol = document.querySelector('.sidenav-overlay');   
    mb.addEventListener('click',()=>{
        openMenu();
    });
    as.addEventListener('click', ()=>{
        closeMenu();
    } );
    ol.addEventListener('click', ()=>{
        closeMenu();
    } );
    let closeMenu = () =>{ 
        //sn.classList.add('closed');
        //ol.classList.add('overClosed');
        effects.navAnim(true);
    };
    let openMenu = () =>{ 
        //sn.classList.remove('closed');
        //ol.classList.remove('overClosed');
        effects.navAnim(false);
    };
};
export default nav;