import './style.css'

const couplePhotoUrl = `${import.meta.env.BASE_URL}couple-photo.jpg`

document.querySelector('#app').innerHTML = `
  <div class="petals" aria-hidden="true"></div>
  <main class="invitation">
    <header class="topbar">
      <p class="om-mark">V <span>&amp;</span> D</p>
      <p>Come celebrate with us</p>
      <p class="monogram">2026</p>
    </header>

    <section class="hero reveal" aria-labelledby="invitation-title">
      <div class="sun" aria-hidden="true"></div>
      <p class="eyebrow">A joyful celebration</p>
      <div class="photo-stage">
        <img src="${couplePhotoUrl}" alt="Vishnu and Divyadharshni walking together on a beach" />
        <div class="photo-wash" aria-hidden="true"></div>
        <button class="name-seal" id="celebrate" type="button" aria-label="Celebrate Vishnu and Divyadharshni">
          <span class="name-line">Vishnu</span><i>&amp;</i><span class="name-line">Divyadharshni</span>
        </button>
      </div>
      <div class="ornament" aria-hidden="true"><span></span></div>
      <p class="hero-copy">Together with our families, we seek your presence and blessings as we begin our happily ever after.</p>
      <p class="tamil-line">அவளும் நானும்</p>
    </section>

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
`

const petals = document.querySelector('.petals')
for (let index = 0; index < 14; index += 1) {
  const petal = document.createElement('span')
  petal.style.setProperty('--left', `${Math.random() * 100}%`)
  petal.style.setProperty('--delay', `${Math.random() * 8}s`)
  petal.style.setProperty('--duration', `${9 + Math.random() * 7}s`)
  petals.append(petal)
}

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .14 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

const celebrateButton = document.querySelector('#celebrate')

celebrateButton.addEventListener('click', () => {
  const colors = ['#0f4c5c', '#2d8c9d', '#8fd3dc', '#d8f0ed', '#e4b96a']
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
