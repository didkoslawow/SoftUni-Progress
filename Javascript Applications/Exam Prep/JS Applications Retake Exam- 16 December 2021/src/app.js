import { page } from './lib.js';
import { render } from './lib.js';
import { getUserData } from './util.js';
import { updateNav } from './views/navigation.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', () => console.log('Home Page'));
page('/catalog', () => console.log('Catalog Page'));
page('/profile', () => console.log('Profile Page'));
page('/create', () => console.log('Create Page'));
page('/details/:id', () => console.log('Details Page'));
page('/edit/:id', () => console.log('Edit Page'));
page('/login', () => console.log('Login Page'));
page('/register', () => console.log('Register Page'));

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}
