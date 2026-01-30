document.addEventListener("DOMContentLoaded", function() {
    let loadingScreen = document.getElementById("loadingScreen");
    let mainScreen = document.getElementById("mainScreen");
    let consoleElement = document.getElementById("console");
    let userInput = document.getElementById("userInput");
    let minigameLink = document.getElementById("minigameLink");
    let minigameScreen = document.getElementById("minigameScreen");
    let passwordInput = document.getElementById("passwordInput");
    let submitPasswordButton = document.getElementById("submitPassword");
    let gameMessage = document.getElementById("gameMessage");
    let backToTerminalButton = document.getElementById("backToTerminal");

    // Simula o processo de "carregamento" da plataforma
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainScreen.style.display = 'block';
            mainScreen.classList.add('fadeIn');
            simulateCommandLine();
        }, 2000);
    }, 4000);

    function simulateCommandLine() {
        setTimeout(() => {
            consoleElement.innerHTML += `<p>Conexão estabelecida com a Deep Web...<span class="blink">_</span></p>`;
            userInput.focus();
        }, 2500);
    }

    // Função para capturar e processar comandos digitados
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let command = userInput.value.trim();
            processCommand(command);
            userInput.value = '';
        }
    });

    function processCommand(command) {
        consoleElement.innerHTML += `<p class="command">Comando: ${command}</p>`;
        if (command === "help") {
            consoleElement.innerHTML += `<p class="output">Lista de comandos disponíveis:<br>- help<br>- ls<br>- connect <em>URL</em><br>- minigame<br>- exit</p>`;
        } else if (command === "minigame") {
            openMinigame();
        } else if (command === "ls") {
            consoleElement.innerHTML += `<p class="output">Lista de diretórios:<br>- /Tor<br>- /Hidden Services<br>- /Encrypted</p>`;
        } else if (command.startsWith("connect")) {
            let url = command.split(" ")[1];
            consoleElement.innerHTML += `<p class="output">Conectando-se a <strong>${url}</strong>...</p>`;
        } else if (command === "exit") {
            consoleElement.innerHTML += `<p class="output">Desconectando... Acesso finalizado.</p>`;
            setTimeout(() => {
                window.location.href = "https://www.google.com";
            }, 2000);
        } else {
            consoleElement.innerHTML += `<p class="output">Comando não reconhecido. Digite 'help' para uma lista de comandos.</p>`;
        }
    }

    // Função para abrir o minigame
    function openMinigame() {
        mainScreen.style.display = 'none';
        minigameScreen.style.display = 'block';
    }

    // Função para processar o minigame
    submitPasswordButton.addEventListener("click", function() {
        let enteredPassword = passwordInput.value.trim();

        if (enteredPassword === "senha123") {
            gameMessage.textContent = "Senha correta! Acesso autorizado.";
            backToTerminalButton.style.display = 'inline-block';
        } else {
            gameMessage.textContent = "Senha incorreta. Tente novamente.";
        }
    });

    // Voltar ao terminal
    backToTerminalButton.addEventListener("click", function() {
        minigameScreen.style.display = 'none';
        mainScreen.style.display = 'block';
    });
});
