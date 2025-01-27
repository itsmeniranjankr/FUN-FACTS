// Array of fun random facts
const facts = [
    "Bananas are curved because they grow towards the sun.",
    "Bees can recognize human faces.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Venus is the only planet to spin clockwise.",
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "Butterflies taste with their feet.",
    "The inventor of the Frisbee was turned into a Frisbee after he died.",
    "A cow-bison hybrid is called a “beefalo”.",
    "You can hear a blue whale's heartbeat from two miles away.",
    "A snail can sleep for three years.",
    "The unicorn is the national animal of Scotland.",
    "Rats laugh when tickled.",
    "The total weight of ants on earth once equaled the total weight of people.",
    "Elephants are the only animals that can't jump.",
    "It's illegal to own just one guinea pig in Switzerland because they get lonely.",
    "A group of flamingos is called a 'flamboyance'.",
    "Polar bear skin is black, and their fur is not white but transparent.",
    "It rains diamonds on Saturn and Jupiter.",
    "Cats have fewer toes on their back paws."
];

// Function to display a random fact
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    document.getElementById("factDisplay").innerText = fact;
}

// Call the function when the window loads
window.onload = function() {
    displayRandomFact();
};
