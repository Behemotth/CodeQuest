const views = document.querySelectorAll(".view");
const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    views.forEach(v => v.classList.remove("active"));
    document.getElementById(btn.dataset.view).classList.add("active");

    // Dispara evento customizado quando o editor abre
    if (btn.dataset.view === "editor") {
      document.dispatchEvent(new Event("editor:open"));
    }
  });
});

// Abre o mapa por padrão
document.getElementById("map").classList.add("active");
