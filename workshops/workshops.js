import { checkAuth, logout, getWorkshops, deleteParticipant } from '../fetch-utils.js';
import { renderParticipant } from '../render-utils.js';
checkAuth();

const logoutButton = document.getElementById('logout');

const workshopsListEl = document.querySelector('.workshops-list');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    const workshops = await getWorkshops();

    workshopsListEl.textContent = '';

    for (let workshop of workshops) {
        const workshopEL = document.createElement('div');
        const nameEl = document.createElement('h2');
        const participantsEl = document.createElement('div');

        workshopEL.classList.add('workshop');
        nameEl.textContent = workshop.name;
        workshopEL.append(nameEl, participantsEl);

        for (let participant of workshop.workshop_participants) {
            const participantEl = renderParticipant(participant);
            

            participantEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);
                displayWorkshops();
            });
            
            participantsEl.append(participantEl); 
        }
        workshopsListEl.append(workshopEL);
    }
}

window.addEventListener('load', async() => {
    displayWorkshops();
});