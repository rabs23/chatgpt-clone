const chatInput = document.getElementById("#typing");
const sendButton = document.getElementById("#send-btn");
const chatContainer = document.getElementById(".chat-container");

let userText = null;
const API_KEY = "";

createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add(chat, className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

const getChatResponse = () => {
  const API_URL = "https://api.openai.com/v1/completions";
};

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({
    model: "text-davinci-003",
    prompt: userText,
    max_tokens: 2048,
    temperature: 0.2,
    n: 1,
    stop: null,
  }),
};

const showTypingAnimation = () => {
  const html = `<div class="chat-content">
                        <div class="chat-message">
                            <img src="photos/logo.jpeg" alt="chatbot-img" width="50px">
                            <div class="typing-animation">
                                <div class="dot" style="--delay: 0.2s"></div>
                                <div class="dot" style="--delay: 0.3s"></div>
                                <div class="dot" style="--delay: 0.4s"></div>
                            </div>
                        </div>
                        <span class="material-symbols-rounded">content_copy</span>
                  </div>`;
  const inComingChatDiv = createElement(html, incoming);
  chatContainer.appendChild(inComingChatDiv);
};

const handleOutgoingChat = () => {
  userText = chatInput.value.trim();
  const html = ` <div class="chat-content">
                        <div class="chat-message">
                            <img src="photos/1.jpeg" alt="user-img">
                            <p>${userText}</p>
                        </div>
                   </div>`;
  const outGoingChatDiv = createElement(html, outgoing);
  chatContainer.appendChild(outGoingChatDiv);
  setTimeout(showTypingAnimation, 500);
};

sendButton.addEventListener("click", handleOutgoingChat);
