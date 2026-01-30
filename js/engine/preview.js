let htmlInput, cssInput, jsInput, preview, runBtn;

function initEditor() {
  htmlInput = document.getElementById("htmlInput");
  cssInput  = document.getElementById("cssInput");
  jsInput   = document.getElementById("jsInput");
  preview   = document.getElementById("preview");
  runBtn    = document.getElementById("runCode");

  if (!htmlInput || !cssInput || !jsInput || !preview || !runBtn) {
    console.warn("Editor ainda não disponível");
    return;
  }

  htmlInput.value = "<h1>Olá, CodeQuest</h1>";
  cssInput.value  = "body { background:#111; color:#0f0; }";
  jsInput.value   = "console.log('Editor pronto');";

  runBtn.onclick = updatePreview;

  [htmlInput, cssInput, jsInput].forEach(el =>
    el.addEventListener("input", updatePreview)
  );

  updatePreview();
}

function updatePreview() {
  const code = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${cssInput.value}</style>
</head>
<body>
${htmlInput.value}
<script>${jsInput.value}<\/script>
</body>
</html>
  `;
  preview.srcdoc = code;
}

// Inicializa SOMENTE quando o editor for aberto
document.addEventListener("editor:open", initEditor);
