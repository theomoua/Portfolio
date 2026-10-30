const themeRoot=document.documentElement;
const themeToggle=document.querySelector('.theme-toggle');
const colorScheme=matchMedia('(prefers-color-scheme: dark)');
let savedTheme=null;

try{
 const storedTheme=localStorage.getItem('portfolio-theme');
 if(storedTheme==='light'||storedTheme==='dark')savedTheme=storedTheme;
}catch(error){
 console.warn('Le thème ne peut pas être mémorisé dans ce navigateur.',error);
}

function applyTheme(theme){
 themeRoot.dataset.theme=theme;
 if(!themeToggle)return;
 const nextTheme=theme==='dark'?'light':'dark';
 const label=`Basculer en mode ${nextTheme==='dark'?'nuit':'jour'}`;
 themeToggle.setAttribute('aria-label',label);
 themeToggle.setAttribute('title',label);
 themeToggle.setAttribute('aria-pressed',String(theme==='dark'));
}

applyTheme(savedTheme||(colorScheme.matches?'dark':'light'));

themeToggle?.addEventListener('click',()=>{
 const nextTheme=themeRoot.dataset.theme==='dark'?'light':'dark';
 applyTheme(nextTheme);
 savedTheme=nextTheme;
 try{
  localStorage.setItem('portfolio-theme',nextTheme);
 }catch(error){
  console.warn('Le choix du thème ne peut pas être mémorisé dans ce navigateur.',error);
 }
});

colorScheme.addEventListener('change',event=>{
 if(savedTheme===null)applyTheme(event.matches?'dark':'light');
});
