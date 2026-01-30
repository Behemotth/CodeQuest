// Inicializando o AOS para animações de rolagem
AOS.init();

// Função para criar o gráfico de estatísticas
function createStatsChart() {
    const ctx = document.getElementById('deepWebStatsChart').getContext('2d');
    const data = {
        labels: ['Sites de Educação', 'Sites de Serviços', 'Sites de Comércio', 'Sites Ilícitos'],
        datasets: [{
            label: 'Tipos de Sites na Deep Web',
            data: [1000, 2000, 5000, 12000], // Dados fictícios
            backgroundColor: ['#f39c12', '#e74c3c', '#3498db', '#2ecc71'],
            borderColor: ['#f39c12', '#e74c3c', '#3498db', '#2ecc71'],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'pie',
        data: data
    };

    new Chart(ctx, config);
}

// Carregar as notícias (Exemplo fictício de API)
function loadNews() {
    const newsList = document.getElementById('newsList');
    const newsData = [
        { title: "Deep Web e a Privacidade Online", url: "#" },
        { title: "Como o Tor garante o anonimato", url: "#" }
    ];

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `<h3>${news.title}</h3><a href="${news.url}" target="_blank">Leia mais</a>`;
        newsList.appendChild(newsItem);
    });
}

// Mapa interativo
function createMap() {
    var map = L.map('map').setView([51.505, -0.09], 2);  // Definindo o centro do mapa e o zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Exemplo de pontos na Deep Web
    L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('DuckDuckGo - Pesquisa Privada')
        .openPopup();
    L.marker([48.8566, 2.3522]).addTo(map)
        .bindPopup('Facebook na Deep Web')
        .openPopup();
}

document.addEventListener('DOMContentLoaded', () => {
    createStatsChart();
    loadNews();
    createMap();
});
