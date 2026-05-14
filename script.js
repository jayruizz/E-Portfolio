var typed = new Typed(".typing", {
    strings: [
        "",
        "BS Information Systems student",
        "",
        "BS Information Systems student",
        "",
        "BS Information Systems student"
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

const navLinks = document.querySelectorAll('.navbar .nav li a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        navLinks.forEach(link => link.classList.remove('active'));

        e.target.classList.add('active');

        const targetSection = document.querySelector(
            e.target.getAttribute('href')
        );

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

function checkSectionInView() {

    const scrollPosition = window.scrollY;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop - 50 &&
            scrollPosition <= sectionBottom - 50
        ) {

            const id = section.getAttribute('id');

            const activeLink = document.querySelector(
                `.navbar .nav li a[href="#${id}"]`
            );

            navLinks.forEach(link =>
                link.classList.remove('active')
            );

            if (activeLink)
                activeLink.classList.add('active');

        }

    });

}

window.addEventListener('scroll', checkSectionInView);

checkSectionInView();

document.addEventListener('DOMContentLoaded', function () {

    const navToggler = document.querySelector('.nav-toggler');

    const nav = document.querySelector('.nav');

    const navLinks = document.querySelectorAll('.nav li a');

    navToggler.addEventListener('click', function () {

        nav.classList.toggle('open');

    });

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            nav.classList.remove('open');

            navLinks.forEach(function (link) {

                link.classList.remove('active');

            });

            link.classList.add('active');

        });

    });

});

// IMAGE MODAL
document.addEventListener("DOMContentLoaded", () => {

    const imageModal = document.getElementById("imageModal");

    const modalImage = document.getElementById("modalImage");

    const closeModal = document.getElementById("closeModal");

    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const imageSrc = button
                .closest(".project-item-inner")
                .querySelector(".project-img img")
                .src;

            modalImage.src = imageSrc;

            imageModal.classList.add("show");

        });

    });

    // CLOSE MODAL BUTTON
    closeModal.addEventListener("click", () => {

        imageModal.classList.remove("show");

    });

    // CLOSE MODAL WHEN CLICK OUTSIDE IMAGE
    imageModal.addEventListener("click", (e) => {

        if (e.target === imageModal) {

            imageModal.classList.remove("show");

        }

    });

});