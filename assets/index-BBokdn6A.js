(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/vishnurepo/couple-photo.jpg`;document.querySelector(`#app`).innerHTML=`
  <div class="petals" aria-hidden="true"></div>
  <main class="invitation">
    <header class="topbar">
      <p class="om-mark">V &<span></span> D</p>
      <p>Come celebrate with us</p>
      <p class="monogram">2026</p>
    </header>

    <section class="hero reveal" aria-labelledby="invitation-title">
      <div class="sun" aria-hidden="true"></div>
      <p class="eyebrow">A joyful celebration</p>
      <div class="photo-stage">
        <img src="${e}" alt="Vishnu and Divyadharshni walking together on a beach" />
        <div class="photo-wash" aria-hidden="true"></div>
        <button class="name-seal" id="celebrate" type="button" aria-label="Celebrate Vishnu and Divyadharshni">
          <span class="name-line">Vishnu</span><i>&amp;</i><span class="name-line">Divyadharshni</span>
        </button>
      </div>
      <div class="ornament" aria-hidden="true"><span></span></div>
      <p class="hero-copy">Together with our families, we seek your presence and blessings as we begin our happily ever after.</p>
      <p class="tamil-line">அவளும் நானும்</p>
    </section>

    <section class="countdown-line reveal" aria-label="Countdown to the wedding"><span class="eyebrow">Counting the moments until we celebrate</span><span class="countdown" id="countdown"><strong data-unit="days">00</strong><small>days</small><b>:</b><strong data-unit="hours">00</strong><small>hours</small><b>:</b><strong data-unit="minutes">00</strong><small>min</small><b>:</b><strong data-unit="seconds">00</strong><small>sec</small></span></section>

    <section class="events reveal" aria-label="Wedding events">
      <article class="event betrothal">
        <p class="event-label">Betrothal</p>
        <h2>29.08.2026</h2>
        <p class="event-date">Saturday</p>
        <p class="event-time">4:30 - 6:00 PM</p>
      </article>
      <article class="event reception">
        <p class="event-label">The evening before</p>
        <h2>Reception</h2>
        <p class="event-date">29.08.2026 · Saturday</p>
        <p class="event-time">6:00 PM onwards</p>
      </article>
      <article class="event wedding">
        <p class="event-label">The wedding day</p>
        <h2>Wedding</h2>
        <p class="event-date">30.08.2026 · Sunday</p>
        <p class="event-time">8:00 - 9:00 AM</p>
      </article>
    </section>

    <section class="venue reveal" aria-labelledby="venue-title">
      <div><p class="eyebrow">Please join us</p><h2 id="venue-title">Town Panchayat<br />Marriage Hall</h2><p>Kallidaikurichi, Tirunelveli</p></div>
      <a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Town+Panchayat+Marriage+Hall%2C+Kallidaikurichi%2C+Tirunelveli" target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
    </section>

    <footer><p>We cannot wait to celebrate with you.</p><p>Reception 29 August · Marriage 30 August 2026</p></footer>
  </main>
`;var t=document.querySelector(`.petals`);for(let e=0;e<14;e+=1){let e=document.createElement(`span`);e.style.setProperty(`--left`,`${Math.random()*100}%`),e.style.setProperty(`--delay`,`${Math.random()*8}s`),e.style.setProperty(`--duration`,`${9+Math.random()*7}s`),t.append(e)}var n=new Date(`2026-08-30T08:00:00+05:30`).getTime(),r=()=>{let e=Math.max(0,n-Date.now());Object.entries({days:864e5,hours:36e5,minutes:6e4,seconds:1e3}).forEach(([t,n])=>{let r=Math.floor(e/n);document.querySelector(`[data-unit="${t}"]`).textContent=String(r).padStart(2,`0`),e-=r*n})};r(),window.setInterval(r,1e3);var i=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&e.target.classList.add(`is-visible`)),{threshold:.14});document.querySelectorAll(`.reveal`).forEach(e=>i.observe(e));var a=document.querySelector(`#celebrate`);a.addEventListener(`click`,()=>{let e=[`#0f4c5c`,`#2d8c9d`,`#8fd3dc`,`#d8f0ed`,`#e4b96a`],t=document.createDocumentFragment();for(let n=0;n<42;n+=1){let r=document.createElement(`span`);r.className=`confetti`,r.style.setProperty(`--x`,`${(Math.random()-.5)*110}vw`),r.style.setProperty(`--y`,`${70+Math.random()*40}vh`),r.style.setProperty(`--r`,`${Math.random()*720-360}deg`),r.style.setProperty(`--delay`,`${Math.random()*180}ms`),r.style.backgroundColor=e[n%e.length],t.append(r)}document.body.append(t),a.classList.remove(`celebrating`),requestAnimationFrame(()=>a.classList.add(`celebrating`)),window.setTimeout(()=>document.querySelectorAll(`.confetti`).forEach(e=>e.remove()),2200);let n=new(window.AudioContext||window.webkitAudioContext);[523.25,659.25,783.99].forEach((e,t)=>{let r=n.createOscillator(),i=n.createGain();r.type=`sine`,r.frequency.value=e,i.gain.setValueAtTime(0,n.currentTime+t*.12),i.gain.linearRampToValueAtTime(.12,n.currentTime+t*.12+.03),i.gain.exponentialRampToValueAtTime(.001,n.currentTime+t*.12+.45),r.connect(i).connect(n.destination),r.start(n.currentTime+t*.12),r.stop(n.currentTime+t*.12+.5)})});