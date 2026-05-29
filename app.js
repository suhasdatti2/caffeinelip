(function(){
  var CHROME=`<div id="progress" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>
<div class="cursor-dot" aria-hidden="true"></div>
<header class="nav" id="nav">
  <div class="container">
    <a href="/" class="brand" data-cursor aria-label="lip home">lip<span class="d">.</span></a>
    <nav class="nav-links" aria-label="Primary">
      <a href="/#evolved" data-cursor>Why lip</a>
      <a href="/#shop" data-cursor>Flavors</a>
      <a href="/#story" data-cursor>Story</a>
      <a href="/#reviews" data-cursor>Reviews</a>
      <a href="/#pricing" data-cursor>Pricing</a>
    </nav>
    <div class="nav-actions">
      <a href="/shop" class="btn btn-dark nav-cta" data-cursor><span>Shop now</span></a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <a href="/#evolved">Why lip</a>
  <a href="/#shop">Flavors</a>
  <a href="/#story">Story</a>
  <a href="/#reviews">Reviews</a>
  <a href="/#pricing">Pricing</a>
  <a href="/shop" class="btn btn-dark"><span>Shop now</span></a>
</div>`;
  var FOOTER=`<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div>
        <a href="/" class="brand">lip<span class="d">.</span></a>
        <p class="footer-blurb">Precision caffeine lip pouches engineered for clean, sustained energy. Tobacco-free, sugar-free, and lab-tested every batch.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram" data-cursor><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="X" data-cursor><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="#" aria-label="TikTok" data-cursor><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V9.7a5.7 5.7 0 1 0 4.92 5.65V9.01a7.34 7.34 0 0 0 4.16 1.3V7.2a4.28 4.28 0 0 1-3.1-1.38z"/></svg></a>
          <a href="#" aria-label="YouTube" data-cursor><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg></a>
        </div>
      </div>
      <div class="footer-col"><h4>Shop</h4><a href="/shop">All flavors</a><a href="/#pricing">Subscriptions</a><a href="/#pricing">The vault</a><a href="/shop">Limited drops</a><a href="/#contact">Gift cards</a></div>
      <div class="footer-col"><h4>Company</h4><a href="/#story">Our story</a><a href="/#evolved">The science</a><a href="/#reviews">Reviews</a><a href="#">Careers</a><a href="#">Press</a></div>
      <div class="footer-col"><h4>Support</h4><a href="/#contact">Contact</a><a href="#">FAQ</a><a href="#">Shipping &amp; returns</a><a href="#">Lab results</a><a href="#">Track order</a></div>
    </div>
    <div class="footer-bot">
      <span>&copy; <span id="year">2026</span> lip Inc. All rights reserved.</span>
      <div class="legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><a href="#">Accessibility</a></div>
    </div>
    <p class="disclaimer">These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Contains caffeine. Not recommended for those under 18, pregnant, or sensitive to caffeine.</p>
  </div>
</footer>`;
  var c=document.getElementById('site-chrome'); if(c) c.innerHTML=CHROME;
  var f=document.getElementById('site-footer'); if(f) f.innerHTML=FOOTER;
})();

(function(){
  "use strict";
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* hero entrance */
  var hero = document.getElementById('hero');
  if(hero) requestAnimationFrame(function(){requestAnimationFrame(function(){hero.classList.add('loaded');});});
  var _yr=document.getElementById('year'); if(_yr) _yr.textContent = new Date().getFullYear();

  /* orbiting pouches in evolved section */
  var orbits = [].slice.call(document.querySelectorAll('.orb-pouch'));
  var orbArt = document.querySelector('.evolved-art');
  var orbT = 0;
  function orbitLoop(){
    orbT += 0.0045;
    var w = orbArt ? orbArt.clientWidth : 420;
    var rx = w*0.38, ry = w*0.30; // px radius (elliptical)
    for(var i=0;i<orbits.length;i++){
      var el = orbits[i];
      var a = (Math.PI*2/orbits.length)*i + orbT;
      var x = Math.cos(a)*rx, y = Math.sin(a)*ry;
      var rot = Math.sin(a*1.3)*22;
      el.style.transform = 'translate(-50%,-50%) translate('+x+'px,'+y+'px) rotate('+rot+'deg)';
      el.style.zIndex = (y > 0) ? 3 : 1; /* in front when below tin centre */
    }
    if(!reduce) requestAnimationFrame(orbitLoop);
  }
  if(orbits.length) requestAnimationFrame(orbitLoop);

  /* progress + nav + parallax */
  var nav=document.getElementById('nav'), progress=document.getElementById('progress');
  var px=[].slice.call(document.querySelectorAll('[data-parallax]')), ticking=false;

  /* ---- Top 6 flavours: scroll-driven 3D galaxy ---- */
  var FLAV=[
    {n:'Arctic Mint',  wm:'Mint',   dose:'100', note:'Glacial spearmint with a clean, sub-zero finish.',        c:'#19c6dc', n1:'#0a3a4a', n2:'#1796b4'},
    {n:'Citrus Surge', wm:'Citrus', dose:'150', note:'Blood-orange zest with an electric, high-voltage kick.',  c:'#ff8a1e', n1:'#4a2a06', n2:'#c4630e'},
    {n:'Berry Blast',  wm:'Berry',  dose:'100', note:'Wild blackberry and crushed raspberry, jammy and bold.',  c:'#ec3ad0', n1:'#440b4c', n2:'#a01f90'},
    {n:'Blue Razz',    wm:'Razz',   dose:'100', note:'Tart blue raspberry — candy-cool and impossibly smooth.', c:'#4f6dff', n1:'#101a5a', n2:'#2f44c0'},
    {n:'Mango Tango',  wm:'Mango',  dose:'100', note:'Sun-ripened mango layered with bright passionfruit.',     c:'#ffc01e', n1:'#4a3406', n2:'#c08a0f'},
    {n:'Cherry Cola',  wm:'Cola',   dose:'120', note:'Dark wild cherry folded into deep vintage cola.',          c:'#ff2e54', n1:'#4a0814', n2:'#b01030'}
  ];
  var flvSec=document.getElementById('top6'),flvSticky=document.getElementById('flvSticky'),flvGalaxy=document.getElementById('flvGalaxy'),
      flvCan=document.getElementById('flvCan'),flvCanWrap=document.getElementById('flvCanWrap'),flvWm=document.getElementById('flvWm'),
      flvMeta=document.getElementById('flvMeta'),flvDotsEls=flvSticky?[].slice.call(flvSticky.querySelectorAll('.flv-dots i')):[],
      flvCur=-1;

  /* ---- build a real 3D cylinder tin: shaded wall segments + lid + bottom ---- */
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function buildBox(el){
    var name=el.getAttribute('data-name')||'';
    var dose=el.getAttribute('data-dose')||'100';
    var cap=el.getAttribute('data-cap')||'15 caffeine pouches';
    var compact=el.hasAttribute('data-compact')||!!el.closest('.pcard');
    var N=32, segs='';
    for(var k=0;k<N;k++){
      var ang=k*360/N, shade=Math.cos(ang*Math.PI/180);
      var l1=clamp(Math.round(56+34*shade),16,93), l2=clamp(l1-13,8,84);
      segs+='<div class="cyl-seg" style="transform:rotateY('+ang+'deg) translateZ(10em);'
        +'background:linear-gradient(180deg,hsl(216,22%,'+l1+'%),hsl(216,20%,'+l2+'%) 54%,'
        +'var(--flavor) 60%,color-mix(in srgb,var(--flavor) 58%,#000) 100%)"></div>';
    }
    var lbl='<div class="can-label"><div class="wm">lip<span class="d">.</span></div>'
      +(compact?'':'<div class="cap">'+cap+'</div>')
      +'<div class="dose">'+dose+'<span>mg</span></div>'
      +(name?'<div class="fl">'+name+'</div>':'')
      +'</div>';
    el.innerHTML='<div class="cyl">'+segs
      +'<div class="cyl-bottom"></div>'
      +'<div class="cyl-top"><div class="gloss"></div><div class="ring"></div><div class="ring2"></div>'+lbl+'</div>'
      +'</div>';
  }
  [].slice.call(document.querySelectorAll('.can')).forEach(buildBox);
  /* print lip. branding on every floating pouch */
  [].slice.call(document.querySelectorAll('.pouch')).forEach(function(p){p.innerHTML='<span class="pl">lip<span class="d">.</span></span>';});
  var flvFlash=document.getElementById('flvFlash');

  function setFlavor(i){
    if(i===flvCur) return; flvCur=i; var f=FLAV[i];
    flvSticky.style.setProperty('--flavor',f.c);
    flvSticky.style.setProperty('--neb1',f.n1);
    flvSticky.style.setProperty('--neb2',f.n2);
    flvCan.style.setProperty('--flavor',f.c);
    document.getElementById('flvNum').textContent='0'+(i+1);
    document.getElementById('flvName').textContent=f.n;
    document.getElementById('flvNote').textContent=f.note;
    document.getElementById('flvDose').textContent=f.dose+'mg caffeine';
    var lblFl=flvCan.querySelector('.can-label .fl'); if(lblFl) lblFl.textContent=f.n;
    var lblDose=flvCan.querySelector('.can-label .dose'); if(lblDose) lblDose.innerHTML=f.dose+'<span>mg</span>';
    document.getElementById('flvWm').textContent=f.wm;
    for(var d=0;d<flvDotsEls.length;d++) flvDotsEls[d].classList.toggle('on',d===i);
    /* fire a colour burst + name pop synced to the flavour/branding change */
    if(!reduce){
      if(flvFlash){flvFlash.classList.remove('go');void flvFlash.offsetWidth;flvFlash.classList.add('go');}
      var nm=document.getElementById('flvName');
      nm.classList.remove('pop');void nm.offsetWidth;nm.classList.add('pop');
    }
  }
  function updateFlavors(p){
    if(!flvSec) return;
    var seg=p*FLAV.length, idx=Math.min(FLAV.length-1,Math.floor(seg)), lp=seg-idx;
    setFlavor(idx);
    var t=Math.sin(Math.min(1,Math.max(0,lp))*Math.PI);          /* 0 at edges (galaxy gap), 1 mid-flavour */
    var spin=p*720;                                              /* the only rotation on the site — scroll-driven */
    var scale=0.72+0.28*t;
    var op=Math.min(1,t*1.7);
    var cyl=flvCan&&flvCan.firstElementChild;
    if(!reduce&&cyl){
      cyl.style.transform='rotateX(58deg) rotateY('+spin.toFixed(2)+'deg)';
    }
    flvCanWrap.style.transform='scale('+scale.toFixed(4)+')';
    flvCanWrap.style.opacity=op.toFixed(3); flvWm.style.opacity=(0.04+0.12*t).toFixed(3); flvMeta.style.opacity=op.toFixed(3);
  }

  /* ---- eased render loop: scroll-linked motion glides instead of snapping ---- */
  var smoothY=window.scrollY||0, gp=0, running=false;
  function applyInstant(st){
    var docH=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.width=(docH>0?(st/docH)*100:0)+'%';
    nav.classList.toggle('scrolled',st>24);
  }
  function render(){
    var st=window.scrollY||document.documentElement.scrollTop||0;
    applyInstant(st);
    /* parallax follows an eased scroll value */
    smoothY+=(st-smoothY)*0.11;
    if(Math.abs(st-smoothY)<0.06) smoothY=st;
    if(!reduce){for(var i=0;i<px.length;i++){var el=px[i];var sp=parseFloat(el.getAttribute('data-parallax'))||0;el.style.transform='translate3d(0,'+(smoothY*sp*-1).toFixed(2)+'px,0)';}}
    /* galaxy progress eases toward target */
    var gpT=0, settledG=true;
    if(flvSec){
      var rectTop=flvSec.getBoundingClientRect().top, total=flvSec.offsetHeight-window.innerHeight;
      gpT=Math.min(1,Math.max(0,(-rectTop)/(total||1)));
      gp+=(gpT-gp)*0.09;
      if(Math.abs(gpT-gp)<0.0004) gp=gpT; else settledG=false;
      updateFlavors(gp);
    }
    if(Math.abs(st-smoothY)>0.06 || !settledG){ requestAnimationFrame(render); }
    else running=false;
  }
  function kick(){ if(!running){ running=true; requestAnimationFrame(render); } }
  window.addEventListener('scroll',kick,{passive:true});
  window.addEventListener('resize',kick,{passive:true});
  render();

  /* reveal */
  var rev=[].slice.call(document.querySelectorAll('[data-reveal]'));
  if('IntersectionObserver' in window && !reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    rev.forEach(function(el){io.observe(el);});
  } else rev.forEach(function(el){el.classList.add('in');});

  /* count-up */
  function fmt(v,o){if(o.compact&&v>=1000){if(v>=1e6)return (v/1e6).toFixed(v%1e6===0?0:1)+'M';if(v>=1e3)return (v/1e3).toFixed(0)+'K';}return v.toFixed(o.decimals);}
  function run(el){
    var t=parseFloat(el.getAttribute('data-count')),dec=parseInt(el.getAttribute('data-decimals')||'0',10),suf=el.getAttribute('data-suffix')||'',comp=el.getAttribute('data-format')==='compact',o={decimals:dec,compact:comp};
    if(reduce){el.textContent=fmt(t,o)+suf;return;}
    var dur=1700,start=null;
    function step(ts){if(!start)start=ts;var p=Math.min((ts-start)/dur,1),e=1-Math.pow(1-p,3);el.textContent=fmt(t*e,o)+suf;if(p<1)requestAnimationFrame(step);else el.textContent=fmt(t,o)+suf;}
    requestAnimationFrame(step);
  }
  var counts=[].slice.call(document.querySelectorAll('[data-count]'));
  if('IntersectionObserver' in window){var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);cio.unobserve(e.target);}});},{threshold:.5});counts.forEach(function(el){cio.observe(el);});}else counts.forEach(run);

  /* mobile menu */
  var burger=document.getElementById('hamburger'),mm=document.getElementById('mobileMenu');
  function setMenu(o){document.body.classList.toggle('menu-open',o);burger.setAttribute('aria-expanded',o?'true':'false');mm.setAttribute('aria-hidden',o?'false':'true');document.body.style.overflow=o?'hidden':'';}
  burger.addEventListener('click',function(){setMenu(!document.body.classList.contains('menu-open'));});
  mm.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});

  /* horizontal drag */
  var track=document.getElementById('hTrack');
  if(track){
    var down=false,sx=0,ss=0;
    track.addEventListener('pointerdown',function(e){down=true;sx=e.clientX;ss=track.scrollLeft;track.style.cursor='grabbing';});
    window.addEventListener('pointermove',function(e){if(!down)return;track.scrollLeft=ss-(e.clientX-sx);});
    window.addEventListener('pointerup',function(){down=false;track.style.cursor='';});
    track.addEventListener('wheel',function(e){if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){var aS=track.scrollLeft<=0,aE=track.scrollLeft>=track.scrollWidth-track.clientWidth-1;if(!(aS&&e.deltaY<0)&&!(aE&&e.deltaY>0)){track.scrollLeft+=e.deltaY;e.preventDefault();}}},{passive:false});
  }

  /* custom cursor */
  var dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
  if(dot&&ring&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    var mx=0,my=0,rx=0,ry=0;
    window.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)';});
    (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%)';requestAnimationFrame(loop);})();
    document.querySelectorAll('a,button,[data-cursor]').forEach(function(el){el.addEventListener('mouseenter',function(){ring.classList.add('hover');dot.classList.add('hover');});el.addEventListener('mouseleave',function(){ring.classList.remove('hover');dot.classList.remove('hover');});});
  }

  /* smooth anchors */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href');if(id.length<2)return;var t=document.querySelector(id);if(!t)return;e.preventDefault();var y=t.getBoundingClientRect().top+window.scrollY-56;window.scrollTo({top:y,behavior:reduce?'auto':'smooth'});});});

  /* immediate-effects tabs */
  var fx=[
    {t:"Immediate effects",x:"Experience a smooth but powerful lift within the first 10 minutes as caffeine and L-theanine activate key neurotransmitters — transforming scattered thoughts into laser-focused productivity.",g:"radial-gradient(60% 80% at 30% 30%,#caa6ff66,transparent),radial-gradient(70% 90% at 75% 60%,#ff9e6e55,transparent),linear-gradient(135deg,#5a3a72,#8a5a4a)"},
    {t:"Hours of clean focus",x:"No spike, no cliff. The L-theanine pairing flattens the comedown so your energy tapers gently over four to six hours — productive right through the afternoon, with no 3pm wall.",g:"radial-gradient(60% 80% at 25% 30%,#7ec6ff66,transparent),radial-gradient(70% 90% at 80% 70%,#ffd28a55,transparent),linear-gradient(135deg,#2f4a6a,#a8763e)"},
    {t:"Day after day",x:"Consistent use helps support steady alertness and mood without building the heavy tolerance of high-dose energy drinks. A precise 100mg keeps your baseline honest.",g:"radial-gradient(60% 80% at 30% 30%,#8affc066,transparent),radial-gradient(70% 90% at 78% 60%,#ffe08a55,transparent),linear-gradient(135deg,#2f6a4a,#9a8a3e)"},
    {t:"Long-term clarity",x:"B6 and B12 support healthy cellular energy metabolism over time, while going tobacco- and sugar-free protects the habits future-you will thank present-you for.",g:"radial-gradient(60% 80% at 30% 30%,#caa6ff66,transparent),radial-gradient(70% 90% at 75% 55%,#ff9ec455,transparent),linear-gradient(135deg,#4a3a72,#8a4a6a)"}
  ];
  var fxBanner=document.getElementById('fxBanner'),fxGlow=document.getElementById('fxGlow'),fxTitle=document.getElementById('fxTitle'),fxText=document.getElementById('fxText');
  document.querySelectorAll('.fx-tabs button').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.fx-tabs button').forEach(function(x){x.classList.remove('active');});
      b.classList.add('active');
      var d=fx[parseInt(b.getAttribute('data-fx'),10)];
      fxText.style.opacity='0';
      fxGlow.style.background=d.g;
      setTimeout(function(){fxTitle.textContent=d.t;fxText.textContent=d.x;fxText.style.opacity='1';},200);
    });
  });

  /* FAQ */
  var faqs={
    general:[
      ["What are lip's ingredients?","Plant-derived caffeine anhydrous, L-theanine, vitamin B6 and B12, food-grade plant cellulose and natural flavor. Tobacco-free, nicotine-free, sugar-free and vegan."],
      ["Is lip safe?","Each pouch is a precisely measured 100mg of caffeine — about one strong cup of coffee. It's made in an FDA-registered, GMP-certified facility and third-party lab tested every batch. Not for those under 18, pregnant, or caffeine-sensitive."],
      ["Is there any nicotine or tobacco?","None. lip contains zero nicotine and zero tobacco. It's caffeine and supportive nutrients only."]
    ],
    focus:[
      ["How fast will I feel it?","Most people feel a clean lift within 90 seconds to 10 minutes thanks to buccal (gumline) absorption, which bypasses slow digestion."],
      ["Will I crash?","No. We pair caffeine 2:1 with L-theanine specifically to smooth the curve, so you ramp up clean and taper gently — never wired, never crashing."],
      ["How long does focus last?","Typically four to six hours of steady alertness, depending on your tolerance and which strength you choose."]
    ],
    usage:[
      ["How do I use a lip pouch?","Place one pouch between your gum and upper lip. Leave it for 15–30 minutes, then discard. No spitting required, no water needed."],
      ["How many can I take per day?","We recommend no more than 4 pouches (400mg total caffeine) in a 24-hour period. Start with one to gauge your sensitivity."],
      ["How should I store them?","Keep tins in a cool, dry place. Sealed tins stay fresh for 12 months; once opened, enjoy within 90 days for peak flavor."]
    ]
  };
  var faqList=document.getElementById('faqList');
  function renderFaq(key){
    faqList.innerHTML='';
    faqs[key].forEach(function(item){
      var acc=document.createElement('div');acc.className='acc';
      var q=document.createElement('button');q.className='acc-q';q.setAttribute('aria-expanded','false');
      q.innerHTML='<span>'+item[0]+'</span><span class="pm" aria-hidden="true"></span>';
      var a=document.createElement('div');a.className='acc-a';
      var p=document.createElement('p');p.textContent=item[1];a.appendChild(p);
      q.addEventListener('click',function(){
        var open=acc.classList.contains('open');
        faqList.querySelectorAll('.acc').forEach(function(o){o.classList.remove('open');o.querySelector('.acc-a').style.maxHeight=null;o.querySelector('.acc-q').setAttribute('aria-expanded','false');});
        if(!open){acc.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';q.setAttribute('aria-expanded','true');}
      });
      acc.appendChild(q);acc.appendChild(a);faqList.appendChild(acc);
    });
  }
  if(faqList){ renderFaq('general');
  document.querySelectorAll('.faq .tabs button').forEach(function(b){
    b.addEventListener('click',function(){document.querySelectorAll('.faq .tabs button').forEach(function(x){x.classList.remove('active');});b.classList.add('active');renderFaq(b.getAttribute('data-faq'));});
  }); }

  /* form */
  var form=document.getElementById('ctaForm');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();var email=document.getElementById('email'),btn=document.getElementById('formBtnText');if(!email.value||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){email.focus();email.style.borderColor='#ff8a8a';return;}btn.textContent='You’re in — check your inbox ✦';form.querySelector('button').style.background='linear-gradient(135deg,#3aa76d,#2c8455)';setTimeout(function(){form.reset();},200);});}
})();