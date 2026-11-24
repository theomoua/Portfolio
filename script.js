const P={
 "contenu-visuel":{t:"Contenu visuel",d:"Des affiches graphiques sur le sport, pensées et réalisées sur Photoshop."},
 "sites-web":{t:"Sites web",d:"Les sites que j’ai conçus et réalisés, de la maquette à la mise en ligne."},
 communication:{t:"Communication",d:"Réseaux sociaux, supports imprimés et identités : mes projets de communication."},
 entrepreneuriat:{t:"Entrepreneuriat",d:"Les projets que j’ai lancés et les aventures entrepreneuriales auxquelles j’ai participé."}
};
const photos={
 hero:"Photo_portfolio_hero.optimized.webp",
 "contenu-visuel":"Affiches%20photo.optimized.webp",
 "sites-web":"Site%20web%20photo.webp",
 communication:"Communication%20photo.webp"
};
const posterCards=[
 {image:"JUDE_BELLINGHAM_POSTER.webp",alt:"Affiche de Jude Bellingham"},
 {image:"Raphina_POSTER.webp",alt:"Affiche de Raphinha"},
 {image:"VINICIUS_POSTER.webp",alt:"Affiche de Vinícius Júnior"},
 {image:"PALMER_POSTER.webp",alt:"Affiche de Cole Palmer"},
 {image:"Griezmann_retreat_POSTER.webp",alt:"Affiche de griezmann retraite atlético madrid"},
 {image:"JOAO_NEVES_POSTER.webp",alt:"Affiche de João Neves"},
 {image:"Ibrahimovic_POSTER.webp",alt:"Affiche de Zlatan Ibrahimović"},
 {image:"MADUEKE_POSTER.webp",alt:"Affiche de Noni Madueke"},
 {image:"MARCUS_THURAM_POSTER.webp",alt:"Affiche de Marcus Thuram"},
 {image:"BUSQUET_POSTER.webp",alt:"Affiche de Sergio Busquets"},
 {image:"CURRY_POSTER.webp",alt:"Affiche de Stephen Curry"},
 {image:"WENBANYAMA_POSTER.webp",alt:"Affiche de Victor Wembanyama"}
];
const certificationFiles={
 analytics:"/theo-moua_GOOGLE_ANALYTICS_CERTIFICATION.pdf",
 semrush:[
  "/theo-moua_SEMRUSH_CERTIFICATION_1.pdf",
  "/theo-moua_SEMRUSH_CERTIFICATION_2.pdf",
  "/theo-moua_SEMRUSH_CERTIFICATION_3.pdf",
  "/theo-moua_SEMRUSH_CERTIFICATION_On-page_SEO.pdf"
 ]
};
const description="Étudiant en 3e année de BUT Techniques de commercialisation, je me suis spécialisé en marketing digital. Je recherche un stage en marketing digital ou en communication digitale dès février 2027. Vous découvrirez dans ce portfolio de nombreux projets personnels et universitaires que j’ai réalisés.";
const app=document.getElementById('app');
let posterCarouselResizeHandler=null;
let posterCarouselAnimationFrame=null;
const img=(src,alt="")=>`<img src="${src}" alt="${alt}" loading="lazy">`;
const certificationLinks=()=>`<a class="cert-button" href="${certificationFiles.analytics}" target="_blank" rel="noopener noreferrer">Google Analytics 4</a>
    ${certificationFiles.semrush.map((file,index)=>`<a class="cert-button" href="${file}" target="_blank" rel="noopener noreferrer">Semrush · Certification ${index+1}</a>`).join('')}`;
function home(){
 return `<section class="hero" id="top">
  <div class="hero-visual"><div class="photo"><img src="${photos.hero}" alt="Théo MOUA pendant les JPRO à Sceaux 2026" width="1080" height="1434" loading="eager" fetchpriority="high" decoding="async"></div><p class="hero-caption">Participation à la journée porte ouverte de l'IUT de Sceaux de l'Université Paris-Saclay, 2026.</p></div>
  <div class="hero-copy"><h1>Théo MOUA, étudiant en <span class="h1-highlight">marketing digital</span></h1><p class="tag">${description}</p><p class="availability"><span class="availability-dot" aria-hidden="true"></span>Disponible – stage dès février 2027</p></div>
 </section>
 <section class="work home-projects anchor-section" id="projets"><h2>Projets</h2><div class="grid">
 ${Object.entries(P).map(([k,v])=>`<a class="card" href="/index.html?page=${k}">${photos[k]?img(photos[k],`Photo pour ${v.t}`):`<div class="ph">Photo ${v.t}</div>`}<div class="lbl"><h3>${v.t}</h3></div></a>`).join('')}
 </div></section>
 <section class="home-about anchor-section" id="a-propos" aria-labelledby="home-about-title">
  <div class="home-section-content home-about-layout">
   <div class="home-about-portrait">
    <svg class="home-about-frame" viewBox="0 0 612 408" width="612" height="408" aria-hidden="true">
     <defs>
      <filter id="home-about-outline" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">
       <feComponentTransfer in="SourceAlpha" result="solid-silhouette"><feFuncA type="linear" slope="2" intercept="-1"/></feComponentTransfer>
       <feMorphology in="solid-silhouette" operator="dilate" radius="9" result="expanded"/>
       <feGaussianBlur in="expanded" stdDeviation="0.7" result="soft-expanded"/>
       <feFlood flood-color="var(--blue-strong)" result="outline-color"/>
       <feComposite in="outline-color" in2="soft-expanded" operator="in"/>
      </filter>
     </defs>
     <image href="A%20propos%20de%20moi%20photo.webp" width="612" height="408" filter="url(#home-about-outline)"/>
    </svg>
    ${img("A%20propos%20de%20moi%20photo.webp","Portrait détouré de Théo MOUA")}
   </div>
   <div class="home-about-text">
    <h2 id="home-about-title">À propos de moi</h2>
    <p class="about-copy">Étudiant en 3e année de BUT Techniques de commercialisation, spécialisé en marketing digital, j’aime imaginer, créer et donner vie à de nouvelles idées. Ce qui me plaît particulièrement ? Mélanger créativité et stratégie pour créer des contenus qui ont du sens et qui parlent aux bonnes personnes. Toujours curieux de découvrir de nouveaux outils et d’apprendre de nouvelles choses, j’aime expérimenter, tester et surtout voir mes idées prendre forme.</p>
    <div class="home-about-details">
     <article class="home-about-detail"><h3>Ce que je recherche</h3><p>Un stage de 3 à 6 mois en marketing digital à partir de février 2027, pour contribuer à des missions concrètes et progresser sur le terrain.</p></article>
     <article class="home-about-detail"><h3>Mes projets</h3><p>Affiches, sites web et contenus pour différents formats. En dehors de mes projets, j’aime le sport et les affiches qui racontent une histoire.</p></article>
    </div>
   </div>
   <div class="home-about-photos" role="group" aria-label="Photos de Théo MOUA">
    <div class="home-about-photo-frame"><img class="home-about-photo" src="Photo_moi%201.webp" alt="Théo MOUA en train de photographier avec un appareil photo" width="2106" height="2608" loading="lazy" decoding="async"></div>
    <div class="home-about-photo-frame"><img class="home-about-photo" src="Photo_moi%202.webp" alt="Théo MOUA jouant au football sur un terrain extérieur" width="669" height="747" loading="lazy" decoding="async"></div>
    <div class="home-about-photo-frame"><img class="home-about-photo" src="Photo_moi%203.webp" alt="Théo MOUA échangeant avec une étudiante lors d’une journée portes ouvertes à l’IUT de Sceaux" width="1216" height="1250" loading="lazy" decoding="async"></div>
   </div>
  </div>
 </section>
 <section class="career-timeline anchor-section" id="parcours" aria-labelledby="career-title">
  <div class="home-section-content career-content">
   <p class="career-kicker">Expériences professionnelles</p>
   <h2 id="career-title">Du terrain à la communication digitale</h2>
   <p class="career-intro">Quelques étapes qui m’ont permis de découvrir la vente, l’engagement associatif et la communication.</p>
   <div class="career-timeline-scroll">
    <div class="career-timeline-stage">
     <div class="career-timeline-frame" role="region" aria-label="Frise chronologique des expériences professionnelles" tabindex="0">
      <ol class="career-timeline-track">
       <li class="career-timeline-item">
        <article class="career-card">
         <div class="career-date"><time datetime="2025-02">Février 2025</time><span>Vente</span></div>
         <h3>Stage de vente</h3>
         <p class="career-organization">Foot Locker · 2 semaines</p>
         <ul>
          <li>Conseil et accompagnement des clients</li>
          <li>Développement des ventes additionnelles</li>
          <li>Réassort, merchandising et identification des besoins</li>
         </ul>
        </article>
       </li>
       <li class="career-timeline-item">
        <article class="career-card">
         <div class="career-date"><time datetime="2025-05">Mai 2025</time><span>Engagement</span></div>
         <h3>Collecte de jouets</h3>
         <p class="career-organization">Association Rêves</p>
         <ul>
          <li>Organisation et réalisation d’une collecte solidaire</li>
          <li>Planification des étapes et tri des dons</li>
          <li>Communication locale et sensibilisation du public</li>
         </ul>
        </article>
       </li>
       <li class="career-timeline-item">
        <article class="career-card">
         <div class="career-date"><time datetime="2026-04">Avril 2026</time><span>Engagement</span></div>
         <h3>Organisation d’une tombola</h3>
         <img class="career-card-image" src="Reves_Tombola.optimized.webp" alt="Tombola solidaire organisée pour l’Association Rêves" width="1080" height="814" loading="lazy" decoding="async">
         <p class="career-organization">Association Rêves</p>
         <ul>
          <li>Organisation d’une tombola solidaire</li>
         </ul>
        </article>
       </li>
       <li class="career-timeline-item">
        <article class="career-card">
         <div class="career-date"><time datetime="2026-04">Avril – mai 2026</time><span>Communication</span></div>
         <h3>Stage en communication</h3>
         <img class="career-card-image" src="era-team-communication.webp" alt="Équipe communication d’ERA Immobilier avec l’inscription Team Communication" width="347" height="464" loading="lazy" decoding="async">
         <p class="career-organization">Projet Immo · ERA Immobilier · 8 semaines</p>
         <ul>
          <li>Réalisation de vidéos</li>
          <li>Gestion des réseaux sociaux</li>
          <li>Veille concurrentielle</li>
         </ul>
        </article>
       </li>
      </ol>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section class="home-skills anchor-section" id="competences" aria-labelledby="skills-title">
  <div class="home-section-content">
   <h2 id="skills-title">Mes compétences</h2>
   <p class="section-intro">Des compétences développées au fil de mes projets en marketing digital et en communication. Mes projets m’ont amené à concevoir des affiches, des sites web et des contenus pour différents formats.</p>
   <div class="skill-grid">
    <article class="skill-card"><h3>Rédaction web &amp; SEO</h3><p>Rédaction de contenus web et travail du référencement naturel.</p></article>
    <article class="skill-card"><h3>Analyse &amp; mesure</h3><p>Suivi des résultats avec Google Analytics 4.</p></article>
    <article class="skill-card"><h3>Création de contenus</h3><p>Montage vidéo et création de supports de communication pour différents formats.</p></article>
    <article class="skill-card"><h3>Intelligence artificielle</h3><p>Exploration d’idées et accélération de certaines étapes, avec vérification et retravail de chaque production.</p></article>
   </div>
   <div class="certifications" aria-label="Certifications">
    ${certificationLinks()}
   </div>
  </div>
 </section>
 <section class="home-software anchor-section" id="logiciels" aria-labelledby="software-title">
  <div class="home-section-content">
   <p class="software-kicker">Ma boîte à outils</p>
   <h2 id="software-title">Logiciels &amp; outils maîtrisés</h2>
   <p class="software-intro">De la création graphique à l’analyse de performance, les outils que j’utilise pour donner vie à mes projets.</p>
   <div class="software-board">
    <article class="software-quadrant software-creation">
     <h3>Création &amp; design</h3>
     <div class="software-logos" aria-label="Outils de création et de design">
      <div class="software-logo software-logo-canva" aria-label="Canva"><img src="canva-logo.png" alt="Canva" loading="lazy"></div>
      <div class="software-logo"><img src="figma-logo.png" alt="" loading="lazy"><span>Figma</span></div>
      <div class="software-logo"><span class="software-mark software-mark-photoshop" aria-hidden="true">Ps</span><span>Photoshop</span></div>
      <div class="software-logo"><span class="software-mark software-mark-capcut" aria-hidden="true">C</span><span>CapCut</span></div>
     </div>
    </article>
    <article class="software-quadrant software-ai">
     <h3>Intelligence artificielle</h3>
     <div class="software-logos" aria-label="Outils d’intelligence artificielle">
      <div class="software-logo"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/claude.svg" alt="" loading="lazy"><span>Claude</span></div>
      <div class="software-logo"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/openai.svg" alt="" loading="lazy"><span>ChatGPT</span></div>
      <div class="software-logo software-logo-gemini" aria-label="Gemini"><img src="gemini-logo.png" alt="Gemini" loading="lazy"></div>
     </div>
    </article>
    <article class="software-quadrant software-seo">
     <h3>Référencement naturel</h3>
     <div class="software-logos" aria-label="Outils SEO">
      <div class="software-logo"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/semrush.svg" alt="" loading="lazy"><span>Semrush</span></div>
      <div class="software-logo software-logo-screaming-frog" aria-label="Screaming Frog"><img src="screaming-frog-logo.png" alt="Screaming Frog" loading="lazy"></div>
     </div>
    </article>
    <article class="software-quadrant software-analytics">
     <h3>Analyse &amp; mesure</h3>
     <div class="software-logos" aria-label="Outils d’analyse">
      <div class="software-logo software-logo-analytics" aria-label="Google Analytics 4"><img src="google-analytics-logo.png" alt="Google Analytics" loading="lazy"></div>
      <div class="software-logo"><img src="google-search-console-logo.png" alt="" loading="lazy"><span>Google Search Console</span></div>
     </div>
    </article>
    <span class="software-board-center" aria-hidden="true"></span>
   </div>
  </div>
 </section>`;
}
function posterArtwork(card){
 return card.image
  ? img(card.image,card.alt)
  : `<span class="poster-placeholder-label">Visuel<br>à ajouter</span>`;
}
function affichesPage(){
 return `<section class="page poster-page">
  <a class="btn pill back" href="/index.html">Retour</a>
  <div class="poster-intro">
   <div class="poster-deck" tabindex="0" role="group" aria-label="Trois affiches disposées comme des cartes à jouer">
    ${posterCards.slice(0,3).map((card,index)=>`<figure class="poster-deck-card poster-artwork-card poster-artwork-card-${index+1}" aria-label="${card.alt}">${posterArtwork(card)}</figure>`).join('')}
   </div>
   <div class="poster-heading">
    <h2>Du contenu visuel autour du sport</h2>
    <p class="poster-software"><svg viewBox="0 0 48 48" role="img" aria-label="Logo Photoshop"><rect x="2" y="2" width="44" height="44" rx="8" fill="#001e36"/><path d="M2 14V10a8 8 0 0 1 8-8h28a8 8 0 0 1 8 8v4" fill="#31a8ff"/><text x="8" y="33" fill="#31a8ff" font-family="Arial,sans-serif" font-size="18" font-weight="700">Ps</text></svg><span>Photoshop</span></p>
    <div class="poster-description">
     <p>Passionné par le graphisme et l’univers du sport, j’ai développé un projet personnel de création d’affiches, principalement autour du football. ⚽</p>
     <p>Réalisées sur <strong>Adobe Photoshop</strong>, un logiciel que je maîtrise, ces créations me permettent d’exprimer ma créativité et d'explorer différents styles graphiques.</p>
     <p>Je me suis occupé de chaque étape de réalisation : assemblage des éléments visuels, travail de la colorimétrie, composition, structure et harmonisation des visuels.</p>
     <p>Au-delà de la création, j’ai également pris plaisir à partager mes réalisations sur <a class="poster-instagram-link" href="https://www.instagram.com/by_moua/" target="_blank" rel="noopener noreferrer">Instagram</a>, en imaginant des publications dynamiques et divertissantes pour capter l’attention de ma communauté.</p>
     <p>Un projet réalisé sur mon temps libre, qui me permet de perfectionner mes compétences graphiques tout en laissant libre cours à ma créativité.</p>
    </div>
   </div>
  </div>
  <section class="poster-gallery" aria-labelledby="poster-gallery-title">
   <div class="poster-gallery-heading">
    <div><h3 id="poster-gallery-title">Contenu visuel</h3><p>Une sélection d’affiches, présentées en boucle.</p></div>
   </div>
   <div class="poster-carousel" role="region" tabindex="0" aria-label="Carrousel des affiches. Appuyez sur Espace ou maintenez le clic pour arrêter le défilement." aria-roledescription="carrousel" aria-keyshortcuts="Space">
    <div class="poster-carousel-track">
     ${posterCards.map(card=>`<figure class="poster-carousel-item">
      <div class="poster-carousel-artwork">${posterArtwork(card)}</div>
      <figcaption>${card.alt}</figcaption>
     </figure>`).join('')}
    </div>
   </div>
  </section>
 </section>`;
}
function initPosterCarousel(){
 const carousel=app.querySelector('.poster-carousel');
 if(!carousel)return;
 const track=carousel.querySelector('.poster-carousel-track');
 const slides=Array.from(track.children);
 const originalCount=slides.length;
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const cloneCount=Math.min(5,originalCount);
 slides.slice(0,cloneCount).forEach(slide=>{
  const clone=slide.cloneNode(true);
  clone.setAttribute('aria-hidden','true');
  track.append(clone);
 });
 let loopWidth=track.children[originalCount].getBoundingClientRect().left-track.children[0].getBoundingClientRect().left;
 let offset=0;
 let previousTime=null;
 let pointerHeld=false;
 let keyboardPaused=false;
 const setPosition=()=>{track.style.transform=`translate3d(${offset}px,0,0)`};
 const updatePlayback=()=>{
  const paused=pointerHeld||keyboardPaused||reducedMotion;
  carousel.classList.toggle('is-held',paused);
  if(paused&&posterCarouselAnimationFrame!==null){
   cancelAnimationFrame(posterCarouselAnimationFrame);
   posterCarouselAnimationFrame=null;
   previousTime=null;
  }else if(!paused&&posterCarouselAnimationFrame===null){
   previousTime=null;
   posterCarouselAnimationFrame=requestAnimationFrame(animate);
  }
 };
 const animate=time=>{
  if(previousTime===null)previousTime=time;
  const elapsed=Math.min(time-previousTime,50);
  previousTime=time;
  if(!document.hidden){
   offset-=36*elapsed/1000;
   if(offset<=-loopWidth)offset+=loopWidth;
   setPosition();
  }
  posterCarouselAnimationFrame=requestAnimationFrame(animate);
 };
 const pointerDown=event=>{
  if(!event.isPrimary)return;
  pointerHeld=true;
  updatePlayback();
  carousel.setPointerCapture(event.pointerId);
 };
 const pointerUp=event=>{
  pointerHeld=false;
  updatePlayback();
  if(carousel.hasPointerCapture(event.pointerId))carousel.releasePointerCapture(event.pointerId);
 };
 carousel.addEventListener('pointerdown',pointerDown);
 carousel.addEventListener('pointerup',pointerUp);
 carousel.addEventListener('pointercancel',pointerUp);
 carousel.addEventListener('lostpointercapture',pointerUp);
 carousel.addEventListener('keydown',event=>{
  if(event.code==='Space'){
   event.preventDefault();
   keyboardPaused=!keyboardPaused;
   updatePlayback();
  }
 });
 posterCarouselResizeHandler=()=>{
  const progress=-offset/loopWidth;
  loopWidth=track.children[originalCount].getBoundingClientRect().left-track.children[0].getBoundingClientRect().left;
  offset=-loopWidth*progress;
  setPosition();
 };
 window.addEventListener('resize',posterCarouselResizeHandler);
 track.querySelectorAll('img').forEach(image=>image.setAttribute('draggable','false'));
 setPosition();
 updatePlayback();
}
const webPalette=[
 {group:"Violet",name:"Violet -2",hex:"#211B2D",rgb:"33, 27, 45"},
 {group:"Violet",name:"Violet -1",hex:"#482E80",rgb:"72, 46, 128"},
 {group:"Violet",name:"Violet 0",hex:"#6941E8",rgb:"105, 65, 232"},
 {group:"Violet",name:"Violet +1",hex:"#9384E7",rgb:"147, 132, 231"},
 {group:"Violet",name:"Violet +2",hex:"#D7C5FF",rgb:"215, 197, 255"},
 {group:"Blanc",name:"Blanc -2",hex:"#CBCBCB",rgb:"203, 203, 203"},
 {group:"Blanc",name:"Blanc -1",hex:"#ECECEC",rgb:"236, 236, 236"},
 {group:"Blanc",name:"Blanc 0",hex:"#F6F6F2",rgb:"246, 246, 242"},
 {group:"Blanc",name:"Blanc +1",hex:"#FFFBF6",rgb:"255, 251, 246"},
 {group:"Blanc",name:"Blanc +2",hex:"#FFFDFB",rgb:"255, 253, 251"},
 {group:"Rose",name:"Rose -2",hex:"#9C1299",rgb:"156, 18, 153"},
 {group:"Rose",name:"Rose -1",hex:"#DC0DD9",rgb:"220, 13, 217"},
 {group:"Rose",name:"Rose 0",hex:"#FF44FC",rgb:"255, 68, 252"},
 {group:"Rose",name:"Rose +1",hex:"#FF93FD",rgb:"255, 147, 253"},
 {group:"Rose",name:"Rose +2",hex:"#FFD0FB",rgb:"255, 208, 251"}
];
function caseflowVideo(){
 return `<div class="web-video-frame web-video-frame-caseflow">
  <video autoplay muted loop playsinline preload="auto" poster="Site%20web%20photo.webp" aria-label="Démonstration vidéo du site CaseFlow">
   <source src="Site-Caseflow-video.webm" type="video/webm">
   Votre navigateur ne prend pas en charge les vidéos WebM.
  </video>
 </div>`;
}
function webVideoPlaceholder(title){
 return `<div class="web-video-frame" role="img" aria-label="Aperçu du projet ${title}. Vidéo au format paysage 1920 par 1080 à intégrer.">
  ${img(photos["sites-web"],`Aperçu du projet ${title}`)}
  <span class="web-video-play" aria-hidden="true">Aperçu</span>
  <span class="web-video-caption">Vidéo au format paysage 1920 × 1080 à intégrer</span>
 </div>`;
}
function sitesWebPage(){
 return `<section class="page web-project-page">
  <a class="btn pill back" href="/index.html">Retour</a>
  <section class="web-case-hero" aria-labelledby="caseflow-title">
   ${caseflowVideo()}
   <div class="web-project-copy">
    <p class="web-project-kicker">Projet web · UI/UX design</p>
    <h2 id="caseflow-title">CaseFlow</h2>
    <p><a class="web-case-link" href="https://caseflow-sae.vercel.app/index.html" target="_blank" rel="noopener noreferrer">CaseFlow</a> est un projet de conception d’interface pensé pour proposer une expérience claire et cohérente. Cette présentation met en avant son univers visuel et son adaptation à un format mobile.</p>
   </div>
  </section>
  <section class="web-design-section" aria-labelledby="caseflow-design-title">
   <div class="web-design-content">
    <div class="web-design-heading">
     <p class="web-project-kicker">Identité visuelle</p>
     <h2 id="caseflow-design-title">Couleurs &amp; typographies</h2>
     <p>La palette CaseFlow associe des nuances de violet, de rose et de blanc.</p>
    </div>
    <div class="web-identity-grid">
     <div class="web-palette" aria-label="Palette de couleurs">
      ${["Violet","Blanc","Rose"].map(group=>`<div class="web-palette-row" aria-label="${group}">
       ${webPalette.filter(color=>color.group===group).map(color=>`<div class="web-swatch" style="--swatch-color:${color.hex}" aria-label="${color.name}, RVB ${color.rgb}, ${color.hex}">
        <span class="web-swatch-name">${color.name}</span><span class="web-swatch-rgb">RVB ${color.rgb}</span>
       </div>`).join('')}
      </div>`).join('')}
     </div>
     <div class="web-type-tools">
      <div class="web-figma" aria-label="Outil de conception utilisé">
       <img src="figma-logo.png" alt="Logo Figma" width="64" height="96">
       <span>Conçu sur Figma</span>
      </div>
      <div class="web-fonts" aria-label="Typographies du site">
       <article class="web-font-card web-font-arsenica"><span>Typographie des titres</span><h3>Arsenica</h3><p>Aa Bb Cc 123</p></article>
       <article class="web-font-card web-font-outfit"><span>Typographie du texte</span><h3>Outfit</h3><p>Aa Bb Cc 123</p></article>
      </div>
     </div>
    </div>
    <p class="web-role-copy">En tant que UI/UX designer sur CaseFlow, j’ai travaillé sur la conception de l’interface et le parcours utilisateur. J’ai utilisé Figma pour organiser les écrans, construire une hiérarchie visuelle lisible et définir un système cohérent de couleurs et de typographies. Le travail de design vise à rendre les contenus faciles à comprendre et les interactions intuitives, tout en gardant une identité graphique homogène.</p>
   </div>
  </section>
  <section class="web-next-project" aria-labelledby="next-web-project-title">
   ${webVideoPlaceholder("mon autre projet web")}
   <div class="web-project-copy">
    <p class="web-project-kicker">Autre projet web</p>
    <h2 id="next-web-project-title">Un autre site à découvrir</h2>
    <p>La présentation vidéo de ce projet sera ajoutée prochainement.</p>
   </div>
  </section>
 </section>`;
}
function page(k){
 const v=P[k];
 return `<section class="page"><a class="btn pill back" href="/index.html">Retour</a><h2>${v.t}</h2><p class="lead">${v.d}</p>
 <div class="project-grid">${[1,2,3,4,5,6].map(n=>`<article class="project"><div class="project-photo" role="img" aria-label="Photo du projet ${n} à ajouter">Photo du projet ${n} à ajouter</div><div class="project-description"><h3>Projet ${n}</h3><p><span>Phrase 1 à compléter.</span><span>Phrase 2 à compléter.</span><span>Phrase 3 à compléter.</span><span>Phrase 4 à compléter.</span><span>Phrase 5 à compléter.</span></p></div></article>`).join('')}</div></section>`;
}
const routeSections={top:'top',projets:'projets','a-propos':'a-propos',contact:'contact',competences:'competences',logiciels:'logiciels',parcours:'parcours'};
function currentRoute(){
 const params=new URLSearchParams(location.search);
 const page=params.get('page');
 const section=params.get('section');
 if(page)return page;
 if(section)return section;
 const legacyHash=decodeURIComponent(location.hash.slice(1));
 if(legacyHash){
  const route=legacyHash==='affiches'?'contenu-visuel':legacyHash;
  const isPage=route==='contenu-visuel'||Boolean(P[route]);
  const type=isPage?'page':'section';
  history.replaceState(null,'',`/index.html?${type}=${encodeURIComponent(route)}`);
  return route;
 }
 const path=decodeURIComponent(location.pathname).replace(/\/+$/,'');
 return path===''||path==='/index.html'?'':path.slice(1);
}
function render(){
 if(posterCarouselAnimationFrame!==null)cancelAnimationFrame(posterCarouselAnimationFrame);
 posterCarouselAnimationFrame=null;
 if(posterCarouselResizeHandler)window.removeEventListener('resize',posterCarouselResizeHandler);
 posterCarouselResizeHandler=null;
 const k=currentRoute();
 const detail=k==='contenu-visuel'||Boolean(P[k]);
 app.innerHTML=k==='contenu-visuel'?affichesPage():k==='sites-web'?sitesWebPage():P[k]?page(k):home();
 app.querySelectorAll('img').forEach(i=>i.addEventListener('error',()=>i.remove()));
 initPosterCarousel();
 if(detail)window.scrollTo(0,0);
 document.title=detail?(P[k]?.t||'Contenu visuel')+' | Théo MOUA – Portfolio':'Théo MOUA | Marketing digital & SEO – Portfolio';
 const year=document.getElementById('current-year');
 if(year)year.textContent=new Date().getFullYear();
 observeSections();
 if(!detail&&routeSections[k]){
  requestAnimationFrame(()=>document.getElementById(k)?.scrollIntoView());
 }
}
addEventListener('popstate',render);
let sectionObserver;
function observeSections(){
 sectionObserver?.disconnect();
 const sections=['projets','a-propos','competences','logiciels','contact'].map(id=>document.getElementById(id)).filter(Boolean);
 if(!('IntersectionObserver' in window)||!sections.length)return;
 sectionObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;
  document.querySelectorAll('.nav-link[data-section]').forEach(link=>{
   const active=link.dataset.section===visible.target.id;
   link.classList.toggle('is-active',active);
   if(active)link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  });
 },{rootMargin:'-90px 0px -55% 0px',threshold:[0.1,0.3,0.6]});
 sections.forEach(section=>sectionObserver.observe(section));
}
document.querySelectorAll('[data-section]').forEach(a=>a.addEventListener('click',e=>{
 e.preventDefault();
 const section=a.dataset.section;
 if(!section)return;
 const current=currentRoute();
 const wasDetail=Boolean(P[current])||current==='contenu-visuel';
 history.pushState(null,'',`/index.html?section=${encodeURIComponent(section)}`);
 if(wasDetail)render();
 document.getElementById(section)?.scrollIntoView();
}));
render();
document.querySelector('.copy-email')?.addEventListener('click',async event=>{
 const button=event.currentTarget;
 const status=document.querySelector('.copy-status');
 if(!navigator.clipboard?.writeText){
  status.textContent='Copie indisponible dans ce navigateur.';
  return;
 }
 try{
  await navigator.clipboard.writeText(button.dataset.copyEmail);
  status.textContent='Copié ✓';
 }catch(error){
  console.error('Impossible de copier l’adresse e-mail.',error);
  status.textContent='Copie impossible. Vous pouvez sélectionner l’adresse ci-dessus.';
 }
});

const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
if(finePointer.matches){
 const cursor=document.createElement('span');
 cursor.className='custom-cursor';
 cursor.setAttribute('aria-hidden','true');
 document.body.append(cursor);
 const trail=matchMedia('(prefers-reduced-motion: reduce)').matches?[]:Array.from({length:6},()=>{
  const dot=document.createElement('span');
  dot.className='cursor-trail';
  dot.setAttribute('aria-hidden','true');
  document.body.append(dot);
  return {element:dot,x:0,y:0};
 });
 let targetX=0,targetY=0,visible=false,frame=0;
 const setPosition=(element,x,y)=>{element.style.left=`${x}px`;element.style.top=`${y}px`};
 const animate=()=>{
  frame=0;
  if(!visible)return;
  let x=targetX,y=targetY;
  for(const dot of trail){
   dot.x+=(x-dot.x)*.28;
   dot.y+=(y-dot.y)*.28;
   setPosition(dot.element,dot.x,dot.y);
   x=dot.x;y=dot.y;
  }
  if(trail.some(dot=>Math.abs(targetX-dot.x)+Math.abs(targetY-dot.y)>.5))frame=requestAnimationFrame(animate);
 };
 document.body.classList.add('has-custom-cursor');
 addEventListener('pointermove',event=>{
  if(event.pointerType==='touch')return;
  targetX=event.clientX;targetY=event.clientY;
  setPosition(cursor,targetX,targetY);
  cursor.style.opacity='1';
  if(!visible){
   visible=true;
   trail.forEach(dot=>{dot.x=targetX;dot.y=targetY;setPosition(dot.element,targetX,targetY)});
  }
  if(trail.length&&!frame)frame=requestAnimationFrame(animate);
 },{passive:true});
 addEventListener('pointerover',event=>{
  if(event.pointerType==='touch')return;
  const isClickable=Boolean(event.target.closest('a,button,[role="button"],input,select,textarea,label'));
  cursor.classList.toggle('is-clickable',isClickable);
  cursor.style.width=isClickable?'16px':'28px';
  cursor.style.height=isClickable?'16px':'28px';
  cursor.style.backgroundColor=isClickable?'#102b88':'#2a4fd8';
 },{passive:true});
 addEventListener('pointerout',event=>{
  if(!event.relatedTarget){
   cursor.style.opacity='0';
   cursor.style.width='28px';
   cursor.style.height='28px';
   cursor.style.backgroundColor='#2a4fd8';
   cursor.classList.remove('is-clickable');
  }
 });
}
