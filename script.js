async function loadEvents() {
    try {
        const response = await fetch('events.json');
        const events = await response.json();
        const container = document.getElementById('events-container');

        events.forEach((event, index) => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.setAttribute('role', 'article');
            eventCard.setAttribute('aria-labelledby', `event-${index + 1}-title`);

            const titleDiv = document.createElement('div');
            titleDiv.id = `event-${index + 1}-title`;
            titleDiv.className = 'event-title';
            titleDiv.textContent = event.title;

            const metaDiv = document.createElement('div');
            metaDiv.className = 'event-meta';
            metaDiv.textContent = event.metadata;

            const descDiv = document.createElement('div');
            descDiv.className = 'event-desc';
            descDiv.textContent = event.description;

            eventCard.appendChild(titleDiv);
            eventCard.appendChild(metaDiv);
            eventCard.appendChild(descDiv);

            if (event.cta) {
                const ctaDiv = document.createElement('div');
                ctaDiv.className = 'event-cta';
                ctaDiv.innerHTML = event.cta;
                eventCard.appendChild(ctaDiv);
            }

            container.appendChild(eventCard);
        });
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

loadEvents();