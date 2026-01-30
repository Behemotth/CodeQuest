const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const levelsContainer = document.getElementById("levelsContainer");
const output = document.getElementById("output");
const codeInput = document.getElementById("codeInput");
const validateBtn = document.getElementById("validateBtn");

let currentLevel = null;

levels.forEach(level => {
  const div = document.createElement("div");
  div.className = "level";
  div.innerHTML = `<h3>${level.title}</h3><p>${level.description}</p>`;

  div.onclick = () => {
    currentLevel = level;
    output.textContent = `Desafio: ${level.description}`;
  };

  levelsContainer.appendChild(div);
});

validateBtn.onclick = () => {
  if (!currentLevel) {
    output.textContent = "Selecione um nível primeiro.";
    return;
  }

  const success = validateCode(codeInput.value, currentLevel.expected);

  output.textContent = success
    ? "✅ Código correto! Fase concluída!"
    : "❌ Código incorreto. Tente novamente.";
};
