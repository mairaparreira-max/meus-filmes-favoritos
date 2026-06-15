/* ============================================================
   DADOS DOS EPISÓDIOS — Todo Mundo Odeia o Chris
   Fonte: Comedy Central Brasil (YouTube)
   ============================================================ */
const episodes = [

  /* ── TEMPORADA 1 ─────────────────────────────────────── */
  {
    id: 1,
    season: "1",
    ep: "T1 · E1",
    title: "O Dia dos Meninos",
    desc: "Chris enfrenta mais um dia caótico no bairro enquanto tenta sobreviver à escola, ao trabalho do pai e às travessuras dos irmãos.",
    videoId: "Tg5cCikBIIE",
    views: "835 mil visualizações",
    duration: "22 min"
  },
  {
    id: 2,
    season: "1",
    ep: "T1 · E2",
    title: "Entre Tapas e Beijos",
    desc: "Chris tenta impressionar uma garota enquanto Julius conta cada centavo gasto em casa e Rochelle mantém a ordem com mão de ferro.",
    videoId: "qQT4xfmVDfk",
    views: "316 mil visualizações",
    duration: "22 min"
  },
  {
    id: 3,
    season: "1",
    ep: "T1 · E3",
    title: "Chris Perdeu Tudo",
    desc: "Chris se vê sem saída quando perde tudo e não tem onde morar. A família mostra como lida com situações extremas.",
    videoId: "6TKISqBfcUc",
    views: "412 mil visualizações",
    duration: "22 min"
  },
  {
    id: 4,
    season: "1",
    ep: "T1 · E4",
    title: "Ninguém Conseguiu Comer",
    desc: "Uma refeição simples se transforma em um caos total quando a família Rock tenta sentar à mesa para jantar.",
    videoId: "_smWEl1xUDs",
    views: "289 mil visualizações",
    duration: "22 min"
  },
  {
    id: 5,
    season: "1",
    ep: "T1 · E5",
    title: "Tudo Dá Errado",
    desc: "Chris aprende da pior forma que procrastinar nunca é uma boa ideia. Tudo dá errado quando se espera até o último momento.",
    videoId: "ZoGO31GvxTk",
    views: "198 mil visualizações",
    duration: "22 min"
  },
  {
    id: 6,
    season: "1",
    ep: "T1 · E6",
    title: "Vergonha",
    desc: "Chris passa por uma situação extremamente constrangedora na escola e precisa lidar com as consequências.",
    videoId: "ZwXgTIjEC30",
    views: "174 mil visualizações",
    duration: "22 min"
  },

  /* ── TEMPORADA 2 ─────────────────────────────────────── */
  {
    id: 7,
    season: "2",
    ep: "T2 · E1",
    title: "Quarentena",
    desc: "A família Rock enfrenta uma quarentena inesperada e o convívio forçado revela o melhor e o pior de cada um.",
    videoId: "uftjTE1WhT0",
    views: "221 mil visualizações",
    duration: "22 min"
  },
  {
    id: 8,
    season: "2",
    ep: "T2 · E2",
    title: "Chapa Quente",
    desc: "Chris se mete em uma confusão quente ao tentar ajudar um amigo e acaba pagando o pato por algo que não fez.",
    videoId: "Im42C14NDrI",
    views: "163 mil visualizações",
    duration: "22 min"
  },
  {
    id: 9,
    season: "2",
    ep: "T2 · E3",
    title: "Natal",
    desc: "O Natal na casa dos Rock é diferente do que qualquer criança poderia imaginar. Julius tem seus próprios planos para as festas.",
    videoId: "1AnyZ0rigiw",
    views: "445 mil visualizações",
    duration: "22 min"
  },
  {
    id: 10,
    season: "2",
    ep: "T2 · E4",
    title: "Exemplos",
    desc: "Chris tenta ser um bom exemplo para os irmãos, mas as coisas saem completamente do controle.",
    videoId: "ywIphGsCnfI",
    views: "169 mil visualizações",
    duration: "22 min"
  },
  {
    id: 11,
    season: "2",
    ep: "T2 · E5",
    title: "A Entrevista",
    desc: "Chris descobre que ter uma família estruturada pode ser um problema inesperado quando tenta entrar na faculdade.",
    videoId: "vLEPEArFuzg",
    views: "203 mil visualizações",
    duration: "22 min"
  },
  {
    id: 12,
    season: "2",
    ep: "T2 · E6",
    title: "O Nascimento do Suco de Fruta",
    desc: "Julius descobre uma nova fonte de economia doméstica enquanto Chris tenta sobreviver a mais um dia na escola.",
    videoId: "Tg5cCikBIIE",
    views: "187 mil visualizações",
    duration: "22 min"
  },

  /* ── TEMPORADA 3 ─────────────────────────────────────── */
  {
    id: 13,
    season: "3",
    ep: "T3 · E1",
    title: "O Sumiço do Besourinho",
    desc: "O brinquedo favorito de Tonya some misteriosamente e toda a família vira suspeita. Chris, claro, é o principal acusado.",
    videoId: "Tg5cCikBIIE",
    views: "312 mil visualizações",
    duration: "22 min"
  },
  {
    id: 14,
    season: "3",
    ep: "T3 · E2",
    title: "O Filho do Chris",
    desc: "Uma situação inusitada faz Chris ser confundido com pai de uma criança, gerando uma série de mal-entendidos hilários.",
    videoId: "qQT4xfmVDfk",
    views: "276 mil visualizações",
    duration: "22 min"
  },
  {
    id: 15,
    season: "3",
    ep: "T3 · E3",
    title: "Julius Controla Tudo",
    desc: "Julius decide que vai controlar cada detalhe da casa para economizar ainda mais dinheiro. A família não aguenta.",
    videoId: "6TKISqBfcUc",
    views: "398 mil visualizações",
    duration: "22 min"
  },
  {
    id: 16,
    season: "3",
    ep: "T3 · E4",
    title: "O Medo da Tonya",
    desc: "Tonya enfrenta um medo que paralisa a família inteira. Chris tenta ajudar, mas só piora a situação.",
    videoId: "_smWEl1xUDs",
    views: "241 mil visualizações",
    duration: "22 min"
  },
  {
    id: 17,
    season: "3",
    ep: "T3 · E5",
    title: "Aulas de Etiqueta",
    desc: "Rochelle decide que a família precisa de aulas de etiqueta. O resultado é um desastre cômico de proporções épicas.",
    videoId: "ZoGO31GvxTk",
    views: "334 mil visualizações",
    duration: "22 min"
  },
  {
    id: 18,
    season: "3",
    ep: "T3 · E6",
    title: "Chris Briga com Greg",
    desc: "A amizade de Chris e Greg é colocada à prova quando uma briga séria os separa. Quem vai ceder primeiro?",
    videoId: "ZwXgTIjEC30",
    views: "289 mil visualizações",
    duration: "22 min"
  },

  /* ── TEMPORADA 4 ─────────────────────────────────────── */
  {
    id: 19,
    season: "4",
    ep: "T4 · E1",
    title: "O Fim Trágico de Sr. Omar",
    desc: "O vizinho mais excêntrico do bairro enfrenta uma situação dramática e Chris acaba no meio de tudo.",
    videoId: "6TKISqBfcUc",
    views: "521 mil visualizações",
    duration: "22 min"
  },
  {
    id: 20,
    season: "4",
    ep: "T4 · E2",
    title: "Rochelle Ganhou na Loteria",
    desc: "Rochelle acredita ter ganhado na loteria e a família enlouquece com os planos mirabolantes para gastar o dinheiro.",
    videoId: "qQT4xfmVDfk",
    views: "467 mil visualizações",
    duration: "22 min"
  },
  {
    id: 21,
    season: "4",
    ep: "T4 · E3",
    title: "Chris vai a um Encontro Especial",
    desc: "Chris finalmente consegue um encontro com a garota dos seus sonhos. Mas, claro, nada sai como planejado.",
    videoId: "Tg5cCikBIIE",
    views: "389 mil visualizações",
    duration: "22 min"
  },
  {
    id: 22,
    season: "4",
    ep: "T4 · E4",
    title: "Rochelle Manda na Escola",
    desc: "Rochelle decide se envolver nos assuntos da escola de Chris e transforma a vida do filho em um pesadelo.",
    videoId: "Gn34mLwYEzY",
    views: "298 mil visualizações",
    duration: "22 min"
  },
  {
    id: 23,
    season: "4",
    ep: "T4 · E5",
    title: "6 Cenas Mais Engraçadas",
    desc: "Uma compilação das situações mais hilariantes vividas por Chris e sua família ao longo das temporadas.",
    videoId: "4MSOm6B0H6Y",
    views: "1,2 milhão de visualizações",
    duration: "18 min"
  },
  {
    id: 24,
    season: "4",
    ep: "T4 · E6",
    title: "Momentos do Julius — Temporada 1",
    desc: "Os melhores momentos do pai mais econômico da televisão. Julius e suas frases sobre o preço de tudo.",
    videoId: "IjB-T_C3Vuw",
    views: "743 mil visualizações",
    duration: "25 min"
  }
];

/* ============================================================
   ESTADO DA APLICAÇÃO
   ============================================================ */
let currentSeason = "all";
let currentSearch = "";

/* ============================================================
   RENDERIZAÇÃO DOS CARDS
   ============================================================ */
function renderEpisodes(list) {
  const grid = document.getElementById("gridContainer");
  const noResults = document.getElementById("noResults");

  if (list.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  grid.innerHTML = list.map(ep => `
    <article class="episode-card" onclick="openModal(${ep.id})" title="Assistir: ${ep.title}">
      <div class="card-thumb">
        <iframe
          src="https://www.youtube.com/embed/${ep.videoId}?rel=0&modestbranding=1"
          title="${ep.title}"
          loading="lazy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="play-overlay">
          <div class="play-btn">▶</div>
        </div>
        <span class="season-tag">Temp. ${ep.season}</span>
        <span class="duration-tag">${ep.duration}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${ep.title}</h3>
        <p class="card-desc">${ep.desc}</p>
        <div class="card-meta">
          <span class="card-views">👁 ${ep.views}</span>
          <span class="card-ep-num">${ep.ep}</span>
        </div>
      </div>
    </article>
  `).join("");
}

/* ============================================================
   FILTROS
   ============================================================ */
function applyFilters() {
  let filtered = episodes;

  if (currentSeason !== "all") {
    filtered = filtered.filter(ep => ep.season === currentSeason);
  }

  if (currentSearch.trim() !== "") {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(ep =>
      ep.title.toLowerCase().includes(q) ||
      ep.desc.toLowerCase().includes(q) ||
      ep.ep.toLowerCase().includes(q)
    );
  }

  renderEpisodes(filtered);
}

function filterBySeason(season, btn) {
  currentSeason = season;

  // Atualiza botões ativos
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  applyFilters();
}

function filterEpisodes() {
  currentSearch = document.getElementById("searchInput").value;
  applyFilters();
}

// Pesquisa em tempo real ao digitar
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("input", filterEpisodes);
  renderEpisodes(episodes);
});

/* ============================================================
   MODAL — PLAYER COMPLETO
   ============================================================ */
function openModal(id) {
  const ep = episodes.find(e => e.id === id);
  if (!ep) return;

  // Preenche o modal
  document.getElementById("modalIframe").src =
    `https://www.youtube.com/embed/${ep.videoId}?autoplay=1&rel=0&modestbranding=1`;
  document.getElementById("modalTitle").textContent = ep.title;
  document.getElementById("modalDesc").textContent = ep.desc;
  document.getElementById("modalSeason").textContent = `📺 ${ep.ep}`;
  document.getElementById("modalViews").textContent = `👁 ${ep.views}`;

  // Abre o modal
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  // Fecha apenas se clicar no overlay (fora da caixa)
  if (event.target === document.getElementById("modalOverlay")) {
    closeModalBtn();
  }
}

function closeModalBtn() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";

  // Para o vídeo ao fechar
  setTimeout(() => {
    document.getElementById("modalIframe").src = "";
  }, 300);
}

// Fechar modal com tecla ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModalBtn();
});
