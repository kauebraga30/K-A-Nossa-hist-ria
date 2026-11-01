// ============================================================
//  CONFIGURE AQUI
// ============================================================
 
// Início da contagem (ano, mês, dia, hora, minuto). O mês começa em 0: janeiro = 0, agosto = 7.
const INICIO_NAMORO = new Date(2025, 7, 16, 0, 0, 0); // 16/08/2025
 
// Dia em que ficaram pela primeira vez (usado em "Nossa história em números").
const DATA_PRIMEIRA_VEZ = new Date(2023, 5, 17); // 17/06/2023
 
// A sua carta. Aparece escrita letra por letra quando ela abrir o envelope.
// Use \n para pular linha.
const CARTA = `A,\n\nEscreva aqui a sua carta para ela.\nFale do que sentiu quando a conheceu em 2023, do que passou quando voltaram a conversar em 2025 e do que sente hoje.\n\nCom amor,\nK`;
 
// Música de fundo (opcional). Coloque o arquivo numa pasta "musica" e escreva o caminho.
// Exemplo: "musica/nossa-musica.mp3". Deixe "" para não ter música.
const MUSICA = "";
 
// Cada item abaixo é um "filme" = um momento de vocês.
// Para adicionar outro, copie um bloco { ... }, e cole depois da vírgula.
//
//  titulo        nome do filme
//  data          quando aconteceu (texto livre)
//  generos       etiquetas, ex: ["Romance", "Aventura"]
//  categoria     a fileira onde o filme aparece
//  duracao       "duração" do momento (brincadeira)
//  classificacao ex: "Livre", "+18 de saudade"
//  nota          ex: "10"
//  sinopse       resumo curto (aparece no pôster e no destaque)
//  historia      a história completa (use \n para pular linha)
//  foto          pôster/capa: coloque a imagem na pasta "fotos"
//  galeria       outras fotos desse momento (opcional)
//  emoji         aparece se não houver foto
//  destaque      true = vira o filme principal do topo (só um)
//  embreve       true = momento que ainda vai acontecer
const FILMES = [
  {
    titulo: "Começo das Aulas",
    data: "Início de 2023",
    generos: ["Romance", "Drama"],
    categoria: "2023 · Onde tudo começou",
    duracao: "O primeiro capítulo",
    classificacao: "Livre",
    nota: "9.0",
    sinopse: "Início das aulas de 2023. Dois desconhecidos, uma sala de aula e o começo de uma história que ainda ia dar voltas.",
    historia: "Foi no começo das aulas de 2023 que a gente se conheceu.\nNa época, ninguém imaginava que essa história ia ter mais de um capítulo.\n\n(Escreva aqui mais detalhes: como foi o primeiro contato, o que você achou dela, o que lembra desse dia.)",
    foto: "fotos/filme1.jpg",
    galeria: [],
    emoji: "📚"
  },
  {
    titulo: "A Primeira Vez",
    data: "17/06/2023",
    generos: ["Romance"],
    categoria: "2023 · Onde tudo começou",
    duracao: "Uma noite que ficou na memória",
    classificacao: "Livre",
    nota: "10",
    sinopse: "17 de junho de 2023: o dia em que ficamos pela primeira vez.",
    historia: "No dia 17 de junho de 2023, ficamos pela primeira vez.\nFoi o primeiro sinal de que existia algo entre a gente.\n\n(Escreva aqui como foi: onde estavam, o que sentiram, o que aconteceu depois.)",
    foto: "fotos/filme2.jpg",
    galeria: [],
    emoji: "✨"
  },
  {
    titulo: "Silêncio",
    data: "Julho de 2023",
    generos: ["Drama"],
    categoria: "2023 · Onde tudo começou",
    duracao: "Quase dois anos",
    classificacao: "+14 de saudade",
    nota: "7.0",
    sinopse: "Em julho de 2023, a gente parou de se falar. Todo bom filme tem um momento em que parece que acabou.",
    historia: "Em julho daquele mesmo ano, acabamos parando de nos falar.\nO tempo passou, cada um seguiu o seu caminho, mas a história não tinha terminado.\n\n(Escreva aqui como foi esse período, se você pensava nela, o que mudou em você.)",
    foto: "fotos/filme3.jpg",
    galeria: [],
    emoji: "🌙"
  },
  {
    titulo: "O Reencontro",
    data: "Março de 2025",
    generos: ["Romance", "Drama"],
    categoria: "2025 · O segundo capítulo",
    duracao: "Uma mensagem que mudou tudo",
    classificacao: "Livre",
    nota: "10",
    sinopse: "Em março de 2025, voltamos a conversar. O filme que parecia ter acabado ganhou uma continuação.",
    historia: "Em março de 2025, voltamos a nos falar.\nAos poucos, fomos nos reaproximando, conversa por conversa.\n\n(Escreva aqui quem mandou a primeira mensagem, o que foi dito, o que você sentiu.)",
    foto: "fotos/filme4.jpg",
    galeria: [],
    emoji: "💬"
  },
  {
    titulo: "O Primeiro Encontro",
    data: "2025",
    generos: ["Romance", "Comédia"],
    categoria: "2025 · O segundo capítulo",
    duracao: "Algumas horas que pareceram minutos",
    classificacao: "Livre",
    nota: "10",
    sinopse: "Em 2023 a gente só ficou. Em 2025 teve o primeiro encontro de verdade.",
    historia: "Em 2023 eu só tinha conhecido e ficado com ela. Foi só em 2025 que tivemos o nosso primeiro encontro.\n\n(Escreva aqui a data, o lugar, o que fizeram, o que deu certo e o que deu errado.)",
    foto: "fotos/filme5.jpg",
    galeria: [],
    emoji: "☕"
  },
  {
    titulo: "O Pedido",
    data: "16/08/2025",
    generos: ["Romance"],
    categoria: "2025 · O segundo capítulo",
    duracao: "Uma pergunta, uma resposta",
    classificacao: "Livre",
    nota: "10",
    sinopse: "Em agosto de 2025, pedi ela em namoro. Uma história que começou em 2023 ganhou o seu melhor capítulo.",
    historia: "Em agosto de 2025, pedi ela em namoro.\nUma história que começou em 2023 ganhou um novo capítulo em 2025, quando tivemos a oportunidade de ficar juntos novamente.\n\n(Escreva aqui como foi o pedido: onde, como você falou, qual foi a reação dela.)",
    foto: "fotos/filme6.jpg",
    galeria: [],
    emoji: "💍",
    destaque: true
  },
  {
    titulo: "Nosso Próximo Capítulo",
    data: "Em breve",
    generos: ["Aventura", "Romance"],
    categoria: "Em breve nos cinemas",
    duracao: "A definir",
    classificacao: "Livre",
    nota: "—",
    sinopse: "Ainda não aconteceu, mas já tem lugar guardado na nossa história.",
    historia: "Um plano de vocês: uma viagem, uma conquista, uma casa, um sonho.\nEscreva o que vem por aí.",
    foto: "fotos/filme7.jpg",
    galeria: [],
    emoji: "🍿",
    embreve: true
  }
];
 
// ============================================================
//  DAQUI PARA BAIXO NÃO PRECISA MEXER
// ============================================================
 
const $ = (sel, el = document) => el.querySelector(sel);
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
 
// evita que algum texto com < ou & quebre a página
const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));
 
const reduzir = matchMedia('(prefers-reduced-motion: reduce)').matches;
const podeHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
 
// a abertura só toca uma vez por sessão
try { sessionStorage.setItem('ka-intro', '1'); } catch (e) {}
 
// ---------- 1) Contador em tempo real ----------
function atualizarContador() {
  const agora = new Date();
 
  let anos = agora.getFullYear() - INICIO_NAMORO.getFullYear();
  let meses = agora.getMonth() - INICIO_NAMORO.getMonth();
  let dias = agora.getDate() - INICIO_NAMORO.getDate();
  let horas = agora.getHours() - INICIO_NAMORO.getHours();
  let minutos = agora.getMinutes() - INICIO_NAMORO.getMinutes();
  let segundos = agora.getSeconds() - INICIO_NAMORO.getSeconds();
 
  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0)  { minutos += 60;  horas--; }
  if (horas < 0)    { horas += 24;    dias--; }
  if (dias < 0) {
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    meses--;
  }
  if (meses < 0) { meses += 12; anos--; }
  if (agora < INICIO_NAMORO) anos = meses = dias = horas = minutos = segundos = 0;
 
  const pad = (n) => String(n).padStart(2, '0');
  const plural = (n, um, varios) => (n === 1 ? um : varios);
  const por = (id, valor, rotulo) => {
    const el = document.getElementById(id);
    el.textContent = valor;
    if (rotulo) el.nextElementSibling.textContent = rotulo;
  };
  por('c-anos', anos, plural(anos, 'ano', 'anos'));
  por('c-meses', meses, plural(meses, 'mês', 'meses'));
  por('c-dias', dias, plural(dias, 'dia', 'dias'));
  por('c-horas', pad(horas), plural(horas, 'hora', 'horas'));
  por('c-minutos', pad(minutos));
  por('c-segundos', pad(segundos));
}
atualizarContador();
setInterval(atualizarContador, 1000);
 
$('#data-inicio').textContent = INICIO_NAMORO.toLocaleDateString('pt-BR');
$('#ano-atual').textContent = new Date().getFullYear();
 
// ---------- 2) Próximo mesversário ----------
function dataNoMes(ano, mes, dia) {
  const ultimo = new Date(ano, mes + 1, 0).getDate();
  return new Date(ano, mes, Math.min(dia, ultimo));
}
 
function mostrarMesversario() {
  const el = $('#mesversario');
  const agora = new Date();
  const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  if (hoje < new Date(INICIO_NAMORO.getFullYear(), INICIO_NAMORO.getMonth(), INICIO_NAMORO.getDate())) return;
 
  const dia = INICIO_NAMORO.getDate();
  let alvo = dataNoMes(hoje.getFullYear(), hoje.getMonth(), dia);
  if (alvo < hoje) alvo = dataNoMes(hoje.getFullYear(), hoje.getMonth() + 1, dia);
 
  const dias = Math.round((alvo - hoje) / 86400000);
  const n = (alvo.getFullYear() - INICIO_NAMORO.getFullYear()) * 12 + alvo.getMonth() - INICIO_NAMORO.getMonth();
  if (n <= 0) return;
 
  const nome = n % 12 === 0
    ? `${n / 12} ${n / 12 === 1 ? 'ano' : 'anos'} de namoro`
    : `${n}º mesversário`;
 
  el.hidden = false;
  if (dias === 0) {
    el.classList.add('hoje');
    el.innerHTML = `🧡 <span>Hoje é o nosso <b>${nome}</b>!</span>`;
  } else {
    el.innerHTML = `<span>Próximo capítulo: <b>${nome}</b> em <b>${dias} ${dias === 1 ? 'dia' : 'dias'}</b></span>`;
  }
}
mostrarMesversario();
 
// ---------- 3) Título do destaque, letra por letra ----------
function animarTitulo(el, texto) {
  el.setAttribute('aria-label', texto);
  el.textContent = '';
  let i = 0;
  const palavras = texto.split(' ');
  palavras.forEach((palavra, k) => {
    const w = document.createElement('span');
    w.className = 'palavra';
    w.setAttribute('aria-hidden', 'true');
    [...palavra].forEach((ch) => {
      const s = document.createElement('span');
      s.className = 'letra';
      s.style.setProperty('--i', i++);
      s.textContent = ch;
      w.appendChild(s);
    });
    el.appendChild(w);
    if (k < palavras.length - 1) el.appendChild(document.createTextNode(' '));
  });
}
 
// ---------- 4) Capa do filme (foto, ou emoji + gradiente se não houver foto) ----------
function capaHTML(f, idx, alt) {
  return `<span class="capa g${idx % 5}">
    <span class="emoji" aria-hidden="true">${esc(f.emoji || '🎬')}</span>
    <img src="${esc(f.foto)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">
  </span><span class="brilho"></span>`;
}
 
function metaItens(f) {
  const itens = [];
  if (f.nota) itens.push(`<li class="nota">★ ${esc(f.nota)}</li>`);
  if (f.data) itens.push(`<li>${esc(f.data)}</li>`);
  if (f.classificacao) itens.push(`<li><span class="classif">${esc(f.classificacao)}</span></li>`);
  if (f.duracao) itens.push(`<li>${esc(f.duracao)}</li>`);
  return itens.join('');
}
 
// inclina o pôster seguindo o mouse (só em telas com mouse)
function ativarTilt(el, max = 9) {
  if (!podeHover || reduzir) return;
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--ry', ((px - 0.5) * 2 * max).toFixed(2) + 'deg');
    el.style.setProperty('--rx', ((0.5 - py) * 2 * max).toFixed(2) + 'deg');
    el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
    el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
  });
  el.addEventListener('pointerleave', () => {
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  });
}
 
// ---------- 5) Destaque do topo ----------
const indicePrincipal = Math.max(0, FILMES.findIndex((f) => f.destaque));
const principal = FILMES[indicePrincipal];
 
animarTitulo($('#hero-titulo'), principal.titulo);
$('#hero-meta').innerHTML = metaItens(principal);
$('#hero-sinopse').textContent = principal.sinopse;
$('#hero-poster').innerHTML = capaHTML(principal, indicePrincipal, `Pôster de ${principal.titulo}`);
ativarTilt($('#hero-poster'), 10);
 
// luz que segue o mouse no topo
const hero = $('#inicio');
if (podeHover && !reduzir) {
  let pendente = false;
  hero.addEventListener('pointermove', (e) => {
    if (pendente) return;
    pendente = true;
    requestAnimationFrame(() => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', e.clientX - r.left + 'px');
      hero.style.setProperty('--my', e.clientY - r.top + 'px');
      hero.classList.add('com-mouse');
      pendente = false;
    });
  });
  hero.addEventListener('pointerleave', () => hero.classList.remove('com-mouse'));
}
 
// ---------- 6) Faixa rolando ----------
(function montarMarquee() {
  const itens = FILMES.map((f) => `<span>${esc(f.data)} <b>${esc(f.titulo)}</b></span>`).join('<i>✦</i>');
  const bloco = `<div class="marquee-bloco">${itens}<i>✦</i></div>`;
  $('#marquee').innerHTML = bloco + bloco;
})();
 
// ---------- 7) Revelar ao rolar + números que contam ----------
const ioReveal = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('vis');
    ioReveal.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
 
function observarReveal() {
  document.querySelectorAll('.rev:not(.vis)').forEach((el) => {
    if (reduzir) el.classList.add('vis');
    else ioReveal.observe(el);
  });
}
 
function contar(el, alvo) {
  const fmt = (n) => Math.round(n).toLocaleString('pt-BR');
  if (reduzir || alvo === 0) { el.textContent = fmt(alvo); return; }
  const dur = 1700;
  const t0 = performance.now();
  const passo = (t) => {
    const p = clamp((t - t0) / dur, 0, 1);
    el.textContent = fmt(alvo * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}
 
const ioNumeros = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (!e.isIntersecting) return;
    contar(e.target, Number(e.target.dataset.alvo));
    ioNumeros.unobserve(e.target);
  });
}, { threshold: 0.6 });
 
(function prepararNumeros() {
  const agora = new Date();
  const dias = (a, b) => Math.max(0, Math.floor((b - a) / 86400000));
  let meses = (agora.getFullYear() - INICIO_NAMORO.getFullYear()) * 12 + agora.getMonth() - INICIO_NAMORO.getMonth();
  if (agora.getDate() < INICIO_NAMORO.getDate()) meses--;
 
  const valores = {
    'n-dias': dias(INICIO_NAMORO, agora),
    'n-meses': Math.max(0, meses),
    'n-primeira': dias(DATA_PRIMEIRA_VEZ, agora),
    'n-caps': FILMES.filter((f) => !f.embreve).length
  };
  Object.entries(valores).forEach(([id, v]) => {
    const el = document.getElementById(id);
    el.dataset.alvo = v;
    ioNumeros.observe(el);
  });
})();
 
// ---------- 8) Catálogo ----------
const linhasEl = $('#linhas');
const filtrosEl = $('#filtros');
let filtroAtual = 'Todos';
 
function criarCard(f, idx, ordem) {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'card rev' + (f.embreve ? ' embreve' : '');
  el.style.setProperty('--d', Math.min(ordem * 70, 350) + 'ms');
  el.setAttribute('aria-label', `${f.titulo}, ${f.data}. Abrir`);
  el.innerHTML = `
    <span class="card-img">
      ${capaHTML(f, idx, `Pôster de ${f.titulo}`)}
      ${f.embreve ? '<span class="etiqueta">Em breve</span>' : ''}
    </span>
    <span class="card-info">
      <strong>${esc(f.titulo)}</strong>
      <span class="card-data">${esc(f.data)}</span>
      <span class="card-tags">${f.generos.map(esc).join(' · ')}</span>
    </span>`;
  ativarTilt($('.card-img', el), 8);
  el.addEventListener('click', () => abrirFilme(idx, el));
  return el;
}
 
function renderizarCatalogo() {
  linhasEl.innerHTML = '';
 
  const grupos = new Map();
  FILMES.forEach((f, idx) => {
    if (filtroAtual !== 'Todos' && !f.generos.includes(filtroAtual)) return;
    if (!grupos.has(f.categoria)) grupos.set(f.categoria, []);
    grupos.get(f.categoria).push([f, idx]);
  });
 
  if (grupos.size === 0) {
    linhasEl.innerHTML = '<p class="vazio">Nenhum filme com esse gênero ainda.</p>';
    return;
  }
 
  grupos.forEach((lista, categoria) => {
    const grupo = document.createElement('section');
    grupo.className = 'grupo';
    grupo.innerHTML = `
      <div class="grupo-topo">
        <h3>${esc(categoria)}</h3>
        <span class="grupo-qtd">${lista.length} ${lista.length === 1 ? 'filme' : 'filmes'}</span>
      </div>
      <div class="grade"></div>`;
    const grade = $('.grade', grupo);
    lista.forEach(([f, idx], ordem) => grade.appendChild(criarCard(f, idx, ordem)));
    linhasEl.appendChild(grupo);
  });
  observarReveal();
}
 
function renderizarFiltros() {
  const generos = ['Todos', ...new Set(FILMES.flatMap((f) => f.generos))];
  filtrosEl.innerHTML = '';
  generos.forEach((g) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = g;
    b.setAttribute('aria-pressed', String(g === filtroAtual));
    b.addEventListener('click', () => {
      filtroAtual = g;
      renderizarFiltros();
      renderizarCatalogo();
    });
    filtrosEl.appendChild(b);
  });
}
 
renderizarFiltros();
renderizarCatalogo();
 
// ---------- 9) Linha do tempo ----------
const tl = $('#tl');
(function montarTimeline() {
  FILMES.forEach((f, idx) => {
    const li = document.createElement('li');
    li.className = 'tl-item rev' + (f.embreve ? ' embreve' : '');
    li.innerHTML = `
      <div class="tl-card">
        <span class="tl-data">${esc(f.data)}</span>
        <h3>${esc(f.titulo)}</h3>
        <p>${esc(f.sinopse)}</p>
        <button type="button" class="tl-ver">${f.embreve ? 'Ver o que vem por aí' : 'Ver o filme'} →</button>
      </div>`;
    $('.tl-ver', li).addEventListener('click', (e) => abrirFilme(idx, e.currentTarget));
    tl.appendChild(li);
  });
})();
 
function atualizarTimeline() {
  const r = tl.getBoundingClientRect();
  const linhaVista = innerHeight * 0.6;
  tl.style.setProperty('--p', clamp((linhaVista - r.top) / r.height, 0, 1).toFixed(4));
  tl.querySelectorAll('.tl-item').forEach((it) => {
    it.classList.toggle('ativo', it.getBoundingClientRect().top + 30 < linhaVista);
  });
}
 
// ---------- 10) Corações e confete ----------
const confete = $('#confete');
const cctx = confete.getContext('2d');
let particulas = [];
let animandoConfete = false;
 
function ajustarConfete() {
  const d = Math.min(window.devicePixelRatio || 1, 2);
  confete.width = innerWidth * d;
  confete.height = innerHeight * d;
  cctx.setTransform(d, 0, 0, d, 0, 0);
}
ajustarConfete();
window.addEventListener('resize', ajustarConfete);
 
function lancarCoracoes(x = innerWidth / 2, y = innerHeight / 2, qtd = 70) {
  if (reduzir) return;
  const cores = ['#ff7a1a', '#ffb067', '#e85d04', '#ffd2a8', '#fff1e4'];
  for (let i = 0; i < qtd; i++) {
    particulas.push({
      x, y,
      vx: (Math.random() - 0.5) * 10,
      vy: -(Math.random() * 9 + 4),
      rot: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.25,
      s: 12 + Math.random() * 18,
      vida: 0,
      max: 110 + Math.random() * 70,
      forma: Math.random() < 0.65 ? '♥' : '✦',
      cor: cores[Math.floor(Math.random() * cores.length)]
    });
  }
  if (!animandoConfete) { animandoConfete = true; requestAnimationFrame(passoConfete); }
}
 
function passoConfete() {
  cctx.clearRect(0, 0, innerWidth, innerHeight);
  particulas = particulas.filter((p) => p.vida < p.max);
  particulas.forEach((p) => {
    p.vida++;
    p.vy += 0.2;
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    cctx.save();
    cctx.globalAlpha = clamp(1 - p.vida / p.max, 0, 1);
    cctx.translate(p.x, p.y);
    cctx.rotate(p.rot);
    cctx.fillStyle = p.cor;
    cctx.font = `${p.s}px serif`;
    cctx.textAlign = 'center';
    cctx.textBaseline = 'middle';
    cctx.fillText(p.forma, 0, 0);
    cctx.restore();
  });
  if (particulas.length) requestAnimationFrame(passoConfete);
  else { animandoConfete = false; cctx.clearRect(0, 0, innerWidth, innerHeight); }
}
 
$('#logo').addEventListener('click', (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  lancarCoracoes(r.left + r.width / 2, r.top + r.height / 2, 40);
});
 
// ---------- 11) Brasas flutuando no topo ----------
(function brasas() {
  const cv = $('#brasas');
  if (reduzir) { cv.remove(); return; }
  const ctx = cv.getContext('2d');
  let W = 0, H = 0, lista = [], visivel = true, rodando = false;
 
  function ajustar() {
    const r = hero.getBoundingClientRect();
    const d = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    cv.width = W * d; cv.height = H * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  const nova = (inicio) => ({
    x: Math.random() * W,
    y: inicio ? Math.random() * H : H + 10,
    r: 0.7 + Math.random() * 2,
    vy: 0.25 + Math.random() * 0.7,
    fase: Math.random() * 6.28,
    amp: 0.2 + Math.random() * 0.5,
    a: 0.25 + Math.random() * 0.55,
    br: Math.random() * 6.28,
    g: 120 + Math.random() * 80
  });
 
  ajustar();
  const total = innerWidth < 700 ? 26 : 55;
  lista = Array.from({ length: total }, () => nova(true));
  window.addEventListener('resize', ajustar);
 
  function quadro() {
    if (!visivel || document.hidden) { rodando = false; return; }
    ctx.clearRect(0, 0, W, H);
    lista.forEach((p, i) => {
      p.y -= p.vy;
      p.fase += 0.012;
      p.x += Math.sin(p.fase) * p.amp;
      p.br += 0.05;
      if (p.y < -10) lista[i] = nova(false);
      const alfa = p.a * (0.65 + 0.35 * Math.sin(p.br)) * clamp(p.y / (H * 0.35), 0, 1);
      ctx.fillStyle = `rgba(255,${p.g | 0},40,${(alfa * 0.18).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, 6.283); ctx.fill();
      ctx.fillStyle = `rgba(255,${(p.g + 40) | 0},70,${alfa.toFixed(3)})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
    });
    requestAnimationFrame(quadro);
  }
  function iniciar() { if (!rodando) { rodando = true; requestAnimationFrame(quadro); } }
 
  new IntersectionObserver((es) => { visivel = es[0].isIntersecting; if (visivel) iniciar(); }).observe(hero);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) iniciar(); });
  iniciar();
})();
 
// ---------- 12) Carta ----------
const envelope = $('#envelope');
const papel = $('#papel');
const cartaTexto = $('#carta-texto');
let cartaAberta = false;
 
function digitar(el, texto) {
  if (reduzir) { el.textContent = texto; return; }
  el.classList.add('digitando');
  let i = 0;
  (function proximo() {
    el.textContent = texto.slice(0, ++i);
    if (i >= texto.length) { el.classList.remove('digitando'); return; }
    const c = texto[i - 1];
    setTimeout(proximo, c === '\n' ? 320 : /[.,!?]/.test(c) ? 160 : 26);
  })();
}
 
envelope.addEventListener('click', () => {
  if (cartaAberta) return;
  cartaAberta = true;
  envelope.classList.add('aberta');
  envelope.setAttribute('aria-expanded', 'true');
  papel.classList.add('aberta');
  papel.setAttribute('aria-hidden', 'false');
  const r = envelope.getBoundingClientRect();
  lancarCoracoes(r.left + r.width / 2, r.top + r.height / 2, 80);
  setTimeout(() => digitar(cartaTexto, CARTA), reduzir ? 0 : 700);
});
 
// ---------- 13) Página do filme ----------
const modal = $('#modal');
const caixa = $('#modal-caixa');
const conteudo = $('#modal-conteudo');
const botaoFechar = $('#modal-fechar');
let filmeAberto = 0;
let ultimoFoco = null;
 
function abrirFilme(idx, origem) {
  const jaAberto = modal.classList.contains('aberto');
  if (!jaAberto) ultimoFoco = origem || document.activeElement;
 
  filmeAberto = idx;
  const f = FILMES[idx];
  const anterior = FILMES[idx - 1];
  const proximo = FILMES[idx + 1];
 
  conteudo.innerHTML = `
    <div class="m-capa">
      ${capaHTML(f, idx, `Capa de ${f.titulo}`)}
      <div class="m-capa-texto"><h3 id="m-titulo">${esc(f.titulo)}</h3></div>
    </div>
    <div class="m-corpo">
      <div>
        <p class="m-sinopse">${esc(f.sinopse)}</p>
        <h4 class="m-sub">A história</h4>
        <p class="m-historia">${esc(f.historia)}</p>
        ${f.galeria && f.galeria.length ? `
          <h4 class="m-sub">Cenas</h4>
          <div class="m-galeria">${f.galeria.map((src) =>
            `<img src="${esc(src)}" alt="Cena de ${esc(f.titulo)}" loading="lazy" onerror="this.remove()">`).join('')}</div>` : ''}
      </div>
      <aside class="m-ficha" aria-label="Ficha técnica">
        <dl>
          <div><dt>Data</dt><dd>${esc(f.data)}</dd></div>
          <div><dt>Duração</dt><dd>${esc(f.duracao)}</dd></div>
          <div><dt>Classificação</dt><dd>${esc(f.classificacao)}</dd></div>
          <div><dt>Nota</dt><dd class="nota">★ ${esc(f.nota)}</dd></div>
          <div><dt>Gêneros</dt><dd><span class="generos">${f.generos.map((g) => `<span class="genero">${esc(g)}</span>`).join('')}</span></dd></div>
        </dl>
      </aside>
    </div>
    <div class="m-nav">
      <button type="button" id="m-ant" ${anterior ? '' : 'disabled'}>← ${anterior ? esc(anterior.titulo) : 'Início'}</button>
      <button type="button" id="m-prox" ${proximo ? '' : 'disabled'}>${proximo ? esc(proximo.titulo) : 'Fim'} →</button>
    </div>`;
 
  $('#m-ant').addEventListener('click', () => anterior && abrirFilme(idx - 1));
  $('#m-prox').addEventListener('click', () => proximo && abrirFilme(idx + 1));
 
  modal.classList.add('aberto');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
  if (!jaAberto) botaoFechar.focus();
  if (f.destaque) setTimeout(() => lancarCoracoes(innerWidth / 2, innerHeight * 0.32, 55), 300);
}
 
function fecharFilme() {
  modal.classList.remove('aberto');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
}
 
botaoFechar.addEventListener('click', fecharFilme);
modal.addEventListener('click', (e) => { if (e.target === modal) fecharFilme(); });
 
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('aberto')) return;
 
  if (e.key === 'Escape') return fecharFilme();
  if (e.key === 'ArrowLeft' && FILMES[filmeAberto - 1]) return abrirFilme(filmeAberto - 1);
  if (e.key === 'ArrowRight' && FILMES[filmeAberto + 1]) return abrirFilme(filmeAberto + 1);
 
  // mantém o foco do teclado dentro da janela
  if (e.key === 'Tab') {
    const foco = [...caixa.querySelectorAll('button:not(:disabled), a[href]')];
    if (!foco.length) return;
    const primeiro = foco[0];
    const ultimo = foco[foco.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  }
});
 
// ---------- 14) Botões do topo e menu ----------
$('#btn-assistir').addEventListener('click', (e) => abrirFilme(indicePrincipal, e.currentTarget));
$('#hero-poster').addEventListener('click', (e) => abrirFilme(indicePrincipal, e.currentTarget));
 
function sortearMomento(e) {
  const disponiveis = FILMES.map((f, i) => i).filter((i) => !FILMES[i].embreve);
  abrirFilme(disponiveis[Math.floor(Math.random() * disponiveis.length)], e.currentTarget);
}
$('#btn-sorteio').addEventListener('click', sortearMomento);
$('#btn-sorteio-nav').addEventListener('click', (e) => { fecharMenu(); sortearMomento(e); });
 
const menu = $('#menu');
const menuToggle = $('#menu-toggle');
function fecharMenu() {
  menu.classList.remove('aberto');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}
menuToggle.addEventListener('click', () => {
  const abrir = !menu.classList.contains('aberto');
  menu.classList.toggle('aberto', abrir);
  menuToggle.setAttribute('aria-expanded', String(abrir));
  menuToggle.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', fecharMenu));
 
// ---------- 15) Música (opcional) ----------
const musicaBtn = $('#musica-btn');
if (MUSICA) {
  const audio = new Audio(MUSICA);
  audio.loop = true;
  audio.volume = 0.5;
  musicaBtn.hidden = false;
  musicaBtn.addEventListener('click', () => {
    const tocar = audio.paused;
    if (tocar) audio.play().catch(() => {}); else audio.pause();
    musicaBtn.classList.toggle('tocando', tocar);
    musicaBtn.setAttribute('aria-pressed', String(tocar));
    musicaBtn.setAttribute('aria-label', tocar ? 'Pausar música' : 'Tocar música');
  });
}
 
// ---------- 16) Rolagem: progresso, cabeçalho, topo, linha do tempo ----------
const topo = $('#topo');
const progresso = $('#progresso');
const voltarTopo = $('#voltar-topo');
let esperando = false;
 
function aoRolar() {
  if (esperando) return;
  esperando = true;
  requestAnimationFrame(() => {
    esperando = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    topo.classList.toggle('rolou', y > 8);
    progresso.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
    voltarTopo.classList.toggle('visivel', y > 700);
    atualizarTimeline();
  });
}
window.addEventListener('scroll', aoRolar, { passive: true });
window.addEventListener('resize', aoRolar);
voltarTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduzir ? 'auto' : 'smooth' }));
aoRolar();
 
observarReveal();