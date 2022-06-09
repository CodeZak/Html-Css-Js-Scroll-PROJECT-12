// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset/scrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels


const myTop = document.querySelector(".top");
const lis = document.querySelectorAll("ul li a");
const moreBtn = document.querySelector(".more");

const navBlock = document.querySelector(".nav");
const ulBlock = document.querySelector(".nav ul");


moreBtn.addEventListener("click", function () {
    const NavHeight = navBlock.getBoundingClientRect().height;
    const ulHeight = ulBlock.getBoundingClientRect().height;
    console.log("naveHeight : " + NavHeight);
    console.log("ulHeight : " + ulHeight);

    if (NavHeight === 0) {
        navBlock.style.height = `${ulHeight}px`;
    } else {
        console.log("hey");
        navBlock.style.height = 0;
    }
});

//

const sections = document.querySelectorAll("section");
const fixedNav = document.querySelector(".top");
const fixedNavHeight = fixedNav.getBoundingClientRect().height;

lis.forEach(function (li) {
    li.addEventListener("click", function (e) {
        e.preventDefault();
        sections.forEach(function (section) {
            if (
                e.currentTarget.getAttribute("href").slice(1).toLowerCase() ===
                section.className.toLowerCase()
            ) {
                window.scrollTo(0, section.offsetTop - fixedNavHeight);
            } else if (e.currentTarget.getAttribute("href") === "#") {
                window.scrollTo(0, 0);
            }
            navBlock.style.height = 0;
        });
    });
});


// show and hide bar + icon when scrolling

const upBtn = document.querySelector(".scrollUp i")
const expTours = document.querySelector(".expTours")
const Feattours = document.querySelector(".Featured_tours")

expTours.addEventListener("click", function() {
    window.scrollTo(0, Feattours.offsetTop - fixedNavHeight);
})


upBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
})
window.onscroll = function () {
    if (window.scrollY >= 450) {
        upBtn.style.display = "block"
    }
    else {
        upBtn.style.display = "none"
    }
    if (window.scrollY >= fixedNavHeight) {
        fixedNav.classList.add("fixed_nav");
    } else {
        fixedNav.classList.remove("fixed_nav");
    }
};


