document.addEventListener("DOMContentLoaded", function() {
    const bars = [
        { name: "The Tipsy Tavern", location: "Downtown" },
        { name: "The Chill Spot", location: "Uptown" },
        { name: "Night Owl Bar", location: "Suburbs" },
        { name: "Hops & Dreams", location: "Downtown" },
        { name: "Crafty Cocktails", location: "Midtown" },
        { name: "The Hidden Gem", location: "Uptown" }
    ];

    const barListings = document.getElementById('bar-listings');

    bars.forEach(bar => {
        const barCard = document.createElement('div');
        barCard.className = 'bar-card';

        const barName = document.createElement('h2');
        barName.textContent = bar.name;
        barCard.appendChild(barName);

        const barLocation = document.createElement('p');
        barLocation.textContent = `Location: ${bar.location}`;
        barCard.appendChild(barLocation);

        barListings.appendChild(barCard);
    });
});
