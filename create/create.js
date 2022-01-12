import { logout, } from '../fetch-utils.js';

const form = document.querySelector('form');
const logoutButton = document.querySelector('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const contact = data.get('contact');
    const workshop_id = data.get('workshop_id');

    await createParticipant({
        name: name,
        contact: contact,
        workshop_id: workshop_id
    });
});