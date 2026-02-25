import './style.css'

const questions = [
  {
    id: 1,
    text: "How can I help you on your speaking journey?",
    key: "goal"
  },
  {
    id: 2,
    text: "Do you have a specific upcoming event to speak at? If yes, please share the date.",
    key: "eventDate"
  },
  {
    id: 3,
    text: "Will you be presenting content on a screen/projector?",
    key: "hasScreen"
  },
  {
    id: 4,
    text: "In what context does your speaking engagement take place?",
    key: "context",
    options: [
      { label: "a. I am presenting business content", value: "business" },
      { label: "b. I am giving a ceremonial speech", value: "ceremonial" },
      { label: "c. I am teaching content", value: "teaching" },
      { label: "d. I am delivering an appeal or political message", value: "political" },
      { label: "e. Something else", value: "other" }
    ]
  },
  {
    id: 5,
    text: "Last question: can you estimate how many people will be listening? (If over 100, the programme would be different)",
    key: "audienceSize"
  }
];

let currentQuestionIndex = 0;
const answers: Record<string, string> = {};

const messagesDiv = document.getElementById("messages") as HTMLDivElement;
const optionsContainer = document.getElementById("options-container") as HTMLDivElement;
const userInput = document.getElementById("user-input") as HTMLInputElement;
const nextBtn = document.getElementById("next-btn") as HTMLButtonElement;
const inputArea = document.getElementById("input-area") as HTMLDivElement;
const resultContainer = document.getElementById("result-container") as HTMLDivElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  userInput.value = "";
  optionsContainer.innerHTML = "";
  
  addMessage(question.text, false);
  
  if (question.options) {
    userInput.style.display = "none";
    nextBtn.style.display = "none";
    question.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.label;
      btn.className = "option-btn";
      btn.onclick = () => {
        answers[question.key] = opt.value;
        if (opt.value === "other") {
          userInput.style.display = "block";
          userInput.placeholder = "Please specify...";
          userInput.focus();
          nextBtn.style.display = "block";
        } else {
          addMessage(opt.label, true);
          setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
              showConfirmation();
            } else {
              showQuestion();
            }
          }, 300);
        }
      };
      optionsContainer.appendChild(btn);
    });
  } else {
    userInput.style.display = "block";
    userInput.placeholder = "Type your answer...";
    nextBtn.style.display = "block";
    userInput.focus();
  }
}

function addMessage(text: string, isUser: boolean) {
  const msg = document.createElement("div");
  msg.className = isUser ? "user-message" : "ai-message";
  msg.innerText = text;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleNext() {
  const question = questions[currentQuestionIndex];
  const value = userInput.value.trim();
  if (!value) return;
  answers[question.key] = value;
  addMessage(value, true);
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex >= questions.length) {
    showConfirmation();
  } else {
    setTimeout(showQuestion, 300);
  }
}

function showConfirmation() {
  inputArea.style.display = "none";
  
  const summary = `Here's a summary of your responses:\n\n` +
    `Goal: ${answers.goal || 'Not specified'}\n` +
    `Event Date: ${answers.eventDate || 'Not specified'}\n` +
    `Using Screen: ${answers.hasScreen || 'Not specified'}\n` +
    `Context: ${answers.context || 'Not specified'}\n` +
    `Audience Size: ${answers.audienceSize || 'Not specified'}\n\n` +
    `Would you like me to generate your personalized program?`;
  
  addMessage(summary, false);
  
  const btnContainer = document.createElement("div");
  btnContainer.className = "confirmation-buttons";
  
  const yesBtn = document.createElement("button");
  yesBtn.innerText = "Yes, generate my program";
  yesBtn.className = "yes-btn";
  yesBtn.onclick = () => submitToServer();
  
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit my answers";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    currentQuestionIndex = 0;
    inputArea.style.display = "block";
    messagesDiv.innerHTML = "";
    showQuestion();
  };
  
  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(editBtn);
  messagesDiv.appendChild(btnContainer);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function submitToServer() {
  const buttons = document.querySelector(".confirmation-buttons");
  if (buttons) buttons.remove();
  
  messagesDiv.innerHTML += `<div class="ai-message">Generating your personalized program...</div>`;
  
  try {
    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers)
    });

    const result: { program: string } = await response.json();

    resultContainer.style.display = "block";
    if (resultDiv) {
      resultDiv.innerText = result.program;
    }
  } catch (error) {
    console.error("Error generating program:", error);
    messagesDiv.innerHTML += `<div class="ai-message">Error: Could not generate program. Please try again.</div>`;
    inputArea.style.display = "block";
  }
}

nextBtn.addEventListener("click", handleNext);

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleNext();
  }
});

addMessage("Welcome! This app helps you prepare for an upcoming event where you will be speaking in front of other people.", false);

setTimeout(showQuestion, 500);
