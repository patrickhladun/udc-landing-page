// const t0 = performance.now();

const makeNavigation = () => {
    const sections =  document.querySelectorAll('[data-section]');

    const navContainer = document.getElementById('navigation');
    const fragment = document.createDocumentFragment();
    const nav = document.createElement('ul');
    nav.classList.add('navigation');

    sections.forEach( (section) => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        const navTitle = section.getAttribute('data-section');

        const navItemClasses = navTitle.toLowerCase() === 'home' ? ['nav-item', 'nav-active'] : ['nav-item'];
        navItem.classList.add(...navItemClasses);

        navLink.href = `#${navTitle.toLowerCase()}`;
        navLink.classList.add('nav-link');
        navLink.textContent = navTitle;

        navItem.appendChild(navLink);
        fragment.appendChild(navItem);
    } );

    nav.appendChild(fragment);
    navContainer.appendChild(nav);
};

makeNavigation();

// const t1 = performance.now();
// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);