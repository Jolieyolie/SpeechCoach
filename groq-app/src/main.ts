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
const questionText = document.getElementById("question-text") as HTMLDivElement;
const optionsContainer = document.getElementById("options-container") as HTMLDivElement;
const userInput = document.getElementById("user-input") as HTMLInputElement;
const nextBtn = document.getElementById("next-btn") as HTMLButtonElement;
const inputArea = document.getElementById("input-area") as HTMLDivElement;
const resultContainer = document.getElementById("result-container") as HTMLDivElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.innerText = `Question ${question.id}: ${question.text}`;
  userInput.value = "";
  optionsContainer.innerHTML = "";
  
  if (question.options) {
    userInput.style.display = "none";
    question.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.label;
      btn.className = "block w-full text-left px-4 py-2 mb-2 border rounded hover:bg-gray-100";
      btn.onclick = () => {
        answers[question.key] = opt.value;
        if (opt.value === "other") {
          userInput.style.display = "block";
          userInput.placeholder = "Please specify...";
          userInput.focus();
        } else {
          handleNext();
        }
      };
      optionsContainer.appendChild(btn);
    });
  } else {
    userInput.style.display = "block";
    userInput.placeholder = "Type your answer...";
    userInput.focus();
  }
}

function addMessage(text: string, isUser: boolean) {
  const msg = document.createElement("div");
  msg.className = isUser ? "user-message" : "ai-message";
  msg.innerText = isUser ? `You: ${text}` : text;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleNext() {
  const question = questions[currentQuestionIndex];
  
  if (!question.options) {
    const value = userInput.value.trim();
    if (!value) return;
    answers[question.key] = value;
    addMessage(value, true);
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex >= questions.length) {
    submitToServer();
  } else {
    showQuestion();
  }
}

async function submitToServer() {
  inputArea.style.display = "none";
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

showQuestion();
