// const t0 = performance.now();

const makeNavigation = () => {
    const sections =  document.querySelectorAll('[data-section]');

    const navContainer = document.getElementById('navigation');
    const fragment = document.createDocumentFragment();
    const nav = document.createElement('ul');
    nav.classList.add('navigation');

    sections.forEach( (section) => {

        console.log(section);
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        const navTitle = section.getAttribute('data-section');
        const navTitleDashed = navTitle.replaceAll(' ', '-').toLowerCase();

        const navItemClasses = navTitle.toLowerCase() === 'home' ? ['nav-item', 'nav-active'] : ['nav-item'];
        navItem.classList.add(...navItemClasses);

        navLink.href = `#${navTitleDashed}`;
        navLink.classList.add('nav-link');
        navLink.textContent = navTitle;

        section.id = navTitleDashed;

        navItem.appendChild(navLink);
        fragment.appendChild(navItem);
    } );

    nav.appendChild(fragment);
    navContainer.appendChild(nav);

};

const scrollNavigation = () => {
    const links = document.querySelectorAll(".nav-link");

    for (const link of links) {
        link.addEventListener( "click", clickHandler );
    }

    function clickHandler(e) {
        e.preventDefault();

        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

makeNavigation();
scrollNavigation();



// const t1 = performance.now();
// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);