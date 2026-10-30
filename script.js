const P={
 affiches:{t:"Affiches",d:"Des affiches graphiques sur le sport, pensées et réalisées sur Photoshop."},
 "sites-web":{t:"Sites web",d:"Les sites que j’ai conçus et réalisés, de la maquette à la mise en ligne."},
 communication:{t:"Communication",d:"Réseaux sociaux, supports imprimés et identités : mes projets de communication."},
 entrepreneuriat:{t:"Entrepreneuriat",d:"Les projets que j’ai lancés et les aventures entrepreneuriales auxquelles j’ai participé."}
};
const photos={
 hero:"Photo%20portfolio%20hero.jpeg",
 affiches:"Affiches%20photo.jpg",
 "sites-web":"Site%20web%20photo.png",
 communication:"Communication%20photo.png"
};
const posterCards=[
 {image:"JUDE_BELLINGHAM_POSTER.jpg",alt:"Affiche de Jude Bellingham"},
 {image:"Raphina_POSTER.jpg",alt:"Affiche de Raphinha"},
 {image:"VINICIUS_POSTER.jpg",alt:"Affiche de Vinícius Júnior"},
 {image:"PALMER_POSTER.jpg",alt:"Affiche de Cole Palmer"},
 {image:"Griezmann_retreat_POSTER.jpg",alt:"Affiche d’Antoine Griezmann"},
 {image:"JOAO_NEVES_POSTER.jpg",alt:"Affiche de João Neves"},
 {image:"Ibrahimovic_POSTER.jpg",alt:"Affiche de Zlatan Ibrahimović"},
 {image:"MADUEKE_POSTER.jpg",alt:"Affiche de Noni Madueke"},
 {image:"MARCUS_THURAM_POSTER.jpg",alt:"Affiche de Marcus Thuram"},
 {image:"BUSQUET_POSTER.jpg",alt:"Affiche de Sergio Busquets"},
 {image:"CURRY_POSTER.jpg",alt:"Affiche de Stephen Curry"},
 {image:"WENBANYAMA_POSTER.jpg",alt:"Affiche de Victor Wembanyama"}
];
const description="Étudiant en 3e année de BUT Techniques de commercialisation, je me suis spécialisé en marketing digital. Je recherche un stage en marketing digital ou en communication digitale dès janvier 2027. Vous découvrirez dans ce portfolio de nombreux projets personnels et universitaires que j’ai réalisés.";
const app=document.getElementById('app');
const img=(src,alt="")=>`<img src="${src}" alt="${alt}" loading="lazy">`;
function home(){
 return `<section class="hero" id="top">
  <div class="hero-visual"><div class="photo">${img(photos.hero,"Photo de Théo")}</div><p class="hero-caption">Participation à la journée porte ouverte de l'IUT de Sceaux de l'Université Paris-Saclay, 2026.</p></div>
  <div class="hero-copy"><h1>Théo MOUA, étudiant en <span class="h1-highlight">marketing digital</span></h1><p class="tag">${description}</p><p class="availability"><span class="availability-dot" aria-hidden="true"></span>Disponible – stage dès janvier 2027</p></div>
 </section>
 <section class="work home-projects anchor-section" id="projets"><h2>Projets</h2><div class="grid">
 ${Object.entries(P).map(([k,v])=>`<a class="card" href="#${k}">${photos[k]?img(photos[k],`Photo pour ${v.t}`):`<div class="ph">Photo ${v.t}</div>`}<div class="lbl"><h3>${v.t}</h3></div></a>`).join('')}
 </div></section>
 <section class="home-about anchor-section" id="a-propos" aria-labelledby="home-about-title">
  <div class="home-section-content">
   <h2 id="home-about-title">À propos de moi</h2>
   <p class="about-copy">Je m’appelle Théo MOUA et j’étudie le marketing digital. J’aime donner forme à une idée et la transformer en contenu clair, utile et adapté à son public.</p>
   <h3>Ce que je recherche</h3>
   <p class="about-copy">Je cherche un stage de 3 à 6 mois en marketing digital à partir de janvier 2027. Je souhaite participer à des missions concrètes, contribuer à une équipe et continuer à progresser au contact du terrain.</p>
   <p class="about-copy">En dehors de mes projets, j’aime le sport et les affiches qui racontent une histoire en quelques secondes.</p>
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
    <span class="cert-badge">Google Analytics 4</span>
    <span class="cert-badge">Semrush Academy</span>
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
  <a class="btn pill back" href="#">Retour</a>
  <div class="poster-intro">
   <div class="poster-deck" tabindex="0" role="group" aria-label="Trois affiches disposées comme des cartes à jouer">
    ${posterCards.slice(0,3).map((card,index)=>`<figure class="poster-deck-card poster-artwork-card poster-artwork-card-${index+1}" aria-label="${card.alt}">${posterArtwork(card)}</figure>`).join('')}
   </div>
   <div class="poster-heading">
    <h2>Des affiches graphiques sur le sport</h2>
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
   <div class="poster-gallery-heading"><h3 id="poster-gallery-title">Les affiches</h3><p>Survolez ou sélectionnez une carte pour découvrir son visuel.</p></div>
   <div class="poster-card-grid">
    ${posterCards.map((card,index)=>`<button class="poster-flip-card" type="button" aria-label="Révéler ${card.alt.toLowerCase()}" aria-pressed="false">
     <span class="poster-flip-inner">
      <span class="poster-card-back" aria-hidden="true"><span class="poster-monogram">T<span>M</span></span></span>
      <span class="poster-card-front" aria-hidden="true">${posterArtwork(card)}</span>
     </span>
    </button>`).join('')}
   </div>
  </section>
 </section>`;
}
const webPalette=[
 {group:"Principale",name:"Bleu profond",hex:"#1114A8",rgb:"17, 20, 168"},
 {group:"Principale",name:"Bleu",hex:"#294FDD",rgb:"41, 79, 221"},
 {group:"Principale",name:"Bleu clair",hex:"#607DF2",rgb:"96, 125, 242"},
 {group:"Secondaire",name:"Jaune profond",hex:"#EFB400",rgb:"239, 180, 0"},
 {group:"Secondaire",name:"Jaune",hex:"#F1CE00",rgb:"241, 206, 0"},
 {group:"Secondaire",name:"Jaune clair",hex:"#FFF080",rgb:"255, 240, 128"},
 {group:"Neutre",name:"Gris doux",hex:"#F1F1ED",rgb:"241, 241, 237"},
 {group:"Neutre",name:"Blanc chaud",hex:"#FFFAF5",rgb:"255, 250, 245"},
 {group:"Neutre",name:"Blanc",hex:"#FFFFFF",rgb:"255, 255, 255"}
];
function webVideoPlaceholder(title){
 return `<div class="web-video-frame" role="img" aria-label="Aperçu du projet ${title}. Vidéo au format paysage 1920 par 1080 à intégrer.">
  ${img(photos["sites-web"],`Aperçu du projet ${title}`)}
  <span class="web-video-play" aria-hidden="true">Aperçu</span>
  <span class="web-video-caption">Vidéo au format paysage 1920 × 1080 à intégrer</span>
 </div>`;
}
function sitesWebPage(){
 return `<section class="page web-project-page">
  <a class="btn pill back" href="#">Retour</a>
  <section class="web-case-hero" aria-labelledby="caseflow-title">
   ${webVideoPlaceholder("CaseFlow")}
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
     <p>Une palette structurée autour de bleus principaux, de jaunes secondaires et de tons neutres.</p>
    </div>
    <div class="web-identity-grid">
     <div class="web-palette" aria-label="Palette de couleurs">
      ${["Principale","Secondaire","Neutre"].map(group=>`<div class="web-palette-row" aria-label="${group}">
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
 return `<section class="page"><a class="btn pill back" href="#">Retour</a><h2>${v.t}</h2><p class="lead">${v.d}</p>
 <div class="project-grid">${[1,2,3,4,5,6].map(n=>`<article class="project"><div class="project-photo" role="img" aria-label="Photo du projet ${n} à ajouter">Photo du projet ${n} à ajouter</div><div class="project-description"><h3>Projet ${n}</h3><p><span>Phrase 1 à compléter.</span><span>Phrase 2 à compléter.</span><span>Phrase 3 à compléter.</span><span>Phrase 4 à compléter.</span><span>Phrase 5 à compléter.</span></p></div></article>`).join('')}</div></section>`;
}
function render(){
 const k=decodeURIComponent(location.hash.slice(1));
 const detail=k==='affiches'||Boolean(P[k]);
 app.innerHTML=k==='affiches'?affichesPage():k==='sites-web'?sitesWebPage():P[k]?page(k):home();
 app.querySelectorAll('img').forEach(i=>i.addEventListener('error',()=>i.remove()));
 app.querySelectorAll('.poster-flip-card').forEach((card,index)=>{
  const reveal=()=>{
   card.classList.add('is-revealed');
   card.setAttribute('aria-pressed','true');
   card.setAttribute('aria-label',`Affiche ${index+1} révélée`);
  };
  card.addEventListener('pointerenter',reveal,{once:true});
  card.addEventListener('focus',reveal,{once:true});
 });
 if(detail)window.scrollTo(0,0);
 document.title=detail?(P[k]?.t||'Affiches')+' | Théo MOUA – Portfolio':'Théo MOUA | Marketing digital & SEO – Portfolio';
 const year=document.getElementById('current-year');
 if(year)year.textContent=new Date().getFullYear();
 observeSections();
 if(!detail&&['top','projets','a-propos','competences','logiciels','contact'].includes(k)){
  requestAnimationFrame(()=>document.getElementById(k)?.scrollIntoView());
 }
}
addEventListener('hashchange',render);
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
 const currentHash=decodeURIComponent(location.hash.slice(1));
 const wasDetail=Boolean(P[currentHash])||currentHash==='affiches';
 history.pushState(null,'',`#${section}`);
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
