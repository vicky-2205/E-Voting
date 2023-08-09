// script.js

// Handle navigation link clicks smoothly
document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
        event.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    }
});
// Fetch candidate data from JSON file and display it
fetch('candidates.json')
    .then(response => response.json())
    .then(candidates => {
        const candidateList = document.getElementById('candidateList');
        candidates.forEach(candidate => {
            const candidateDiv = document.createElement('div');
            candidateDiv.classList.add('candidate');

            const image = document.createElement('img');
            image.src = candidate.image;
            image.alt = candidate.name;

            const name = document.createElement('h3');
            name.textContent = candidate.name;

            const party = document.createElement('p');
            party.textContent = `Party: ${candidate.party}`;

            const position = document.createElement('p');
            position.textContent = `Position: ${candidate.position}`;

            candidateDiv.appendChild(image);
            candidateDiv.appendChild(name);
            candidateDiv.appendChild(party);
            candidateDiv.appendChild(position);

            candidateList.appendChild(candidateDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching candidate data:', error);
    });
document.addEventListener('DOMContentLoaded', () => {
    const votingForm = document.getElementById('votingForm');
    const voteResult = document.getElementById('voteResult');

    votingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
        if (selectedCandidate) {
            const candidateName = selectedCandidate.value === 'john-doe' ? 'John Doe' : 'Jane Smith';
            voteResult.textContent = `You voted for ${candidateName}.`;
        } else {
            voteResult.textContent = 'Please select a candidate to vote.';
        }
    });
});
