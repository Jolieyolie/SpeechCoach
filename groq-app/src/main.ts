import "./style.css";

interface CourseData {
  slides: {
    small_audience: string[];
    large_audience: string[];
  };
  no_slides: {
    small_audience: string[];
    large_audience: string[];
  };
}

const PROGRAMME_SCHEDULE: Record<string, string[]> = {
  "VIDEO: How to make your devices work for you": ["DAY 1-3"],
  "AUDIO: Free yourself, write index cards": ["DAY 4-5"],
  "VIDEO: 4 Friends: Voice, posture, gestures, eye contact": ["DAY 6-9"],
  "AUDIO: Establish contact with the audience": ["DAY 10-12"],
  "VIDEO: large venue, many people - how to handle": ["DAY 10-12"],
  "AUDIO: the day before: general rehearsal": ["DAY 13"],
  "VIDEO: Relax: the big day! TOI! TOI! TOI!": ["DAY 14"],
  "AUDIO: Congratulations and reflection": ["DAY 15"],
  "VIDEO: Once upon a time … Storytelling (basic)": ["DAY 1-3"],
  "AUDIO: presenting poems and literature (basic)": ["DAY 4-5"],
  "VIDEO: use this secreat weapon: change of posture": ["DAY 6-9"],
  "AUDIO: Create emotions, make an appeal": ["DAY 10-12", "DAY 13"],
};

function getScheduleForItem(item: string): string | null {
  const trimmedItem = item.trim();
  if (PROGRAMME_SCHEDULE[trimmedItem]) {
    return PROGRAMME_SCHEDULE[trimmedItem][0];
  }
  for (const key of Object.keys(PROGRAMME_SCHEDULE)) {
    if (trimmedItem.includes(key) || key.includes(trimmedItem)) {
      return PROGRAMME_SCHEDULE[key][0];
    }
  }
  return null;
}

const PROGRAMME_LOGIC: Record<string, CourseData> = {
  business: {
    slides: {
      small_audience: [
        "VIDEO: How to make your devices work for you",
        "AUDIO: Free yourself, write index cards",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
      large_audience: [
        "VIDEO: How to make your devices work for you",
        "AUDIO: Free yourself, write index cards",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "VIDEO: large venue, many people - how to handle",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
    },
    no_slides: {
      small_audience: [
        "AUDIO: Free yourself, write index cards",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
      large_audience: [
        "AUDIO: Free yourself, write index cards",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
  },
  ceremonial: {
    slides: {
      small_audience: [
        "VIDEO: How to make your devices work for you",
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
      large_audience: [
        "VIDEO: How to make your devices work for you",
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
    no_slides: {
      small_audience: [
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
      large_audience: [
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
  },
  political: {
    slides: {
      small_audience: [
        "VIDEO: How to make your devices work for you",
        "VIDEO: Once upon a time … Storytelling (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "AUDIO: Create emotions, make an appeal",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
      large_audience: [
        "VIDEO: How to make your devices work for you",
        "VIDEO: Once upon a time … Storytelling (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "AUDIO: Create emotions, make an appeal",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
    no_slides: {
      small_audience: [
        "VIDEO: Once upon a time … Storytelling (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "AUDIO: Create emotions, make an appeal",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
      ],
      large_audience: [
        "VIDEO: Once upon a time … Storytelling (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "AUDIO: Create emotions, make an appeal",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "VIDEO: Relax: the big day!",
        "AUDIO: Congratulations and reflection",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
  },
  teaching: {
    slides: {
      small_audience: [
        "VIDEO: How to make your devices work for you",
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "AUDIO: Create emotions, make an appeal",
      ],
      large_audience: [
        "VIDEO: How to make your devices work for you",
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "AUDIO: Create emotions, make an appeal",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
    no_slides: {
      small_audience: [
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "AUDIO: Create emotions, make an appeal",
      ],
      large_audience: [
        "VIDEO: Once upon a time … Storytelling (basic)",
        "AUDIO: presenting poems and literature (basic)",
        "VIDEO: use this secreat weapon: change of posture",
        "VIDEO: 4 Friends: Voice, posture, gestures, eye contact",
        "AUDIO: Establish contact with the audience",
        "AUDIO: the day before: general rehearsal",
        "AUDIO: Create emotions, make an appeal",
        "VIDEO: large venue, many people - how to handle",
      ],
    },
  },
};

const questions = [
  {
    id: 1,
    text: "How can I help you on your speaking journey?",
    key: "goal",
  },
  {
    id: 2,
    text: "Do you have a specific upcoming event to speak at? If yes, please share the date.",
    key: "eventDate",
  },
  {
    id: 3,
    text: "Will you be presenting content on a screen/projector?",
    key: "hasScreen",
  },
  {
    id: 4,
    text: "In what context does your speaking engagement take place?",
    key: "context",
    options: [
      { label: "a. I am presenting business content", value: "business" },
      { label: "b. I am giving a ceremonial speech", value: "ceremonial" },
      { label: "c. I am teaching content", value: "teaching" },
      {
        label: "d. I am delivering an appeal or political message",
        value: "political",
      },
      { label: "e. Something else", value: "other" },
    ],
  },
  {
    id: 5,
    text: "Last question: can you estimate how many people will be listening? (If over 100, the programme would be different)",
    key: "audienceSize",
  },
];

let currentQuestionIndex = 0;
const answers: Record<string, string> = {};

function getAudienceSizeCategory(
  sizeStr: string,
): "small_audience" | "large_audience" {
  const num = parseInt(sizeStr.replace(/\D/g, ""));
  if (isNaN(num)) return "small_audience";
  return num > 100 ? "large_audience" : "small_audience";
}

function renderCoursePage() {
  const courseContainer = document.getElementById("course-content");
  if (!courseContainer) return;

  courseContainer.innerHTML = "";

  Object.keys(PROGRAMME_LOGIC).forEach((context) => {
    const contextData = PROGRAMME_LOGIC[context];

    const slidesSection = document.createElement("div");
    slidesSection.className = "course-section";

    const slidesTitle = document.createElement("h3");
    slidesTitle.className = "course-section-title";
    slidesTitle.textContent = `${context.charAt(0).toUpperCase() + context.slice(1)} - With Slides`;
    slidesSection.appendChild(slidesTitle);

    contextData.slides.small_audience.forEach((item: string) => {
      const card = createCourseItem(item);
      slidesSection.appendChild(card);
    });

    courseContainer.appendChild(slidesSection);

    const noSlidesSection = document.createElement("div");
    noSlidesSection.className = "course-section";

    const noSlidesTitle = document.createElement("h3");
    noSlidesTitle.className = "course-section-title";
    noSlidesTitle.textContent = `${context.charAt(0).toUpperCase() + context.slice(1)} - No Slides`;
    noSlidesSection.appendChild(noSlidesTitle);

    contextData.no_slides.small_audience.forEach((item: string) => {
      const card = createCourseItem(item);
      noSlidesSection.appendChild(card);
    });

    courseContainer.appendChild(noSlidesSection);
  });
}

function createCourseItem(
  item: string,
  showSchedule: boolean = false,
): HTMLDivElement {
  const isVideo = item.startsWith("VIDEO:");
  const isAudio = item.startsWith("AUDIO:");
  const text = item.replace(/^(VIDEO:|AUDIO:)\s*/, "");

  const card = document.createElement("div");
  card.className = "course-item";

  if (showSchedule) {
    const scheduleBadge = document.createElement("span");
    scheduleBadge.className = "schedule-badge";
    scheduleBadge.textContent = getScheduleForItem(item) || "";
    card.appendChild(scheduleBadge);
  }

  const icon = document.createElement("span");
  icon.className = "course-icon";

  if (isVideo) {
    icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  } else if (isAudio) {
    icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`;
  }

  const label = document.createElement("span");
  label.className = "course-label";
  label.textContent = isVideo ? "Video" : isAudio ? "Audio" : "";

  const textDiv = document.createElement("div");
  textDiv.className = "course-text";
  textDiv.textContent = text;

  card.appendChild(icon);
  card.appendChild(label);
  card.appendChild(textDiv);

  return card;
}

const messagesDiv = document.getElementById("messages") as HTMLDivElement;
const optionsContainer = document.getElementById(
  "options-container",
) as HTMLDivElement;
const userInput = document.getElementById("user-input") as HTMLInputElement;
const nextBtn = document.getElementById("next-btn") as HTMLButtonElement;
const inputArea = document.getElementById("input-area") as HTMLDivElement;
const startOverBtn = document.getElementById(
  "start-over-btn",
) as HTMLButtonElement;

function startOver() {
  Object.keys(answers).forEach((key) => delete answers[key]);
  currentQuestionIndex = 0;
  messagesDiv.innerHTML = "";
  inputArea.style.display = "block";

  const aiAssistantTab = document.querySelector(
    '[data-page="page-ai-assistant"]',
  ) as HTMLButtonElement;
  if (aiAssistantTab) {
    document
      .querySelectorAll(".nav-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    aiAssistantTab.classList.add("active");
    document.getElementById("page-ai-assistant")?.classList.add("active");
  }

  addMessage(
    "Welcome! This app helps you prepare for an upcoming event where you will be speaking in front of other people.",
    false,
  );
  setTimeout(showQuestion, 500);
}

startOverBtn.addEventListener("click", startOver);

function renderProgrammePage() {
  const programmeContainer = document.getElementById("programme-content");
  if (!programmeContainer) return;

  programmeContainer.innerHTML = "";

  const context = answers.context || "business";
  const hasScreenAnswer = (answers.hasScreen || "").toLowerCase();
  const hasSlides =
    hasScreenAnswer.includes("yes") ||
    hasScreenAnswer.includes("y") ||
    hasScreenAnswer === "true";
  const audienceSize = getAudienceSizeCategory(answers.audienceSize || "");

  const contextData = PROGRAMME_LOGIC[context];
  if (!contextData) return;

  const section = document.createElement("div");
  section.className = "course-section";

  const title = document.createElement("h3");
  title.className = "course-section-title";
  const sizeLabel =
    audienceSize === "large_audience"
      ? "Large Audience (100+)"
      : "Small Audience (<100)";
  const slideLabel = hasSlides ? "With Slides" : "No Slides";
  title.textContent = `${context.charAt(0).toUpperCase() + context.slice(1)} - ${slideLabel} - ${sizeLabel}`;
  section.appendChild(title);

  const items = hasSlides
    ? contextData.slides[audienceSize]
    : contextData.no_slides[audienceSize];

  items.forEach((item: string) => {
    const card = createCourseItem(item, true);
    section.appendChild(card);
  });

  const priceSection = document.createElement("div");
  priceSection.className = "price-section";

  const priceButton = document.createElement("button");
  priceButton.className = "price-btn";
  priceButton.innerHTML =
    'Get Full Programme<br><span class="price-amount">16.99 €</span>';

  priceSection.appendChild(priceButton);
  programmeContainer.appendChild(section);
  programmeContainer.appendChild(priceSection);
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  userInput.value = "";
  optionsContainer.innerHTML = "";

  addMessage(question.text, false);

  if (question.options) {
    userInput.style.display = "none";
    nextBtn.style.display = "none";
    question.options.forEach((opt) => {
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

  const summary =
    `Here's a summary of your responses:\n\n` +
    `Goal: ${answers.goal || "Not specified"}\n` +
    `Event Date: ${answers.eventDate || "Not specified"}\n` +
    `Using Screen: ${answers.hasScreen || "Not specified"}\n` +
    `Context: ${answers.context || "Not specified"}\n` +
    `Audience Size: ${answers.audienceSize || "Not specified"}\n\n` +
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
    await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });

    messagesDiv.innerHTML = "";

    const isProgrammeTabActive = document
      .getElementById("page-programme")
      ?.classList.contains("active");

    if (isProgrammeTabActive) {
      renderProgrammePage();
      addMessage("Your personalized programme has been updated!", false);
    } else {
      addMessage(
        "Here is your customized programme! Please go to the Your Programme tab below to view your personalized course content.",
        false,
      );

      const viewProgramBtn = document.createElement("button");
      viewProgramBtn.innerText = "View My Programme";
      viewProgramBtn.className = "view-program-btn";
      viewProgramBtn.onclick = () => {
        const programmeTab = document.querySelector(
          '[data-page="page-programme"]',
        ) as HTMLButtonElement;
        if (programmeTab) {
          document
            .querySelectorAll(".nav-btn")
            .forEach((b) => b.classList.remove("active"));
          document
            .querySelectorAll(".page")
            .forEach((p) => p.classList.remove("active"));
          programmeTab.classList.add("active");
          document.getElementById("page-programme")?.classList.add("active");
          renderProgrammePage();
        }
      };

      messagesDiv.appendChild(viewProgramBtn);
    }

    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    inputArea.style.display = "block";
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

addMessage(
  "Welcome! This app helps you prepare for an upcoming event where you will be speaking in front of other people.",
  false,
);

setTimeout(showQuestion, 500);

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pageId = btn.getAttribute("data-page");
    if (!pageId) return;

    document
      .querySelectorAll(".nav-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById(pageId)?.classList.add("active");

    if (pageId === "page-course") {
      renderCoursePage();
    } else if (pageId === "page-programme") {
      renderProgrammePage();
    }
  });
});
