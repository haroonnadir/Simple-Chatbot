// JavaScript for chatbot functionality

document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        handleUserMessage(userInput);  // Call a function to handle user input
        document.getElementById('user-input').value = ""; // Clear input after sending
    }
});

function addUserMessage(message) {
    let chatBox = document.getElementById('chat-box');
    let userMessage = `<div class="chat-message user-message">${message}</div>`;
    chatBox.innerHTML += userMessage;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function handleUserMessage(message) {
    // Handle specific user commands like "call"
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes("call")) {
        triggerCallAction();  // If the message includes "call", trigger the call action
        return;  // Exit after triggering the call
    }

    botResponse(message);  // If no call command, proceed with normal bot response
}

function botResponse(userMessage) {
    let chatBox = document.getElementById('chat-box');
    let response = getBotResponse(userMessage);

    setTimeout(function() {
        let botMessage = `<div class="chat-message bot-message">${response}</div>`;
        chatBox.innerHTML += botMessage;
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }, 500); // Simulate bot thinking delay
}

function getBotResponse(message) {
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes("hello")) {
        return "Hello! How can I help you today?";
    } else if (lowercaseMessage.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (lowercaseMessage.includes("what are your owner name")) {
        return "My owner's name is Haroon Nadir.";  // Respond with the owner's name
    } else {
        return "Sorry, I don't understand that. Can you please rephrase?";
    }
}
function triggerCallAction() {
    // This is where the "call" action takes place
    let chatBox = document.getElementById('chat-box');
    
    setTimeout(function() {
        let callMessage = `<div class="chat-message bot-message">📞 Initiating a call... (simulated)</div>`;
        chatBox.innerHTML += callMessage;
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }, 500); // Simulate some delay before showing the call action

    // You could add actual functionality here, such as connecting to a real calling API.
}
