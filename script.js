const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.header .navbar');
const closeBtn = document.getElementById('close-navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

closeBtn.onclick = () => {
    navbar.classList.remove('active');
}

window.onclick = (event) => {
    if (!event.target.matches('#menu-btn') && !event.target.matches('.navbar a')) {
        navbar.classList.remove('active');
    }
}



// Pop up content

document.addEventListener('DOMContentLoaded', function() {
    var popupTerms = document.getElementById('popupTerms');
    var popupRefund = document.getElementById('popupRefund');
    var popupLinkTerms = document.getElementById('popupLinkTerms');
    var popupLinkRefund = document.getElementById('popupLinkRefund');
    var closeButtons = document.querySelectorAll('.close');

    popupLinkTerms.addEventListener('click', function(e) {
        e.preventDefault();
        popupTerms.style.display = 'block';
    });

    popupLinkRefund.addEventListener('click', function(e) {
        e.preventDefault();
        popupRefund.style.display = 'block';
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === popupTerms) {
            popupTerms.style.display = 'none';
        }
        if (event.target === popupRefund) {
            popupRefund.style.display = 'none';
        }
    });
});
