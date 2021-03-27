const sections =  document.querySelectorAll('[data-section]');
const body = document.querySelector('body');
const header = document.querySelector('.header');

const navContainer = document.getElementById('navigation');
const fragment = document.createDocumentFragment();
const nav = document.createElement('ul');
nav.classList.add('navigation');

const createNavItem = (section) => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    const navTitle = section.getAttribute('data-section');
    const navTitleDashed = navTitle.replaceAll(' ', '-').toLowerCase();

    const navItemClasses = navTitle.toLowerCase() === 'home' ? ['nav-item', 'nav-active'] : ['nav-item'];
    navItem.classList.add(...navItemClasses);

    navLink.href = `#${navTitleDashed}`;
    navLink.classList.add('nav-link', navTitleDashed);
    navLink.textContent = navTitle;

    section.id = navTitleDashed;

    navItem.appendChild(navLink);

    return navItem;
}

const options = {
    rootMargin: '-100px 0px -88%'
};

const navToggle = (entries) => {
    entries.forEach(entry => {
        const navLinkId = entry.target.id;
        const navLink = document.querySelector(`.nav-item a.${navLinkId}`);
        entry.isIntersecting ? navLink.classList.add('is-active') : navLink.classList.remove('is-active');
    });
}

const observer = new IntersectionObserver(navToggle, options);

sections.forEach( (section) => {
    fragment.appendChild(createNavItem(section));
    observer.observe(section);
} );

nav.appendChild(fragment);
navContainer.appendChild(nav);

window.addEventListener( 'scroll', () => {
    let scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;
    scrollPosition >= headerHeight ? body.classList.add('on-scroll') : body.classList.remove('on-scroll');
});

const links = document.querySelectorAll(".nav-link");
for (const link of links) link.addEventListener( "click", clickHandler );

function clickHandler(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop + 70;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}