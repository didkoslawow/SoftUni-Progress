import { page } from '../src/lib.js';
import { logout } from './api/data.js';
import { decorateCtx, updateUserNav } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

updateUserNav();

page(decorateCtx);
page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page.start();

document.getElementById('logoutBtn').addEventListener('click', onLogout);

async function onLogout() {
  await logout();
  updateUserNav();
  page.redirect('/catalog');
}