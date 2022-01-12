import { logout, } from '../fetch-utils.js';

const form = document.querySelector('form');
const logoutButton = document.querySelector('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

