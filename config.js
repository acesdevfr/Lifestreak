// Links of the download buttons.
// When the iOS app is approved on the App Store, paste its link in "ios" and the
// "iOS coming soon" button becomes a real download button.
const LINKS={android:'https://github.com/acesdevfr/Lifestreak/releases/latest',ios:''};
document.querySelectorAll('[data-link]').forEach(a=>{const u=LINKS[a.dataset.link];
  if(u){a.href=u}else{a.classList.add('off');a.removeAttribute('href');a.setAttribute('aria-disabled','true');const s=a.querySelector('[data-i]');if(s)s.dataset.i='ios_soon'}});
