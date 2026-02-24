import './style.css'

const form = document.getElementById("coachForm") as HTMLFormElement | null;
const resultDiv = document.getElementById("result") as HTMLDivElement | null;

if (form) {
  form.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const data: {
      goal: string | null;
      level: string | null;
      days: string | null;
      time: string | null;
    } = {
      goal: formData.get("goal") as string | null,
      level: formData.get("level") as string | null,
      days: formData.get("days") as string | null,
      time: formData.get("time") as string | null
    };

    try {
      const response = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result: { program: string } = await response.json();

      if (resultDiv) {
        resultDiv.innerText = result.program;
      }
    } catch (error) {
      console.error("Error generating program:", error);
    }
  });
}