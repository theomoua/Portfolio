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
const description="Je suis un étudiant en marketing digital investi qui a réalisé de nombreux projets : affiches graphiques, sites web, actions de communication, etc. Découvrez une partie de moi dans ce portfolio !";
const app=document.getElementById('app');
const img=(src,alt="")=>`<img src="${src}" alt="${alt}" loading="lazy">`;
function home(){
 return `<section class="hero" id="top">
  <div class="hero-visual"><div class="photo">${img(photos.hero,"Photo de Théo")}</div><p class="hero-caption">Participation à la journée porte ouverte de l'IUT de Sceaux de l'Université Paris-Saclay, 2026.</p></div>
  <div class="hero-copy"><h1>Théo MOUA, étudiant en <span class="h1-highlight">marketing digital</span></h1><p class="tag">${description}</p><p class="availability"><span class="availability-dot" aria-hidden="true"></span>Disponible – stage dès janvier 2027</p><a class="btn pill hero-about-link" href="a-propos.html">À propos</a></div>
 </section>
 <section class="stats" aria-label="Quelques chiffres">
  <article class="stat-card"><h2>Années d’études</h2><p>3</p></article>
  <article class="stat-card"><h2>Projets réalisés</h2><p>+10</p></article>
  <article class="stat-card"><h2>Expériences professionnelles</h2><p>2</p></article>
 </section>
 <section class="work anchor-section" id="projets"><h2>Projets</h2><div class="grid">
 ${Object.entries(P).map(([k,v])=>`<a class="card" href="#${k}">${photos[k]?img(photos[k],`Photo pour ${v.t}`):`<div class="ph">Photo ${v.t}</div>`}<div class="lbl"><h3>${v.t}</h3></div></a>`).join('')}
 </div></section>`;
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
function page(k){
 const v=P[k];
 return `<section class="page"><a class="btn pill back" href="#">Retour</a><h2>${v.t}</h2><p class="lead">${v.d}</p>
 <div class="project-grid">${[1,2,3,4,5,6].map(n=>`<article class="project"><div class="project-photo" role="img" aria-label="Photo du projet ${n} à ajouter">Photo du projet ${n} à ajouter</div><div class="project-description"><h3>Projet ${n}</h3><p><span>Phrase 1 à compléter.</span><span>Phrase 2 à compléter.</span><span>Phrase 3 à compléter.</span><span>Phrase 4 à compléter.</span><span>Phrase 5 à compléter.</span></p></div></article>`).join('')}</div></section>`;
}
function render(){
 const k=decodeURIComponent(location.hash.slice(1));
 const detail=k==='affiches'||Boolean(P[k]);
 app.innerHTML=k==='affiches'?affichesPage():P[k]?page(k):home();
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
 if(!detail&&['top','projets','contact'].includes(k)){
  requestAnimationFrame(()=>document.getElementById(k)?.scrollIntoView());
 }
}
addEventListener('hashchange',render);
let sectionObserver;
function observeSections(){
 sectionObserver?.disconnect();
 const sections=['projets','contact'].map(id=>document.getElementById(id)).filter(Boolean);
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
