const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function pageAnimation(){
    var elemc = document.querySelector('#elem-container');
var fixed = document.querySelector('#fixed-image');
elemc.addEventListener('mouseenter', ()=> {
    fixed.style.display = 'block';
});

elemc.addEventListener('mouseleave', ()=> {
    fixed.style.display = 'none';
});

var elem = document.querySelectorAll('.elem');
elem.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        var image = e.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image})`;
    });
});
}


function swiperAnimation(){

     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 50,
    
    });
  
}

swiperAnimation();
pageAnimation();
  
function menuAnimation() {
    const menu = document.querySelector('nav h3');
    const fullScr = document.querySelector('#full-scr');
    const navImg = document.querySelector('nav img');
    const menuLinks = document.querySelectorAll('.menu-link');
    let isOpen = false;

    function closeMenu() {
        fullScr.style.top = '-100%';
        navImg.style.opacity = '1';
        menu.textContent = 'Menu';
        document.body.style.overflow = '';
        isOpen = false;
    }

    function openMenu() {
        fullScr.style.top = '0';
        navImg.style.opacity = '0';
        menu.textContent = 'Close';
        document.body.style.overflow = 'hidden';
        isOpen = true;
    }

    function toggleMenu() {
        if (!isOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    // Menu button click
    menu.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
    });

    // Close menu when clicking outside
    fullScr.addEventListener('click', (e) => {
        if (e.target === fullScr) {
            closeMenu();
        }
    });

    // Handle touch events for better mobile experience
    let touchStartY = 0;
    let touchStartX = 0;

    fullScr.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].pageX;
    }, { passive: true });

    fullScr.addEventListener('touchmove', (e) => {
        if (!isOpen) return;
        
        const touchY = e.touches[0].clientY;
        const touchX = e.touches[0].pageX;
        const diffY = touchY - touchStartY;
        const diffX = Math.abs(touchX - touchStartX);
        
        // Only close if swipe is mostly vertical (not horizontal)
        if (diffX < Math.abs(diffY) && diffY > 50) {
            closeMenu();
        }
    }, { passive: true });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeMenu();
        }
    });

    // Prevent scrolling when menu is open
    fullScr.addEventListener('touchmove', (e) => {
        if (isOpen) {
            e.preventDefault();
        }
    }, { passive: false });
}

menuAnimation();

var loader =document.querySelector("#loader");
setTimeout( ()=>{
 loader.style.top = '-100%';
},4000)