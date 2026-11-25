/* =========================================================
   Steve N — EN / ES / FR language switcher
   - English lives in the HTML (index.html = fan page, presskit/index.html = press kit).
   - Spanish and French live below. Each key matches a data-i18n="…" in one of the pages
     (keys starting with "f." are fan-page only; the rest are shared or press-kit).
   - Values may contain simple HTML (<strong>, <span class="red">…).
   - "@text" keys update the data-text attribute used by the big split titles.
   ========================================================= */
(function () {
  var T = {
    es: {
      'nav.about': 'Perfil',
      'nav.music': 'Música',
      'nav.highlights': 'Destacados',
      'nav.shows': 'Shows',
      'nav.booking': 'Booking',

      'hero.eyebrow': '<span class="dot"></span>DJ &amp; Producer — Kit de prensa',
      'hero.lead': 'Artista de <strong>house &amp; indie dance</strong> con raíces latinas y base en Ginebra: DJ, producción musical y <span class="red">140K+</span> oyentes mensuales en Spotify.',
      'hero.listen': 'Escuchar',

      'stats.1': 'Oyentes mensuales en Spotify',
      'stats.2': 'Reproducciones de “With&nbsp;You”',
      'stats.3': 'Reproducciones de “Mirame”',
      'stats.4': 'Guardados en playlists editoriales',
      'stats.note': 'Datos de Spotify a nov. 2026',

      'about.eyebrow': '01 — Perfil',
      'about.title': 'Perfil<span class="red">.</span>',
      'about.lead': 'Steve N se mueve entre el house y el indie dance, con raíces latinas y base en Ginebra: un sonido cálido, rítmico y hecho para la pista.',
      'about.p1': 'Su último sencillo, <strong>“Low Effort”</strong> con Mert Erkan (Aqstica Audio), entró en las playlists editoriales de Spotify Umami, Electronic Rising, New Music Friday Türkiye y DANS&nbsp;2026. Lanzamientos anteriores como <strong>“With You”</strong> (2.1M+ reproducciones) y <strong>“Mirame”</strong> (250K+) han construido una audiencia de 140K+ oyentes mensuales.',
      'about.p2': 'En cabina, Steve N ha abierto para Quevedo, Álvaro Díaz y Boza, ha tocado en Corona Sunsets y Empire Music Festival en Guatemala, y cuenta con el apoyo de Keinemusik, Notre Dame y Jamek Ortega.',
      'facts.head': 'Datos clave',
      'facts.based': 'Base',
      'facts.basedV': 'Ginebra, Suiza',
      'facts.listeners': 'Oyentes mensuales',
      'facts.listenersV': '140K+ en Spotify',
      'facts.genres': 'Géneros',
      'facts.support': 'Con el apoyo de',
      'facts.supportV': 'Keinemusik · Notre&nbsp;Dame · Jamek&nbsp;Ortega y&nbsp;más',

      'music.eyebrow': '02 — Música',
      'music.title': 'Escucha<span class="red">.</span>',
      'music.aside': 'El último sencillo, los temas más escuchados en Spotify y un DJ set en vivo, para oír cómo Steve N mueve una pista.',
      'rel.eyebrow': '<span class="dot"></span>Último lanzamiento — Ya disponible',
      'rel.k': 'En playlists editoriales de Spotify',
      'rel.btn': 'Escuchar en Spotify <svg class="arw" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
      'embed.spotify': 'Lanzamientos — Spotify',
      'embed.dj': 'DJ set — En vivo en Odys Bar',

      'hl.stamp': 'Steve N en Gallo Negro, GT · 2025',
      'hl.badge': 'Reproducciones',
      'hl.eyebrow': '03 — Destacados',
      'hl.title': 'Destacados<span class="red">.</span>',
      'hl.title@text': 'Destacados.',
      'hl.editorial': 'Editorial de Spotify — “Low Effort” <span>nov. 2026</span>',
      'hl.supported': 'Con el apoyo de',
      'clip.1': '“With You” en Budapest, HU',
      'clip.2': '“Low Effort” en Süda, SE',
      'clip.3': '“With You” en Circoloco Ibiza, ES',

      'perf.eyebrow': '04 — Actuaciones',
      'perf.title': 'Actuaciones<span class="red">.</span>',
      'perf.lead': 'Ha abierto para artistas internacionales y tocado en festivales de música en Guatemala y en escenarios de Ginebra.',
      'perf.gigs': 'Fechas',
      'perf.fest': 'Festival de música · Guatemala',
      'perf.odys': 'Live set · Ginebra',
      'perf.opened': 'Abrió para',

      'book.eyebrow': '05 — Booking y management',
      'book.title': '¿Tocamos<span class="red">?</span>',
      'book.title@text': '¿Tocamos?',
      'book.lead': 'Club, festival o rooftop: envía la fecha y la ciudad, y hagámoslo realidad.',
      'book.email': 'Email',
      'tile.phone': 'Teléfono',
      'copy': 'Copiar',
      'copied': 'Copiado',

      'footer.rights': '© 2026 Steve N. Todos los derechos reservados.',
      'footer.top': 'Volver arriba ↑',
      'pk.home': 'Inicio',
      /* ---- Fan homepage (index.html) ---- */
      'f.nav.studio': 'Estudio',
      'f.nav.sets': 'Sets',
      'f.nav.follow': 'Redes',
      'f.nav.press': 'Kit de prensa',
      'f.hero.eyebrow': '<span class="dot"></span>Nuevo sencillo — “Low Effort” ya disponible',
      'f.music.title': 'Música<span class="red">.</span>',
      'f.music.aside': 'Todos los lanzamientos, del más reciente al primero. Toca una portada para escucharla en Spotify.',
      'f.m.nov': 'nov. 2026',
      'f.m.jul': 'jul. 2026',
      'f.m.jun': 'jun. 2026',
      'f.m.may': 'may. 2026',
      'f.m.apr': 'abr. 2026',
      'f.next.soon': 'Muy pronto',
      'f.next.date': 'Próximo',
      'f.next.title': 'Nueva música',
      'f.next.by': 'Sigue a Steve N en Spotify para escucharla primero',
      'f.studio.eyebrow': '02 — Estudio',
      'f.studio.title': 'En el estudio<span class="red">.</span>',
      'f.studio.title@text': 'En el estudio.',
      'f.studio.lead': 'Detrás de los temas: ideas, sesiones de madrugada y primeras pruebas.',
      'f.clip.1': 'Así se hizo “Technomami”',
      'f.clip.1s': 'En el estudio',
      'f.clip.2s': 'Tocado en vivo desde casa',
      'f.studio.more': 'Más en YouTube',
      'f.sets.eyebrow': '03 — Sets',
      'f.sets.title': 'Sets en vivo<span class="red">.</span>',
      'f.sets.title@text': 'Sets en vivo.',
      'f.sets.lead': 'Grabados en vivo. Dale play y súbele el volumen.',
      'f.sets.archive': 'Video set',
      'f.sets.kitchen': 'Kitchen set · Guatemala',
      'f.sets.more': 'Todos los sets en SoundCloud',
      'f.shows.eyebrow': '04 — Shows',
      'f.shows.title': 'Shows<span class="red">.</span>',
      'f.shows.lead': 'Vienen nuevas fechas. Sigue a Steve N en Bandsintown y recibe un aviso cuando toque cerca de ti.',
      'f.shows.soon': 'Próximas fechas — muy pronto',
      'f.shows.up': 'Próximas fechas',
      'f.shows.btn': 'Seguir en Bandsintown',
      'f.follow.eyebrow': '05 — Redes',
      'f.follow.title': 'Conecta<span class="red">.</span>',
      'f.follow.lead': 'Nueva música, clips de estudio y noches de fiesta, donde sea que escuches.',
      'f.p.sp': 'Lo nuevo, primero',
      'f.p.am': 'Todos los lanzamientos',
      'f.p.bp': 'Para DJs',
      'f.p.bit': 'Avisos de shows',
      'f.ig.follow': 'Seguir',
      'f.ig.cat': 'Artista',
      'f.press.k': '¿Organizas eventos?',
      'f.press.t': 'Bio, destacados, clips en vivo y contactos de booking están en el kit de prensa.',
      'f.press.btn': 'Ver kit de prensa'
    },

    fr: {
      'nav.about': 'Profil',
      'nav.music': 'Musique',
      'nav.highlights': 'Temps forts',
      'nav.shows': 'Dates',
      'nav.booking': 'Booking',

      'hero.eyebrow': '<span class="dot"></span>DJ &amp; Producer — Dossier de presse',
      'hero.lead': 'Artiste <strong>house &amp; indie dance</strong> aux racines latines, avec Genève pour port d’attache&nbsp;: DJ, production musicale et <span class="red">140K+</span> auditeurs mensuels sur Spotify.',
      'hero.listen': 'Écouter',

      'stats.1': 'Auditeurs mensuels sur Spotify',
      'stats.2': 'Écoutes de «&nbsp;With&nbsp;You&nbsp;»',
      'stats.3': 'Écoutes de «&nbsp;Mirame&nbsp;»',
      'stats.4': 'Sauvegardes sur les playlists éditoriales',
      'stats.note': 'Données Spotify, nov. 2026',

      'about.eyebrow': '01 — Profil',
      'about.title': 'Profil<span class="red">.</span>',
      'about.lead': 'Steve N navigue entre house et indie dance, avec des racines latines et Genève pour port d’attache&nbsp;: un son chaleureux, rythmé et taillé pour le dancefloor.',
      'about.p1': 'Le dernier single <strong>«&nbsp;Low Effort&nbsp;»</strong> avec Mert Erkan, sorti chez Aqstica Audio, a intégré les playlists éditoriales Spotify Umami, Electronic Rising, New Music Friday Türkiye et DANS&nbsp;2026. Les sorties précédentes <strong>«&nbsp;With You&nbsp;»</strong> (2.1M+ écoutes) et <strong>«&nbsp;Mirame&nbsp;»</strong> (250K+) ont réuni une audience de 140K+ auditeurs mensuels.',
      'about.p2': 'Derrière les platines, Steve N a assuré les premières parties de Quevedo, Álvaro Díaz et Boza, a joué au Corona Sunsets et à l’Empire Music Festival au Guatemala, et reçoit le soutien de Keinemusik, Notre Dame et Jamek Ortega.',
      'facts.head': 'En bref',
      'facts.based': 'Ville',
      'facts.basedV': 'Genève, Suisse',
      'facts.listeners': 'Auditeurs mensuels',
      'facts.listenersV': '140K+ sur Spotify',
      'facts.genres': 'Genres',
      'facts.support': 'Soutiens',
      'facts.supportV': 'Keinemusik · Notre&nbsp;Dame · Jamek&nbsp;Ortega et&nbsp;plus',

      'music.eyebrow': '02 — Musique',
      'music.title': 'Écoute<span class="red">.</span>',
      'music.aside': 'Le dernier single, les titres phares sur Spotify et un DJ set live, pour entendre comment Steve N fait vibrer une salle.',
      'rel.eyebrow': '<span class="dot"></span>Dernière sortie — Disponible',
      'rel.k': 'Sélectionné par les playlists éditoriales Spotify',
      'rel.btn': 'Écouter sur Spotify <svg class="arw" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
      'embed.spotify': 'Sorties — Spotify',
      'embed.dj': 'DJ set — Live à l’Odys Bar',

      'hl.stamp': 'Steve N au Gallo Negro, GT · 2025',
      'hl.badge': 'Écoutes',
      'hl.eyebrow': '03 — Temps forts',
      'hl.title': 'Temps forts<span class="red">.</span>',
      'hl.title@text': 'Temps forts.',
      'hl.editorial': 'Éditorial Spotify — «&nbsp;Low Effort&nbsp;» <span>nov. 2026</span>',
      'hl.supported': 'Soutiens',
      'clip.1': '«&nbsp;With You&nbsp;» à Budapest, HU',
      'clip.2': '«&nbsp;Low Effort&nbsp;» au Süda, SE',
      'clip.3': '«&nbsp;With You&nbsp;» au Circoloco Ibiza, ES',

      'perf.eyebrow': '04 — Performances',
      'perf.title': 'Performances<span class="red">.</span>',
      'perf.lead': 'A assuré des premières parties d’artistes internationaux et joué dans des festivals au Guatemala et sur des scènes genevoises.',
      'perf.gigs': 'Dates',
      'perf.fest': 'Festival de musique · Guatemala',
      'perf.odys': 'Live set · Genève',
      'perf.opened': 'Premières parties',

      'book.eyebrow': '05 — Booking &amp; management',
      'book.title': 'On joue&nbsp;<span class="red">?</span>',
      'book.title@text': 'On joue ?',
      'book.lead': 'Club, festival ou rooftop&nbsp;: envoyez la date et la ville, on s’occupe du reste.',
      'book.email': 'E-mail',
      'tile.phone': 'Téléphone',
      'copy': 'Copier',
      'copied': 'Copié',

      'footer.rights': '© 2026 Steve N. Tous droits réservés.',
      'footer.top': 'Haut de page ↑',
      'pk.home': 'Accueil',
      /* ---- Fan homepage (index.html) ---- */
      'f.nav.studio': 'Studio',
      'f.nav.sets': 'Sets',
      'f.nav.follow': 'Réseaux',
      'f.nav.press': 'Dossier de presse',
      'f.hero.eyebrow': '<span class="dot"></span>Nouveau single — «&nbsp;Low Effort&nbsp;» disponible',
      'f.music.title': 'Musique<span class="red">.</span>',
      'f.music.aside': 'Toutes les sorties, de la plus récente à la première. Touchez une pochette pour l’écouter sur Spotify.',
      'f.m.nov': 'nov. 2026',
      'f.m.jul': 'juil. 2026',
      'f.m.jun': 'juin 2026',
      'f.m.may': 'mai 2026',
      'f.m.apr': 'avr. 2026',
      'f.next.soon': 'Bientôt',
      'f.next.date': 'Prochainement',
      'f.next.title': 'Nouveau son',
      'f.next.by': 'Suivez Steve N sur Spotify pour l’écouter en premier',
      'f.studio.eyebrow': '02 — Studio',
      'f.studio.title': 'En studio<span class="red">.</span>',
      'f.studio.title@text': 'En studio.',
      'f.studio.lead': 'Les coulisses des morceaux&nbsp;: idées, sessions nocturnes et premières écoutes.',
      'f.clip.1': 'Making of de «&nbsp;Technomami&nbsp;»',
      'f.clip.1s': 'En studio',
      'f.clip.2s': 'Joué en live à la maison',
      'f.studio.more': 'Plus sur YouTube',
      'f.sets.eyebrow': '03 — Sets',
      'f.sets.title': 'Sets live<span class="red">.</span>',
      'f.sets.title@text': 'Sets live.',
      'f.sets.lead': 'Enregistrés en live. Lancez la lecture et montez le son.',
      'f.sets.archive': 'Set vidéo',
      'f.sets.kitchen': 'Kitchen set · Guatemala',
      'f.sets.more': 'Tous les sets sur SoundCloud',
      'f.shows.eyebrow': '04 — Dates',
      'f.shows.title': 'Dates<span class="red">.</span>',
      'f.shows.lead': 'De nouvelles dates arrivent. Suivez Steve N sur Bandsintown pour être alerté·e des concerts près de chez vous.',
      'f.shows.soon': 'Prochaines dates — bientôt',
      'f.shows.up': 'Prochaines dates',
      'f.shows.btn': 'Suivre sur Bandsintown',
      'f.follow.eyebrow': '05 — Réseaux',
      'f.follow.title': 'Suivre<span class="red">.</span>',
      'f.follow.lead': 'Nouveaux sons, extraits studio et soirées, où que vous écoutiez.',
      'f.p.sp': 'Les nouveautés en premier',
      'f.p.am': 'Toutes les sorties',
      'f.p.bp': 'Pour les DJs',
      'f.p.bit': 'Alertes concerts',
      'f.ig.follow': 'Suivre',
      'f.ig.cat': 'Artiste',
      'f.press.k': 'Vous organisez des soirées&nbsp;?',
      'f.press.t': 'Bio, temps forts, extraits live et contacts booking sont dans le dossier de presse.',
      'f.press.btn': 'Ouvrir le dossier de presse'
    }
  };

  /* Pre-filled booking messages (email + WhatsApp) per language */
  var MSG = {
    es: {
      subject: 'Solicitud de booking — Steve N',
      body: 'Hola Steve N,\r\n\r\nNos encantaría que tocaras con nosotros.\r\n\r\nEvento / venue: \r\nCiudad y país: \r\nFecha: \r\nHorario y duración del set: \r\nAforo: \r\nOferta / presupuesto: \r\n\r\nGracias,\r\n',
      wa: 'Hola Steve N, ¡nos encantaría que tocaras!\n\nEvento / venue: \nCiudad: \nFecha: '
    },
    fr: {
      subject: 'Demande de booking — Steve N',
      body: 'Bonjour Steve N,\r\n\r\nNous aimerions beaucoup vous faire jouer.\r\n\r\nÉvénement / lieu : \r\nVille et pays : \r\nDate : \r\nHoraire et durée du set : \r\nCapacité : \r\nOffre / budget : \r\n\r\nMerci,\r\n',
      wa: 'Bonjour Steve N, on aimerait beaucoup vous faire jouer !\n\nÉvénement / lieu : \nVille : \nDate : '
    }
  };
  var EMAIL = 'stevenmusicmanagement@gmail.com';
  var PHONE = '41782665996';
  var LANGS = ['en', 'es', 'fr'];
  var original = new Map();   // remembers the English version of every element

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = 'en';
    var dict = T[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!original.has(el)) original.set(el, { html: el.innerHTML, text: el.getAttribute('data-text') });
      var o = original.get(el), key = el.getAttribute('data-i18n');
      var v = dict && dict[key];
      el.innerHTML = v != null ? v : o.html;
      if (o.text != null) el.setAttribute('data-text', (dict && dict[key + '@text']) || o.text);
    });

    document.querySelectorAll('[data-i18n-msg]').forEach(function (a) {
      if (!original.has(a)) original.set(a, { href: a.getAttribute('href') });
      var m = MSG[lang];
      if (!m) { a.setAttribute('href', original.get(a).href); return; }
      a.setAttribute('href', a.getAttribute('data-i18n-msg') === 'mail'
        ? 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body)
        : 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(m.wa));
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang [data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem('sn-lang', lang); } catch (e) {}
  }

  /* Label lookup for small bits of script text (e.g. the Copy button) */
  window.snLabel = function (key, fallback) {
    var d = T[document.documentElement.lang];
    return (d && d[key]) || fallback;
  };

  /* First visit: use the saved choice, else the browser language, else English */
  function initialLang() {
    try { var saved = localStorage.getItem('sn-lang'); if (saved) return saved; } catch (e) {}
    var list = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) >= 0) return code;
    }
    return 'en';
  }

  document.querySelectorAll('.lang [data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });
  apply(initialLang());
})();
