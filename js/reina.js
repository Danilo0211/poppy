//--------------------------------------------------------------
// violet Chat
//--------------------------------------------------------------

const violetForm = document.getElementById("violet-form");
const chatWindow = document.getElementById("chat-window");

const nameGroup = document.getElementById("name-group");
const visitorNameInput = document.getElementById("visitor-name");
const visitorMessageInput = document.getElementById("visitor-message");



//--------------------------------------------------------------
// violet's Memory
//--------------------------------------------------------------
console.log("violet chat JavaScript is running!");
let violetMemory = {
    visitorName: "",
    favoriteThing: ""
};

//--------------------------------------------------------------
// Load violet's Memory
//--------------------------------------------------------------

const savedName =
    localStorage.getItem("violetVisitorName");

const savedFavorite =
    localStorage.getItem("violetFavoriteThing");


if (savedName) {

    violetMemory.visitorName = savedName;

    // Hide name field because violet remembers the visitor
    nameGroup.style.display = "none";
}


if (savedFavorite) {

    violetMemory.favoriteThing = savedFavorite;
}


//--------------------------------------------------------------
// violet's Welcome Message
//--------------------------------------------------------------

const welcomeMessage =
    document.getElementById("violet-welcome-message");


if (violetMemory.visitorName !== "") {

    welcomeMessage.textContent =
        `Welcome back, ${violetMemory.visitorName}! 🐶❤️ I remember you!`;

}


//--------------------------------------------------------------
// Chat Form
//--------------------------------------------------------------

violetForm.addEventListener("submit", function (event) {

    event.preventDefault();


    //----------------------------------------------------------
    // Get visitor name
    //----------------------------------------------------------

    let visitorName;


    if (violetMemory.visitorName !== "") {

        // violet already remembers the visitor
        visitorName = violetMemory.visitorName;

    } else {

        // First visit
        visitorName =
            visitorNameInput.value.trim();

    }
    //----------------------------------------------------------
    // Get visitor message
    //----------------------------------------------------------

    const visitorMessage =
        visitorMessageInput.value.trim();
    //----------------------------------------------------------
    // Make sure required information exists
    //----------------------------------------------------------

    if (visitorName === "" || visitorMessage === "") {

        return;
    }
    //----------------------------------------------------------
    // Save visitor name
    //----------------------------------------------------------

    violetMemory.visitorName =
        visitorName;


    localStorage.setItem(
        "violetVisitorName",
        visitorName
    );


    // Hide name field after violet learns the name
    nameGroup.style.display = "none";
    //----------------------------------------------------------
    // Create visitor message
    //----------------------------------------------------------

    const visitorBubble =
        document.createElement("div");
    visitorBubble.classList.add(
        "message",
        "visitor-message"
    );
    visitorBubble.innerHTML = `
        <strong>🧑 ${violetMemory.visitorName}</strong>
        <p>${visitorMessage}</p>
    `;
    chatWindow.appendChild(visitorBubble);
    //----------------------------------------------------------
    // Analyze message
    //----------------------------------------------------------
    const message =
        visitorMessage.toLowerCase();
    let violetReply;
    //----------------------------------------------------------
//----------------------------------------------------------
// Favorite thing
//----------------------------------------------------------

if (
    message.includes("my favorite") ||
    message.includes("i like")
) {

    violetMemory.favoriteThing =
        visitorMessage;

    localStorage.setItem(
        "violetFavoriteThing",
        visitorMessage
    );

    violetReply =
        `Awww! ❤️ I'll remember that, ${violetMemory.visitorName}! 🐶🐾`;


//----------------------------------------------------------
// Ask what violet remembers
//----------------------------------------------------------

} else if (
    message.includes("what do you remember") ||
    message.includes("remember")
) {

    if (violetMemory.favoriteThing !== "") {

        violetReply =
            `Of course I remember, ${violetMemory.visitorName}! ❤️ You told me: "${violetMemory.favoriteThing}" 🐶`;

    } else {

        violetReply =
            `Hmm... I don't know your favorite thing yet! 🐶 Tell me something you love! ❤️`;
    }
    // Greeting
    //----------------------------------------------------------
 
//----------------------------------------------------------

//----------------------------------------------------------
} else if (
    message.includes("how are you") ||
    message.includes("how are you doing")
) {

    violetReply =
        `I'm doing great! 🐶❤️ I'm happy because you're here with me! 🐾`;
// I Miss You //----------------------------------------------------------
 } else if (
     message.includes("i miss you") || 
     message.includes("miss you")
     ) { 
        violetReply = `Awww... 🥺❤️ I miss you too, ${violetMemory.visitorName}! ` + 
        `Come here and give me a big puppy hug! 🐶🐾💕`; 
        
    //----------------------------------------------------------

    // Who Are You? 
   
 } else if ( message.includes("who are you") || 
        message.includes("what is your name") ) { 
            
        violetReply = `I'm violet! 👑🐶❤️ I'm the cutest puppy in this little world! ` +
         `It's so nice to have you here! 🐾`;


    //----------------------------------------------------------
    // Love
    //----------------------------------------------------------
    } else if (
        message.includes("love")
    ) {

        violetReply =
            `Awww, ${violetMemory.visitorName}! ❤️ I love you too! Now where are my belly rubs? `;
    //----------------------------------------------------------
    // Food
    //----------------------------------------------------------
    } else if (
        message.includes("food") ||
        message.includes("eat")
    ) {
        violetReply =
            `Did someone say FOOD?! 🍖🐶 I was just thinking about treats!`;


    //----------------------------------------------------------
    // Compliments
    //----------------------------------------------------------
    } else if (
        message.includes("cute") ||
        message.includes("beautiful") ||
        message.includes("pretty")
    ) {
        violetReply =
            `Awww! You're making me blush! 🥰🐶 Thank you, ${violetMemory.visitorName}!`;

    //----------------------------------------------------------
    // Play
    //----------------------------------------------------------
    } else if (
        message.includes("play") ||
        message.includes("toy")
    ) {

        violetReply =
            `PLAY?! 🧸🐾 YES! Let's play! Bring my favorite toy!`;
    //----------------------------------------------------------
    // Default
    //----------------------------------------------------------

    } else {

        violetReply =
            `That's interesting, ${violetMemory.visitorName}! 🐶❤️ Tell me more!`;
    }

    //----------------------------------------------------------
    // Create violet's message
    //----------------------------------------------------------

    const violetBubble =
        document.createElement("div");

    violetBubble.classList.add(
        "message",
        "violet-message"
    );


    violetBubble.innerHTML = `
        <strong>🐶 violet</strong>
        <p>${violetReply}</p>
    `;


    chatWindow.appendChild(violetBubble);
    //----------------------------------------------------------
    // Clear message field
    //----------------------------------------------------------

    visitorMessageInput.value = "";
    //----------------------------------------------------------
    // Scroll to newest message
    //----------------------------------------------------------
    chatWindow.scrollTop =
        chatWindow.scrollHeight;

});

//--------------------------------------------------------------
// Secret Surprise
//--------------------------------------------------------------

const surpriseButton =
    document.getElementById("surprise-button");

const surpriseLocked =
    document.getElementById("surprise-locked");

const surpriseMessage =
    document.getElementById("surprise-message");

const personalSurpriseMessage =
    document.getElementById("personal-surprise-message");

const continueSurprise =
    document.getElementById("continue-surprise");

const finalSurprise =
    document.getElementById("final-surprise");

const finalSurpriseMessage =
    document.getElementById("final-surprise-message");

//--------------------------------------------------------------
// Open First Surprise
//--------------------------------------------------------------
surpriseButton.addEventListener("click", function () {

    // Get visitor's saved name
    const visitorName =
       violetMemory.visitorName;
    // Create personalized message
    if (visitorName) {
        personalSurpriseMessage.textContent =
            `Hi ${visitorName}! ❤️ violet has a little secret for you... ` +
            `You are very special to her! 🐾💕`;

    } else {

        personalSurpriseMessage.textContent =
            "Hi! ❤️ violet has a little secret for you... " +
            "You are very special to her! 🐾💕";

    }

    // Hide locked section
    surpriseLocked.hidden = true;

    // Show first surprise
    surpriseMessage.hidden = false;
    //----------------------------------------------------------
    // Celebration
    //----------------------------------------------------------
    const celebrationSymbols =
        ["❤️", "💕", "🐾", "✨", "💖"];


    celebrationSymbols.forEach(function (symbol) {

        const celebration =
            document.createElement("span");


        celebration.classList.add(
            "celebration"
        );


        celebration.textContent =
            symbol;


        celebration.style.left =
            Math.random() * 90 + "%";


        celebration.style.bottom =
            Math.random() * 30 + "%";


        surpriseMessage.appendChild(
            celebration
        );

    });

});


//--------------------------------------------------------------
// Continue Surprise
//--------------------------------------------------------------

continueSurprise.addEventListener(
    "click",
    function () {

        const visitorName =
            localStorage.getItem(
                "violetVisitorName"
            ) || "my love";


        finalSurpriseMessage.textContent =
            `${visitorName}, I made this little world because ` +
            `you are someone very special to me. ❤️ ` +
            `I hope every time you visit violet's World, ` +
            `it reminds you that you are loved. 🐾💕`;


        // Show final message
        finalSurprise.hidden = false;


        // Hide Continue button
        continueSurprise.hidden = true;

    }
);
//--------------------------------------------------------------
// Reset violet's Memory
//--------------------------------------------------------------

const resetMemoryButton =
    document.getElementById("reset-memory-button");

resetMemoryButton.addEventListener(
    "click",
    function () {

        // Forget saved memory
        localStorage.removeItem(
            "violetVisitorName"
        );

        localStorage.removeItem(
            "violetFavoriteThing"
        );

        // Reset violet's memory
        violetMemory.visitorName = "";
        violetMemory.favoriteThing = "";

        // Show the name field again
        nameGroup.hidden = false;

        // Clear inputs
        visitorNameInput.value = "";
        visitorMessageInput.value = "";

        // Reset welcome message
        welcomeMessage.textContent =
            "Hi! I'm violet! It's so nice to meet you! 👑🐾";

        // Put cursor in name field
        visitorNameInput.focus();

    }
);