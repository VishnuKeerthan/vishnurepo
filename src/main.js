import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="invitation">
    <header class="topbar">
      <p class="om-mark">ॐ</p>
      <p>With love and blessings</p>
      <p class="monogram">V <span>&amp;</span> D</p>
    </header>

    <section class="hero" aria-labelledby="invitation-title">
      <div class="sun" aria-hidden="true"><span>30</span><small>08 · 2026</small></div>
      <p class="eyebrow">A joyful celebration</p>
      <button class="name-seal" id="celebrate" type="button" aria-label="Celebrate Vishnu and Divyadharshni">
        <span class="name-line">Vishnu</span><i>&amp;</i><span class="name-line">Divyadharshni</span>
      </button>
      <p class="hero-copy">Together with our families, we seek your presence and blessings as we begin our happily ever after.</p>
      <p class="hero-date">29 <small>August · Saturday</small> 30 <small>August · Sunday</small></p>
    </section>

    <section class="events" aria-label="Wedding events">
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

    <section class="venue" aria-labelledby="venue-title">
      <div><p class="eyebrow">Please join us</p><h2 id="venue-title">Town Panchayat<br />Marriage Hall</h2><p>Kallidaikurichi, Tirunelveli</p></div>
      <a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Town+Panchayat+Marriage+Hall%2C+Kallidaikurichi%2C+Tirunelveli" target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
    </section>

    <footer><p>We cannot wait to celebrate with you.</p><p>Reception 29 August · Marriage 30 August 2026</p></footer>
  </main>
`

const celebrateButton = document.querySelector('#celebrate')

celebrateButton.addEventListener('click', () => {
  const colors = ['#c9775c', '#e9b949', '#a8b79d', '#8bb9c2', '#27352d']
  const confetti = document.createDocumentFragment()

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement('span')
    piece.className = 'confetti'
    piece.style.setProperty('--x', `${(Math.random() - 0.5) * 110}vw`)
    piece.style.setProperty('--y', `${70 + Math.random() * 40}vh`)
    piece.style.setProperty('--r', `${Math.random() * 720 - 360}deg`)
    piece.style.setProperty('--delay', `${Math.random() * 180}ms`)
    piece.style.backgroundColor = colors[index % colors.length]
    confetti.append(piece)
  }

  document.body.append(confetti)
  celebrateButton.classList.remove('celebrating')
  requestAnimationFrame(() => celebrateButton.classList.add('celebrating'))
  window.setTimeout(() => document.querySelectorAll('.confetti').forEach((piece) => piece.remove()), 2200)

  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const notes = [523.25, 659.25, 783.99]
  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()
    oscillator.type = 'sine'
    oscillator.frequency.value = frequency
    gain.gain.setValueAtTime(0, audioContext.currentTime + index * 0.12)
    gain.gain.linearRampToValueAtTime(0.12, audioContext.currentTime + index * 0.12 + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + index * 0.12 + 0.45)
    oscillator.connect(gain).connect(audioContext.destination)
    oscillator.start(audioContext.currentTime + index * 0.12)
    oscillator.stop(audioContext.currentTime + index * 0.12 + 0.5)
  })
})
