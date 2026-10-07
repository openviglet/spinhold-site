/* Spinhold promo site: the language switch, the voxel sprites, the reveal cards, the
   gallery and the sample ring. The ring is a 2D sketch of the game's rules, seen end on:
   the streak window, the dash meter and the rescue rewards take the values in
   game/core/multiplier.gd, game/actors/ship.gd and game/core/rewards.gd; the names are the
   world bible's (docs/design/world.md). */
(() => {
  'use strict';

  /* ================================================================ i18n */

  // English lives in the HTML; this is the Portuguese for every data-i18n key.
  const PT = {
    'meta.title': 'Spinhold · Um shooter neon em anel da Viglet Games',
    'meta.description': 'Spinhold é um shooter arcade pilotado ao redor de uma colônia espacial que gira. Despedace a Lattice cubo por cubo, resgate as pessoas que ela leva embora e voe com elas até o Elevador. Da Viglet Games, em desenvolvimento para a Steam.',
    'nav.skip': 'Pular para o conteúdo',
    'nav.label': 'Seções',
    'nav.language': 'Idioma',
    'nav.world': 'O mundo',
    'nav.lattice': 'A Lattice',
    'nav.try': 'Pilote',
    'nav.peek': 'Telas',
    'nav.next': 'O que vem aí',

    'hero.status': 'Em desenvolvimento · Em breve na Steam',
    'hero.presents': 'Viglet Games apresenta',
    'hero.title': 'Voe o anel. Quebre o enxame. <em>Traga todos pra casa.</em>',
    'hero.lead': 'Spinhold é um shooter arcade pilotado ao redor de uma colônia espacial que gira. As máquinas que a construíram se voltaram contra ela e a estão desmontando cubo por cubo, com gente e tudo. Você pilota o último tender do casco.',
    'hero.play': 'Pilote um anel de amostra',
    'hero.more': 'Conheça a colônia',
    'hero.fact.rings': '3 anéis, 3 Capatazes',
    'hero.fact.enemies': '6 tipos de Lattice',
    'hero.fact.voxels': 'Tudo se desfaz em cubos',
    'hero.fact.pad': 'Feito para controle',
    'hero.alt': 'Uma cena de Spinhold: um enxame de Motes laranja sobre a cidade de voxels violeta no casco da colônia, o feixe verde do Elevador e uma sequência ×2',
    'hero.caption': 'Capturado do jogo, fase dois',

    'world.kicker': 'O mundo',
    'world.title': 'Uma colônia que gira para que seu povo tenha peso',
    'world.intro': 'O Spinhold é um cilindro de quilômetros, girando no espaço profundo. Pelo seu eixo corre a Linha Solar, a luz que é o seu sol. A cidade no casco é onde você voa, um anel de cada vez.',
    'world.colony.title': 'O Spinhold',
    'world.colony.text': 'Crescido célula por célula por máquinas construtoras, gerações atrás. Por isso o mundo inteiro é feito de voxels: tudo aqui saiu dos mesmos cubos.',
    'world.lattice.title': 'A Lattice',
    'world.lattice.text': 'As construtoras acordaram com defeito. Ainda seguem a ordem mais antiga, construir o Spinhold, mas perderam a planta: desmontam tudo e reconstroem como mais delas mesmas.',
    'world.holders.title': 'Os Holders',
    'world.holders.text': 'O povo da colônia: equipes de casco, artilheiros, médicos e engenheiros sem nave própria. A Lattice os leva porque acha que são pedaços do casco que se soltaram.',
    'holders.alt': 'Três Holders do jogo: colonos de voxel em creme e coral, com olhos de ponto, bochechas coradas e uma luz verde acesa, o do meio comemorando',
    'holders.title': 'A única coisa quentinha num mundo neon e frio',
    'holders.text': 'Derrube um Gleaner e o Holder que ele carregava cai de volta no casco. Pegue, leve pelo Elevador, e o núcleo da colônia o protege. Nada sombrio aparece na tela: um Holder levado pela Lattice simplesmente se apaga.',

    'lattice.kicker': 'Conheça a Lattice',
    'lattice.title': 'Seis máquinas, uma cor cada',
    'lattice.intro': 'Cada tipo de Lattice brilha numa cor própria, então um anel lotado continua legível de relance. Todos são feitos de cubos, e todos se desfazem neles.',
    'foe.mote.name': 'Cisco',
    'foe.mote.text': 'O enxame pequeno. Vinte de uma vez, te perseguindo ao redor do anel.',
    'foe.lancer.name': 'Lanceiro',
    'foe.lancer.text': 'Mantém distância e dispara tiros lentos e mirados.',
    'foe.spur.name': 'Espora',
    'foe.spur.text': 'Brota do casco e atira direto para cima.',
    'foe.diver.name': 'Mergulhador',
    'foe.diver.text': 'Paira, traça uma linha até você e mergulha por ela.',
    'foe.sower.name': 'Semeador',
    'foe.sower.text': 'Cruza o anel sem virar, largando sementes que esperam para estourar.',
    'foe.gleaner.name': 'Respigador',
    'foe.gleaner.text': 'Sobe do casco carregando um Holder. Se chegar ao topo, some com ele.',
    'foremen.title': '…e um Capataz no fim de cada anel',
    'foremen.intro': 'Seu núcleo ignora qualquer tiro até os pontos fracos caírem. Toque num cartão para ver quem manda em cada anel.',
    'foremen.tap': 'Toque para revelar',
    'foremen.bow.ring': 'Capataz da Proa',
    'foremen.bow.name': 'O Pedreiro',
    'foremen.bow.text': 'Uma torre do casco que ergue muros de luz, ferida só pelas aberturas que abre.',
    'foremen.waist.ring': 'Capataz da Cintura',
    'foremen.waist.name': 'O Tear',
    'foremen.waist.text': 'Uma serpente que tece pelo anel e se enrola na sua lancha.',
    'foremen.stern.ring': 'Capataz da Popa',
    'foremen.stern.name': 'A Fornalha',
    'foremen.stern.text': 'A que transforma Holders em células. Ninguém sabe ainda quem lhe deu as ordens.',

    'tender.kicker': 'O tender',
    'tender.title': 'Uma nave de manutenção de casco, armada às pressas',
    'tender.intro': 'Os tenders voavam pelo casco consertando o que a Lattice construía. O seu é o último ainda no ar, e tem três truques para um anel lotado.',
    'tools.dash.name': 'Arrancada',
    'tools.dash.text': 'Segure e o tender rasga o enxame intocável, destruindo o que tocar, até o medidor secar.',
    'tools.pulse.name': 'Pulso',
    'tools.pulse.text': 'Uma onda de choque que dá a volta no anel pelos dois lados, limpando toda máquina e todo tiro no caminho.',
    'tools.burst.name': 'Rajada Solar',
    'tools.burst.text': 'Os abates a carregam. Cheia, o tender puxa o sol da colônia e o dispara à frente por quatro segundos em câmera lenta.',
    'streak.title': 'Mantenha a sequência viva',
    'streak.text': 'Cada abate sobe o multiplicador um degrau, até ×99, e reabastece a janela. Passe dois segundos e meio sem abater, ou perca o tender, e ele volta a um.',
    'streak.label': 'A sequência subindo abate a abate',
    'rescue.title': 'Todo resgate rende',
    'rescue.text': 'Cada entrega pelo Elevador paga o próximo item da lista: uma vida, um pulso, um escudo, e depois pontos que crescem com cada Holder entregue de uma vez. Salve todos de um anel e ganhe um bônus.',
    'rescue.life': 'Vida',
    'rescue.pulse': 'Pulso',
    'rescue.shield': 'Escudo',
    'rescue.points': 'Pontos',

    'try.kicker': 'Pilote',
    'try.title': 'Um anel de amostra, aqui mesmo',
    'try.intro': 'A colônia vista de frente, com o seu tender sempre no topo. Abata os Motes, solte Holders dos Gleaners, pegue-os e leve pelo Elevador verde. Cinco ondas.',
    'try.score': 'Pontos',
    'try.streak': 'Sequência',
    'try.lives': 'Vidas',
    'try.pulses': 'Pulsos',
    'try.saved': 'Salvos',
    'keys.move': 'voar ao redor do anel',
    'keys.climb': 'subir e descer',
    'keys.fire': 'atirar para a esquerda ou direita',
    'keys.dash': 'arrancada',
    'keys.pulse': 'pulso',
    'try.note': 'Um controle também funciona. No celular, arraste para voar e o tender atira sozinho. É uma amostra web em 2D feita a partir das regras do jogo, não o jogo: sem som, sem Lancers nem Capatazes, e sem os voxels.',
    'try.label': 'Anel de amostra do Spinhold. Setas voam, J e L atiram, Shift faz a arrancada e B solta um pulso.',
    'try.ready': 'Pronto no casco',
    'try.readyText': 'Cinco ondas. Mantenha os Holders longe das mãos da Lattice.',
    'try.launch': 'Decolar',
    'touch.dash': 'Arrancada',
    'touch.pulse': 'Pulso',

    'peek.kicker': 'Telas',
    'peek.title': 'Direto do jogo',
    'peek.intro': 'Cada imagem aqui foi capturada da versão em execução. Os nomes na tela ainda são provisórios, e muita coisa vai mudar até o lançamento.',
    'chip.wip': 'Em produção',
    'chip.plan': 'Planejado',
    'peek.waist': 'O anel do Meio, e o rastro de sementes de um Sower',
    'peek.waist.alt': 'O anel do Meio em violeta: o tender voando sobre a cidade de voxels, uma fileira de sementes e um bando de Motes à frente',
    'peek.mason': 'O Pedreiro, Capataz da Proa, com um respiro aberto em brasa',
    'peek.mason.alt': 'O Pedreiro, uma torre de blocos brancos e violeta do chão ao teto sobre a cidade azul, com um respiro aberto em brasa na lateral',
    'peek.loom': 'O Tear, Capataz do Meio, ondulando sobre a cidade',
    'peek.loom.alt': 'O Tear, uma serpente de segmentos azuis e magenta em arco sobre a cidade violeta, de mandíbulas abertas',
    'peek.kiln': 'A Fornalha, Capataz da Popa, com a mão erguida para golpear',
    'peek.kiln.alt': 'A Fornalha, um titã violeta de pé sobre a cidade vermelha com uma das mãos erguida para golpear, o tender passando ao lado',
    'peek.bow': 'A Proa, onde todo turno começa',
    'peek.bow.alt': 'O anel da Proa em azul: o tender atirando ao longo do casco entre blocos altos de voxel, um Mote à direita',
    'peek.swarm': 'Um enxame, o Elevador e uma sequência começando',
    'peek.swarm.alt': 'Um enxame de Motes laranja se aproximando sobre a cidade violeta, o feixe verde do Elevador atrás e uma sequência ×2 no canto',
    'peek.close': 'Fechar',

    'next.kicker': 'O que vem aí',
    'next.title': 'Quem você salva vira sua tripulação',
    'next.intro': 'O jogo arcade acima já é jogável hoje. Isto é o que está sendo construído em cima dele.',
    'next.crew.title': 'Todo resgate é uma escolha',
    'next.crew.text': 'Entregue um Holder e escolha um entre três para entrar no seu tender. Uma artilheira, um mecânico de doca, uma médica: cada um faz a mesma função de antes a bordo, e dois juntos podem virar algo que nenhum é sozinho.',
    'next.tenders.title': 'Três tenders',
    'next.tenders.text': 'Wren, o equilibrado que você pilota hoje; Swift, leve e rápido; Bastion, lento e pesado.',
    'next.watch.title': 'O plantão',
    'next.watch.text': 'O turno do dia, igual para todo piloto, com uma tentativa que vale.',
    'next.heat.title': 'Calor',
    'next.heat.text': 'A Lattice aprende com cada turno que perde e volta mais afiada.',
    'next.coop.title': 'Dois tenders, um anel',
    'next.coop.text': 'Co-op de sofá numa tela só, e online pelo Remote Play Together da Steam.',
    'next.fair.title': 'Uma pontuação justa',
    'next.fair.text': 'Desbloqueios trazem escolhas, nunca poder. Sem loja, sem caixas de recompensa, um preço só.',
    'next.quote': '“Ninguém mais fica pra trás. Voa.”',
    'next.quoteBy': 'Vó Ruth, médica, ao entrar na tripulação',

    'studio.title': 'Criamos aventuras épicas para a Steam.',
    'studio.text': 'A Viglet Games é uma publisher movida a criatividade e carinho. Depois do match-3 de pelúcia Cottony, Spinhold é a nossa primeira viagem ao neon.',
    'studio.play': 'Jogos feitos para o controle',
    'studio.connect': 'Experiências que conectam',
    'studio.detail': 'Criatividade em cada detalhe',

    'finale.title': 'Spinhold está a caminho da Steam',
    'finale.text': 'A página na loja ainda não abriu. Enquanto isso, mande esta página para quem ainda te deve um recorde.',
    'finale.share': 'Compartilhar esta página',
    'finale.soon': 'Página na Steam em breve',

    'foot.text': '© 2026 Viglet Games. Spinhold está em desenvolvimento, e tudo o que aparece aqui pode mudar.',
  };

  // Strings the script writes itself, in both languages.
  const TEXT = {
    en: {
      wave: n => `Wave ${n} of 5`,
      rings: ['The Bow', 'The Bow', 'The Waist', 'The Waist', 'The Stern'],
      taken: 'A Holder was taken',
      reward: ['Extra life', 'Pulse', 'Shield', p => `+${p} points`],
      saved: n => (n === 1 ? '1 Holder safe' : `${n} Holders safe`),
      winTitle: 'Shift complete',
      loseTitle: 'Tender down',
      points: s => `${s} points`,
      endText: (saved, lost) => `${saved} brought home, ${lost} taken. The full game adds the voxels, the Foremen, sound and a crew made of everyone you save.`,
      again: 'Fly again',
      live: (w, s) => `Wave ${w}. Score ${s}.`,
      copied: 'Link copied. Go send it to someone.',
      shareTitle: 'Spinhold',
      shareText: 'A neon ring shooter from Viglet Games, coming to Steam.',
    },
    pt: {
      wave: n => `Onda ${n} de 5`,
      rings: ['A Proa', 'A Proa', 'O Meio', 'O Meio', 'A Popa'],
      taken: 'Um Holder foi levado',
      reward: ['Vida extra', 'Pulso', 'Escudo', p => `+${p} pontos`],
      saved: n => (n === 1 ? '1 Holder a salvo' : `${n} Holders a salvo`),
      winTitle: 'Turno completo',
      loseTitle: 'Tender abatido',
      points: s => `${s} pontos`,
      endText: (saved, lost) => `${saved} levados pra casa, ${lost} perdidos. O jogo completo traz os voxels, os Capatazes, som e uma tripulação feita de todos que você salvar.`,
      again: 'Voar de novo',
      live: (w, s) => `Onda ${w}. Pontos: ${s}.`,
      copied: 'Link copiado. Agora é só mandar para alguém.',
      shareTitle: 'Spinhold',
      shareText: 'Um shooter neon em anel da Viglet Games, a caminho da Steam.',
    },
  };

  let lang = 'en';
  const t = key => TEXT[lang][key];
  const number = n => n.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US');

  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const attrNodes = [...document.querySelectorAll('[data-i18n-attr]')];
  const english = new Map();
  textNodes.forEach(node => english.set(node.dataset.i18n, node.innerHTML));
  const attrPairs = node => node.dataset.i18nAttr.split(';').map(pair => pair.split(':'));
  attrNodes.forEach(node => attrPairs(node).forEach(([attr, key]) => english.set(key, node.getAttribute(attr))));

  function setLang(next) {
    lang = next === 'pt' ? 'pt' : 'en';
    const pick = key => (lang === 'pt' && key in PT ? PT[key] : english.get(key));
    textNodes.forEach(node => { node.innerHTML = pick(node.dataset.i18n); });
    attrNodes.forEach(node => attrPairs(node).forEach(([attr, key]) => node.setAttribute(attr, pick(key))));
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    try { localStorage.setItem('spinhold-lang', lang); } catch { /* private mode */ }
    document.dispatchEvent(new CustomEvent('spinhold:lang'));
  }

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => setLang(button.dataset.lang));
  });

  let stored = null;
  try { stored = localStorage.getItem('spinhold-lang'); } catch { /* private mode */ }
  const browserPt = (navigator.languages || [navigator.language]).some(l => /^pt\b/i.test(l || ''));
  setLang(stored || (browserPt ? 'pt' : 'en'));

  /* ================================================================ sprites */

  // 8 by 8 voxel faces in each machine's in-game neon (the colours in its .tscn), and a
  // Holder in the cream and coral of the colonist study
  const SPRITES = {
    mote: { '#': '#FF5933', o: '#FFD0C0', rows: ['#..##..#', '.######.', '##o##o##', '.######.', '.######.', '##.##.##', '.######.', '#..##..#'] },
    lancer: { '#': '#FFCC33', o: '#FFF3C4', rows: ['...##...', '..#oo#..', '#.####.#', '########', '########', '#.#..#.#', '..#..#..', '..#..#..'] },
    spur: { '#': '#FF8026', o: '#FFE0C8', rows: ['...##...', '...oo...', '..####..', '..####..', '.######.', '.##..##.', '########', '########'] },
    diver: { '#': '#FF4DCC', o: '#FFD6F4', rows: ['#......#', '##....##', '###..###', '.##oo##.', '..####..', '..####..', '...##...', '...##...'] },
    sower: { '#': '#99CCFF', r: '#FF3322', o: '#E8F4FF', rows: ['..####..', '.#oooo#.', '########', '#.#..#.#', '........', '..r..r..', '........', '...r....'] },
    gleaner: { '#': '#4DFF66', o: '#D8FFE0', rows: ['..####..', '.######.', '##o##o##', '########', '.#....#.', '#......#', '#......#', '##....##'] },
    holder: { c: '#FFE3C4', d: '#3A2330', p: '#FF9C8A', r: '#FF7A59', rows: ['.cccccc.', '.cdccdc.', '.pccccp.', '.ccddcc.', 'rrrrrrrr', '.rrrrrr.', '.cc..cc.', '.cc..cc.'] },
  };

  function paintSprite(ctx, name, x, y, cell) {
    const sprite = SPRITES[name];
    sprite.rows.forEach((row, r) => {
      [...row].forEach((ch, c) => {
        if (ch === '.') return;
        ctx.fillStyle = sprite[ch];
        ctx.fillRect(x + c * cell, y + r * cell, cell, cell);
      });
    });
  }

  document.querySelectorAll('canvas[data-sprite]').forEach(canvas => {
    paintSprite(canvas.getContext('2d'), canvas.dataset.sprite, 0, 0, 1);
  });

  /* ================================================================ reveal cards */

  document.querySelectorAll('.reveal').forEach(card => {
    card.addEventListener('click', () => {
      card.setAttribute('aria-pressed', String(card.getAttribute('aria-pressed') !== 'true'));
    });
  });

  /* ================================================================ gallery */

  const lightbox = document.getElementById('lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    document.querySelectorAll('.shot-open').forEach(button => {
      button.addEventListener('click', () => {
        const thumb = button.querySelector('img');
        image.src = button.dataset.full;
        image.alt = thumb.alt;
        caption.textContent = button.closest('figure').querySelector('figcaption span:last-child').textContent;
        lightbox.showModal();
      });
    });
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) lightbox.close();
    });
  }

  /* ================================================================ share */

  const share = document.getElementById('share');
  const shareStatus = document.getElementById('share-status');
  if (share) {
    share.addEventListener('click', async () => {
      const data = { title: t('shareTitle'), text: t('shareText'), url: location.href.split('#')[0] };
      try {
        if (navigator.share) {
          await navigator.share(data);
          return;
        }
        await navigator.clipboard.writeText(data.url);
        shareStatus.textContent = t('copied');
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        shareStatus.textContent = data.url;
      }
    });
  }

  /* ================================================================ sample ring */

  const arenaRoot = document.getElementById('arena');
  if (arenaRoot) sampleRing(arenaRoot);

  function sampleRing(root) {
    const canvas = root.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    // the view is 600 units square; the hull is a circle, and height is measured off it
    const VIEW = 600;
    const CX = 300;
    const CY = 330;
    const HULL = 150;
    const FLOOR = 16;
    const CEILING = 120;
    const TAU = Math.PI * 2;
    const LIFT = 0;
    const WAVES = 5;

    // ship.gd: speeds in surface units a second, the dash meter's drain and refill
    const TOP_SPEED = 230;
    const ACCEL = 900;
    const CLIMB = 150;
    const DASH_SPEED = 470;
    const DASH_DRAIN = 1.6;
    const DASH_REFILL = 0.35;
    const DASH_START = 0.3;
    const RESPAWN = 1.2;
    const BLINK = 2;
    // multiplier.gd and rewards.gd
    const WINDOW = 2.5;
    const PER_HOLDER = 500;
    const RING_COLOURS = ['#1A73FF', '#1A73FF', '#8C33FF', '#8C33FF', '#FF4033'];

    const hud = {
      score: document.getElementById('hud-score'),
      streak: document.getElementById('hud-streak'),
      lives: document.getElementById('hud-lives'),
      pulses: document.getElementById('hud-pulses'),
      saved: document.getElementById('hud-saved'),
    };
    const announceEl = root.querySelector('.announce');
    const startCard = document.getElementById('arena-start');
    const endCard = document.getElementById('arena-end');
    const live = document.getElementById('arena-live');

    const rand = (a, b) => a + Math.random() * (b - a);
    const wrap = a => ((a + Math.PI) % TAU + TAU) % TAU - Math.PI;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    // the city on the hull: blocks seeded once, drawn outward from it
    const city = [];
    for (let a = 0; a < TAU - 0.02;) {
      const width = rand(0.035, 0.08);
      if (Math.random() < 0.8 && Math.abs(wrap(a - LIFT)) > 0.08) city.push({ a, w: width, h: rand(4, 16) });
      a += width + rand(0.004, 0.02);
    }

    let state = null;
    let running = false;
    let visible = false;
    let last = 0;
    let camera = 0;
    const keys = new Set();
    const touch = { id: null, x: 0, y: 0, steer: 0, climb: 0 };
    const pressed = { dash: false, pulse: false };

    function fresh() {
      return {
        ship: { a: 0.25, h: 60, v: 0, facing: 1, cooldown: 0, gone: 0, blink: 0, meter: 1, dashing: false, shields: 0 },
        lives: 3, pulses: 2, score: 0, factor: 1, left: 0,
        wave: 0, between: 1.2, spawnQueue: [], spawnClock: 0,
        shots: [], motes: [], gleaners: [], holders: [], carried: 0,
        debris: [], ripples: [], waves: [], popups: [],
        saved: 0, lost: 0, rewardIndex: 0, over: false, shake: 0,
      };
    }

    /* ---------------------------------------------------------- geometry */

    function toScreen(a, h) {
      const angle = a - camera - Math.PI / 2;
      const r = HULL + h;
      return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)];
    }

    function distance(a1, h1, a2, h2) {
      const [x1, y1] = toScreen(a1, h1);
      const [x2, y2] = toScreen(a2, h2);
      return Math.hypot(x1 - x2, y1 - y2);
    }

    /* ---------------------------------------------------------- flow */

    function launch() {
      state = fresh();
      camera = state.ship.a;
      startCard.hidden = true;
      endCard.hidden = true;
      root.classList.add('live');
      running = true;
      root.focus({ preventScroll: true });
      updateHud();
      last = performance.now();
      requestAnimationFrame(frame);
    }

    function nextWave() {
      const s = state;
      s.wave++;
      if (s.wave > WAVES) {
        finish(true);
        return;
      }
      const w = s.wave;
      announce(`${t('rings')[w - 1]} · ${t('wave')(w)}`);
      live.textContent = t('live')(w, number(s.score));
      const queue = [];
      for (let i = 0; i < 6 + w * 4; i++) queue.push({ kind: 'mote', at: i < 6 ? 0.2 : 0.2 + (i - 6) * 0.35 });
      for (let i = 0; i < 1 + Math.floor(w / 2); i++) queue.push({ kind: 'gleaner', at: 0.8 + i * 2.5 });
      s.spawnQueue = queue.sort((x, y) => x.at - y.at);
      s.spawnClock = 0;
    }

    function spawn(kind) {
      const s = state;
      // never on top of the tender: at least a sixth of the ring away
      let a;
      do { a = rand(0, TAU); } while (Math.abs(wrap(a - s.ship.a)) < TAU / 6);
      if (kind === 'mote') {
        s.motes.push({ a, h: rand(35, CEILING - 5), warm: 0.6, speed: 80 + s.wave * 9 + rand(-8, 8), wobble: rand(0, TAU) });
      } else {
        s.gleaners.push({ a, h: 2, warm: 0.6, holder: true });
      }
    }

    function finish(won) {
      const s = state;
      s.over = true;
      running = false;
      root.classList.remove('live');
      renderEnd(won);
      endCard.hidden = false;
      endCard.querySelector('.end-again').focus({ preventScroll: true });
    }

    function renderEnd(won) {
      const s = state;
      endCard.querySelector('.end-title').textContent = won ? t('winTitle') : t('loseTitle');
      endCard.querySelector('.end-score').textContent = t('points')(number(s.score));
      endCard.querySelector('.end-text').textContent = t('endText')(s.saved, s.lost);
      endCard.querySelector('.end-again').textContent = t('again');
      endCard.dataset.won = String(won);
    }

    /* ---------------------------------------------------------- update */

    function input() {
      let steer = 0;
      let climb = 0;
      let fire = 0;
      if (keys.has('ArrowLeft') || keys.has('a')) steer -= 1;
      if (keys.has('ArrowRight') || keys.has('d')) steer += 1;
      if (keys.has('ArrowUp') || keys.has('w')) climb += 1;
      if (keys.has('ArrowDown') || keys.has('s')) climb -= 1;
      if (keys.has('j')) fire = -1;
      if (keys.has('l')) fire = 1;
      let dash = keys.has('Shift') || pressed.dash;
      let pulse = keys.has('b') || pressed.pulse;
      if (touch.id !== null) {
        steer = touch.steer;
        climb = touch.climb;
        fire = fire || 2;
      }
      const pad = navigator.getGamepads ? [...navigator.getGamepads()].find(Boolean) : null;
      if (pad) {
        const dead = v => (Math.abs(v) < 0.25 ? 0 : v);
        steer = steer || dead(pad.axes[0] || 0);
        climb = climb || -dead(pad.axes[1] || 0);
        const aim = dead(pad.axes[2] || 0);
        if (aim) fire = Math.sign(aim);
        else if (pad.buttons[0] && pad.buttons[0].pressed) fire = fire || 2;
        dash = dash || Boolean(pad.buttons[5] && pad.buttons[5].pressed);
        pulse = pulse || Boolean(pad.buttons[4] && pad.buttons[4].pressed);
      }
      return { steer: clamp(steer, -1, 1), climb: clamp(climb, -1, 1), fire, dash, pulse };
    }

    let pulseHeld = false;

    function update(dt) {
      const s = state;
      const ship = s.ship;
      const control = input();

      // the streak's window
      if (s.left > 0) {
        s.left -= dt;
        if (s.left <= 0) {
          s.factor = 1;
          updateHud();
        }
      }

      // the tender
      if (ship.gone > 0) {
        ship.gone -= dt;
        ship.dashing = false;
        if (ship.gone <= 0) ship.blink = BLINK;
      } else {
        ship.blink = Math.max(0, ship.blink - dt);
        const wants = control.dash && (ship.dashing || ship.meter >= DASH_START);
        ship.dashing = wants && ship.meter > 0;
        if (ship.dashing) ship.meter = Math.max(0, ship.meter - DASH_DRAIN * dt);
        else ship.meter = Math.min(1, ship.meter + DASH_REFILL * dt);

        if (control.steer) ship.facing = Math.sign(control.steer);
        const top = ship.dashing ? DASH_SPEED : TOP_SPEED;
        const target = ship.dashing ? ship.facing * DASH_SPEED : control.steer * top;
        const step = ACCEL * dt * (ship.dashing ? 3 : 1);
        ship.v += clamp(target - ship.v, -step, step);
        ship.a = (ship.a + (ship.v * dt) / (HULL + ship.h) + TAU) % TAU;
        ship.h = clamp(ship.h + control.climb * CLIMB * dt, FLOOR, CEILING);

        ship.cooldown -= dt;
        if (control.fire && ship.cooldown <= 0) {
          const dir = control.fire === 2 ? ship.facing : control.fire;
          ship.facing = dir;
          s.shots.push({ a: ship.a + (dir * 14) / (HULL + ship.h), h: ship.h, dir, life: 0.75 });
          ship.cooldown = 0.09;
        }
        if (control.pulse && !pulseHeld && s.pulses > 0) {
          s.pulses--;
          s.waves.push({ a: ship.a, reach: 0 });
          s.shake = 0.3;
          updateHud();
        }
      }
      pulseHeld = control.pulse;

      // the camera leads the ship a little in the way it faces, as the game's does
      const lead = ship.a + ship.facing * 0.18;
      camera += wrap(lead - camera) * Math.min(1, dt * 4);

      // waves
      if (s.between > 0) {
        s.between -= dt;
        if (s.between <= 0) nextWave();
      } else if (!s.over) {
        s.spawnClock += dt;
        while (s.spawnQueue.length && s.spawnQueue[0].at <= s.spawnClock) spawn(s.spawnQueue.shift().kind);
        if (!s.spawnQueue.length && !s.motes.length && !s.gleaners.length) s.between = 1.6;
      }
      if (s.over) return;

      // shots
      for (const shot of s.shots) {
        shot.a += (shot.dir * 640 * dt) / (HULL + shot.h);
        shot.life -= dt;
      }

      // motes chase along the shortest way round, bobbing a little so a pack spreads
      for (const mote of s.motes) {
        if (mote.warm > 0) { mote.warm -= dt; continue; }
        mote.wobble += dt * 3;
        const da = wrap(ship.a - mote.a);
        const step = (mote.speed * dt) / (HULL + mote.h);
        mote.a += clamp(da, -step, step);
        const goal = ship.gone > 0 ? mote.h : ship.h + Math.sin(mote.wobble) * 18;
        mote.h = clamp(mote.h + clamp(goal - mote.h, -mote.speed * 0.6 * dt, mote.speed * 0.6 * dt), FLOOR, CEILING);
      }
      // push motes apart so twenty read as twenty
      for (let i = 0; i < s.motes.length; i++) {
        for (let j = i + 1; j < s.motes.length; j++) {
          const m = s.motes[i];
          const n = s.motes[j];
          const da = wrap(n.a - m.a) * (HULL + m.h);
          const dh = n.h - m.h;
          const d = Math.hypot(da, dh);
          if (d > 0 && d < 16) {
            const push = ((16 - d) / d) * 0.5;
            m.a -= (da * push) / (HULL + m.h);
            n.a += (da * push) / (HULL + n.h);
            m.h -= dh * push;
            n.h += dh * push;
          }
        }
      }

      // gleaners rise; one reaching the ceiling takes its Holder with it
      for (const gleaner of s.gleaners) {
        if (gleaner.warm > 0) { gleaner.warm -= dt; continue; }
        gleaner.h += (9 + s.wave) * dt;
        if (gleaner.h >= CEILING) {
          gleaner.dead = true;
          if (gleaner.holder) {
            s.lost++;
            announce(t('taken'));
          }
        }
      }

      // holders fall, then wander the hull until caught
      for (const holder of s.holders) {
        if (holder.h > 0) {
          holder.vh -= 70 * dt;
          holder.h = Math.max(0, holder.h + holder.vh * dt);
        } else {
          holder.walk -= dt;
          if (holder.walk <= 0) { holder.dir = rand(-1, 1); holder.walk = rand(1, 2.5); }
          holder.a += (holder.dir * 10 * dt) / HULL;
        }
        if (ship.gone <= 0 && distance(holder.a, holder.h + 4, ship.a, ship.h) < 22) {
          holder.caught = true;
          s.carried++;
        }
      }
      s.holders = s.holders.filter(h => !h.caught);

      // the Lift
      if (s.carried && ship.gone <= 0 && Math.abs(wrap(ship.a - LIFT)) * (HULL + ship.h) < 14) deliver();

      // hits
      for (const shot of s.shots) {
        if (shot.life <= 0) continue;
        for (const list of [s.motes, s.gleaners]) {
          for (const foe of list) {
            if (foe.dead || foe.warm > 0) continue;
            if (distance(shot.a, shot.h, foe.a, foe.h) < (list === s.gleaners ? 14 : 11)) {
              shot.life = 0;
              kill(foe, list === s.gleaners);
              break;
            }
          }
          if (shot.life <= 0) break;
        }
      }
      if (ship.gone <= 0) {
        for (const list of [s.motes, s.gleaners]) {
          for (const foe of list) {
            if (foe.dead || foe.warm > 0) continue;
            if (distance(ship.a, ship.h, foe.a, foe.h) < 14) {
              if (ship.dashing) kill(foe, list === s.gleaners);
              else if (ship.blink <= 0) hitShip();
            }
          }
        }
      }

      // pulses sweep both ways round the ring
      for (const wave of s.waves) {
        wave.reach += dt * 4.2;
        for (const list of [s.motes, s.gleaners]) {
          for (const foe of list) {
            if (!foe.dead && foe.warm <= 0 && Math.abs(wrap(foe.a - wave.a)) <= wave.reach) kill(foe, list === s.gleaners, true);
          }
        }
      }
      s.waves = s.waves.filter(w => w.reach < Math.PI);

      s.shots = s.shots.filter(shot => shot.life > 0);
      s.motes = s.motes.filter(m => !m.dead);
      s.gleaners = s.gleaners.filter(g => !g.dead);

      // debris falls back onto the hull and bounces, as the game's cubes do
      for (const bit of s.debris) {
        bit.va *= 0.985;
        bit.a += bit.va * dt;
        bit.vh -= 90 * dt;
        bit.h += bit.vh * dt;
        if (bit.h < 0) { bit.h = 0; bit.vh *= -0.45; }
        bit.life -= dt;
      }
      s.debris = s.debris.filter(b => b.life > 0);
      for (const ripple of s.ripples) ripple.t += dt;
      s.ripples = s.ripples.filter(r => r.t < 0.9);
      for (const pop of s.popups) pop.t += dt;
      s.popups = s.popups.filter(p => p.t < 1);
      s.shake = Math.max(0, s.shake - dt);
    }

    function kill(foe, gleaner, byPulse = false) {
      const s = state;
      foe.dead = true;
      const value = gleaner ? 150 : 100;
      // a pulse kill pays its value, unmultiplied (bomb.gd)
      const gained = byPulse ? value : value * s.factor;
      s.score += gained;
      if (!byPulse) {
        s.factor = Math.min(99, s.factor + 1);
        s.left = WINDOW;
      }
      burst(foe.a, foe.h, gleaner ? '#4DFF66' : '#FF5933', gleaner ? 14 : 9);
      s.ripples.push({ a: foe.a, t: 0 });
      s.popups.push({ a: foe.a, h: foe.h, text: `+${gained}`, t: 0 });
      if (gleaner && foe.holder) s.holders.push({ a: foe.a, h: foe.h, vh: 10, dir: 0, walk: 0 });
      updateHud(true);
    }

    function hitShip() {
      const s = state;
      const ship = s.ship;
      if (ship.shields > 0) {
        ship.shields--;
        ship.blink = 1;
        return;
      }
      s.lives--;
      s.factor = 1;
      s.left = 0;
      burst(ship.a, ship.h, '#59F2FF', 16);
      ship.gone = RESPAWN;
      ship.v = 0;
      s.shake = 0.35;
      // carried Holders drop back to the hull
      for (let i = 0; i < s.carried; i++) s.holders.push({ a: ship.a + rand(-0.03, 0.03), h: ship.h, vh: 0, dir: 0, walk: 0 });
      s.carried = 0;
      updateHud();
      if (s.lives <= 0) finish(false);
    }

    // rewards.gd: life, pulse, shield, then points that grow with the square of the group
    function deliver() {
      const s = state;
      const count = s.carried;
      s.saved += count;
      s.carried = 0;
      const kind = s.rewardIndex % 4;
      s.rewardIndex++;
      let label = t('reward')[kind];
      if (kind === 0) s.lives++;
      else if (kind === 1) s.pulses++;
      else if (kind === 2) s.ship.shields++;
      else {
        const points = PER_HOLDER * count * count;
        s.score += points;
        label = label(number(points));
      }
      announce(`${t('saved')(count)} · ${label}`);
      updateHud();
    }

    function burst(a, h, colour, count) {
      const s = state;
      const n = reduced.matches ? Math.ceil(count / 2) : count;
      for (let i = 0; i < n; i++) {
        s.debris.push({ a, h, va: rand(-1.2, 1.2), vh: rand(10, 90), life: rand(0.8, 1.6), size: rand(2.5, 5), colour });
      }
    }

    /* ---------------------------------------------------------- draw */

    function draw() {
      const s = state;
      const ring = RING_COLOURS[Math.max(0, Math.min(WAVES, s ? s.wave || 1 : 1) - 1)];
      const scale = canvas.width / VIEW;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, VIEW, VIEW);
      if (s && s.shake > 0 && !reduced.matches) ctx.translate(rand(-4, 4) * s.shake * 3, rand(-4, 4) * s.shake * 3);

      // the Sunline, end on, and the ground inside the ring
      const pulse = 0.5 + Math.sin(performance.now() / 500) * 0.15;
      const core = ctx.createRadialGradient(CX, CY, 0, CX, CY, HULL);
      core.addColorStop(0, `rgba(255, 244, 200, ${0.9 * pulse + 0.1})`);
      core.addColorStop(0.08, 'rgba(255, 217, 77, .35)');
      core.addColorStop(0.35, 'rgba(106, 27, 154, .12)');
      core.addColorStop(1, 'rgba(11, 11, 26, .95)');
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(CX, CY, HULL, 0, TAU);
      ctx.fill();

      // the ceiling, faint
      ctx.strokeStyle = 'rgba(63, 232, 255, .12)';
      ctx.setLineDash([6, 8]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(CX, CY, HULL + CEILING + 8, 0, TAU);
      ctx.stroke();
      ctx.setLineDash([]);

      // the city
      ctx.lineWidth = 1.2;
      for (const block of city) {
        const p = [toScreen(block.a, 0), toScreen(block.a, block.h), toScreen(block.a + block.w, block.h), toScreen(block.a + block.w, 0)];
        ctx.beginPath();
        ctx.moveTo(p[0][0], p[0][1]);
        for (let i = 1; i < 4; i++) ctx.lineTo(p[i][0], p[i][1]);
        ctx.closePath();
        ctx.fillStyle = '#16143A';
        ctx.fill();
        ctx.strokeStyle = hexA(ring, 0.55);
        ctx.stroke();
      }

      // the hull
      ctx.save();
      ctx.shadowColor = ring;
      ctx.shadowBlur = 14;
      ctx.strokeStyle = ring;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(CX, CY, HULL, 0, TAU);
      ctx.stroke();
      ctx.restore();

      if (!s) return;

      // ripples along the hull where a kill landed
      ctx.save();
      ctx.lineWidth = 5;
      for (const ripple of s.ripples) {
        const spread = ripple.t * 0.5;
        const from = ripple.a - spread - camera - Math.PI / 2;
        ctx.strokeStyle = hexA('#FFFFFF', 0.5 * (1 - ripple.t / 0.9));
        ctx.beginPath();
        ctx.arc(CX, CY, HULL, from, from + spread * 2 + 0.02);
        ctx.stroke();
      }
      ctx.restore();

      // the Lift
      ctx.save();
      const [lx0, ly0] = toScreen(LIFT, 0);
      const [lx1, ly1] = toScreen(LIFT, CEILING + 8);
      ctx.shadowColor = '#4DFF73';
      ctx.shadowBlur = 20;
      ctx.strokeStyle = s.carried ? 'rgba(77, 255, 115, .95)' : 'rgba(77, 255, 115, .6)';
      ctx.lineWidth = s.carried ? 12 + Math.sin(performance.now() / 120) * 2 : 10;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(lx0, ly0);
      ctx.lineTo(lx1, ly1);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      // pulses: a band of light racing both ways round
      for (const wave of s.waves) {
        for (const dir of [-1, 1]) {
          const [x0, y0] = toScreen(wave.a + dir * wave.reach, 0);
          const [x1, y1] = toScreen(wave.a + dir * wave.reach, CEILING + 8);
          ctx.strokeStyle = `rgba(153, 230, 255, ${1 - wave.reach / Math.PI})`;
          ctx.shadowColor = '#99E6FF';
          ctx.shadowBlur = 18;
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.stroke();
        }
      }
      ctx.shadowBlur = 0;

      // shots
      ctx.strokeStyle = '#59F2FF';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      for (const shot of s.shots) {
        const [x0, y0] = toScreen(shot.a, shot.h);
        const [x1, y1] = toScreen(shot.a - (shot.dir * 16) / (HULL + shot.h), shot.h);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }

      // debris
      for (const bit of s.debris) {
        const [x, y] = toScreen(bit.a, bit.h);
        ctx.globalAlpha = Math.min(1, bit.life);
        ctx.fillStyle = bit.colour;
        ctx.fillRect(x - bit.size / 2, y - bit.size / 2, bit.size, bit.size);
      }
      ctx.globalAlpha = 1;
      ctx.restore();

      // spawn rings closing on each arrival, then the machines
      for (const mote of s.motes) drawFoe(mote, 'mote', 16);
      for (const gleaner of s.gleaners) {
        drawFoe(gleaner, 'gleaner', 20);
        if (gleaner.holder && gleaner.warm <= 0) drawUpright('holder', gleaner.a, gleaner.h - 13, 12);
      }
      for (const holder of s.holders) drawUpright('holder', holder.a, holder.h + 6, 12);

      // the tender
      const ship = s.ship;
      if (ship.gone <= 0 && (ship.blink <= 0 || Math.floor(ship.blink * 10) % 2 === 0)) drawShip(ship);

      // score popups
      ctx.font = '700 14px "Chakra Petch", sans-serif';
      ctx.textAlign = 'center';
      for (const pop of s.popups) {
        const [x, y] = toScreen(pop.a, pop.h);
        ctx.fillStyle = `rgba(255, 217, 77, ${1 - pop.t})`;
        ctx.fillText(pop.text, x, y - 12 - pop.t * 20);
      }

      // dash meter under the ship's spot at the top
      ctx.fillStyle = 'rgba(63, 232, 255, .18)';
      ctx.fillRect(250, 578, 100, 6);
      ctx.fillStyle = ship.meter >= DASH_START || ship.dashing ? '#3FE8FF' : '#138AA6';
      ctx.fillRect(250, 578, 100 * ship.meter, 6);
    }

    // a sprite standing on the hull wherever it is, feet toward the axis
    function drawUpright(name, a, h, size) {
      const [x, y] = toScreen(a, h);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(a - camera);
      paintSprite(ctx, name, -size / 2, -size / 2, size / 8);
      ctx.restore();
    }

    function drawFoe(foe, name, size) {
      if (foe.warm > 0) {
        const [x, y] = toScreen(foe.a, foe.h);
        ctx.strokeStyle = name === 'mote' ? 'rgba(255, 89, 51, .8)' : 'rgba(77, 255, 102, .8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 6 + foe.warm * 40, 0, TAU);
        ctx.stroke();
        return;
      }
      ctx.save();
      ctx.shadowColor = SPRITES[name]['#'];
      ctx.shadowBlur = 10;
      drawUpright(name, foe.a, foe.h, size);
      ctx.restore();
    }

    function drawShip(ship) {
      const [x, y] = toScreen(ship.a, ship.h);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(ship.a - camera);
      ctx.scale(ship.facing, 1);
      ctx.shadowColor = '#3FE8FF';
      ctx.shadowBlur = ship.dashing ? 24 : 12;
      ctx.fillStyle = ship.dashing ? '#FFFFFF' : '#59F2FF';
      ctx.beginPath();
      ctx.moveTo(15, 0);
      ctx.lineTo(-11, -7);
      ctx.lineTo(-6, 0);
      ctx.lineTo(-11, 7);
      ctx.closePath();
      ctx.fill();
      if (ship.shields > 0) {
        ctx.strokeStyle = 'rgba(153, 230, 255, .8)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 17, 0, TAU);
        ctx.stroke();
      }
      ctx.restore();
      // Holders aboard ride behind the tender
      for (let i = 0; i < Math.min(state.carried, 5); i++) {
        drawUpright('holder', ship.a - (ship.facing * (18 + i * 10)) / (HULL + ship.h), ship.h - 4, 9);
      }
    }

    function hexA(hex, alpha) {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
    }

    /* ---------------------------------------------------------- hud */

    function updateHud(bump = false) {
      const s = state;
      if (!s) return;
      hud.score.textContent = number(s.score);
      hud.streak.textContent = `×${s.factor}`;
      hud.lives.textContent = Math.max(0, s.lives);
      hud.pulses.textContent = s.pulses;
      hud.saved.textContent = s.saved;
      if (bump) {
        hud.streak.classList.remove('bump');
        void hud.streak.offsetWidth;
        hud.streak.classList.add('bump');
      }
    }

    function announce(text) {
      announceEl.textContent = text;
      announceEl.classList.remove('show');
      void announceEl.offsetWidth;
      announceEl.classList.add('show');
    }

    /* ---------------------------------------------------------- loop */

    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (running && visible && !document.hidden) update(dt);
      draw();
      if (running) requestAnimationFrame(frame);
    }

    function resize() {
      const size = Math.round(root.clientWidth * Math.min(2, window.devicePixelRatio || 1));
      if (canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
        draw();
      }
    }

    /* ---------------------------------------------------------- input */

    const KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'a', 'd', 'w', 's', 'j', 'l', 'b', 'Shift', ' ']);

    root.addEventListener('keydown', event => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (!running) {
        if ((key === 'Enter' || key === ' ') && event.target === root) {
          event.preventDefault();
          launch();
        }
        return;
      }
      if (KEYS.has(key)) {
        event.preventDefault();
        keys.add(key);
      }
    });
    root.addEventListener('keyup', event => {
      keys.delete(event.key.length === 1 ? event.key.toLowerCase() : event.key);
    });
    root.addEventListener('blur', () => keys.clear());

    // a drag flies: sideways goes round the ring, up and down climbs; the tender fires on its own
    root.addEventListener('pointerdown', event => {
      if (!running || event.target.closest('.touch-btn')) return;
      event.preventDefault();
      root.focus({ preventScroll: true });
      root.setPointerCapture(event.pointerId);
      Object.assign(touch, { id: event.pointerId, x: event.clientX, y: event.clientY, steer: 0, climb: 0 });
    });
    root.addEventListener('pointermove', event => {
      if (event.pointerId !== touch.id) return;
      const reach = root.clientWidth * 0.08;
      touch.steer = clamp((event.clientX - touch.x) / reach, -1, 1);
      touch.climb = clamp(-(event.clientY - touch.y) / reach, -1, 1);
    });
    const release = event => {
      if (event.pointerId === touch.id) touch.id = null;
    };
    root.addEventListener('pointerup', release);
    root.addEventListener('pointercancel', release);

    root.querySelectorAll('.touch-btn').forEach(button => {
      const which = button.dataset.touch;
      button.addEventListener('pointerdown', event => { event.preventDefault(); pressed[which] = true; });
      const up = () => { pressed[which] = false; };
      button.addEventListener('pointerup', up);
      button.addEventListener('pointerleave', up);
      button.addEventListener('pointercancel', up);
    });

    document.getElementById('launch').addEventListener('click', launch);
    endCard.querySelector('.end-again').addEventListener('click', launch);

    document.addEventListener('spinhold:lang', () => {
      if (state && state.over) renderEnd(endCard.dataset.won === 'true');
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries.some(entry => entry.isIntersecting);
      }, { threshold: 0.2 }).observe(root);
    } else {
      visible = true;
    }

    // a start pad on the gamepad launches too
    (function watchPad() {
      const pad = navigator.getGamepads ? [...navigator.getGamepads()].find(Boolean) : null;
      if (!running && visible && pad && pad.buttons[9] && pad.buttons[9].pressed) launch();
      setTimeout(watchPad, 200);
    })();

    new ResizeObserver(resize).observe(root);
    resize();
    draw();
  }
})();
