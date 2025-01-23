// script.js
document.getElementById("addiction-test").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const results = {
        "less_than_hour": "Your phone thinks you're ghosting it.",
        "1_3_hours": "You're managing... for now.",
        "3_6_hours": "Your phone is practically family.",
        "6_plus_hours": "Your phone is drafting a prenup.",

        "never": "You are a rare and mythical creature.",
        "sometimes": "The ghosts of notifications past are with you.",
        "always": "You and your phone share a telepathic bond.",

        "calm": "A calm, collected human. Bravo!",
        "nervous": "Mild anxiety is normal, right?",
        "panic": "Your charger is your life support system.",

        "news": "Starting the day with doom? Classic.",
        "social": "You have 3 likes already!",
        "nothing": "We’ll pretend to believe you."
    };

    let diagnosis = "";

    const form = event.target;
    const selectedOptions = Array.from(form.elements).filter(el => el.tagName === "SELECT");

    selectedOptions.forEach(option => {
        const value = option.value;
        diagnosis += `<p>${results[value]}</p>`;
    });

    document.getElementById("diagnosis-text").innerHTML = diagnosis;
    document.getElementById("result").classList.remove("hidden");
});
