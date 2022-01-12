import { checkAuth, getWorkshops, logout, createParticipant } from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('form');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const dropdown = document.querySelector('select');
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const optionEl = document.createElement('option');

        optionEl.value = workshop.id;
        optionEl.textContent = workshop.name;

        dropdown.append(optionEl);
    }
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
    window.location.href = '../workshops';
});