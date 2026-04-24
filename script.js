// SYQA Capital — Shared scripts. Used on every page.

(function(){
  // Nav scroll state
  const n = document.getElementById('nav');
  if(n){
    const os = () => {
      if(window.scrollY > 20) n.classList.add('scr');
      else n.classList.remove('scr');
    };
    window.addEventListener('scroll', os, {passive:true});
    os();
  }

  // Mobile burger menu
  const b = document.getElementById('bg');
  const nl = document.getElementById('nl');
  if(b && nl){
    b.addEventListener('click', () => {
      nl.classList.toggle('open');
      b.classList.toggle('open');
    });
    nl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nl.classList.remove('open');
        b.classList.remove('open');
      });
    });
  }

  // Language toggle — persists across pages via localStorage
  const be = document.getElementById('bEN');
  const bj = document.getElementById('bJP');
  const setLang = (l) => {
    if(l === 'jp'){
      document.body.classList.add('jp');
      document.documentElement.lang = 'ja';
      if(bj) bj.classList.add('active');
      if(be) be.classList.remove('active');
      document.querySelectorAll('[data-jp]').forEach(e => e.textContent = e.dataset.jp);
    } else {
      document.body.classList.remove('jp');
      document.documentElement.lang = 'en';
      if(be) be.classList.add('active');
      if(bj) bj.classList.remove('active');
      document.querySelectorAll('[data-en]').forEach(e => e.textContent = e.dataset.en);
    }
    try{ localStorage.setItem('syqa-lang', l); } catch(e){}
  };
  if(be) be.addEventListener('click', () => setLang('en'));
  if(bj) bj.addEventListener('click', () => setLang('jp'));
  try{
    const sv = localStorage.getItem('syqa-lang');
    if(sv === 'jp') setLang('jp');
  } catch(e){}

  // Reveal animations on scroll
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((es) => {
      es.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.1, rootMargin: '0px 0px -60px 0px'});
    document.querySelectorAll('.rv').forEach(e => io.observe(e));
  } else {
    // Fallback: just show everything
    document.querySelectorAll('.rv').forEach(e => e.classList.add('in'));
  }
})();
