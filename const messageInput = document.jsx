const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        appendMessage('user', userMessage);
        const botResponse = generateBotResponse(userMessage);
        appendMessage('bot', botResponse);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerHTML = <p>${message}</p>;
    chatMessages.appendChild(messageElement);
}

function generateBotResponse(userMessage) {
    // Add your bot's response generation logic here
    return "I'm CyberBot, a simple chatbot!";
}