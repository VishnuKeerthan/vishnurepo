import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="invitation">
    <header class="topbar">
      <p>With love and blessings</p>
      <p class="monogram">V <span>&amp;</span> D</p>
    </header>

    <section class="hero" aria-labelledby="invitation-title">
      <div class="sun" aria-hidden="true"></div>
      <p class="eyebrow">A new chapter begins</p>
      <h1 id="invitation-title"><span>Vishnu</span><i>&amp;</i><span>Divyadharshni</span></h1>
      <p class="hero-copy">Together with our families, we invite you to celebrate the beginning of our forever.</p>
      <p class="hero-date">29 <small>August</small> 30 <small>2026</small></p>
    </section>

    <section class="events" aria-label="Wedding events">
      <article class="event reception">
        <p class="event-label">The evening before</p>
        <h2>Reception</h2>
        <p class="event-date">Saturday, 29 August 2026</p>
        <p class="event-time">After 6:00 PM</p>
      </article>
      <article class="event wedding">
        <p class="event-label">The wedding day</p>
        <h2>Marriage</h2>
        <p class="event-date">Sunday, 30 August 2026</p>
        <p class="event-time">With the blessings of our families</p>
      </article>
    </section>

    <section class="couple" aria-label="About the couple">
      <p class="eyebrow">The couple</p>
      <div class="names"><div><h2>Vishnu R.M</h2><p>Software Developer</p></div><span>&amp;</span><div><h2>Divyadharshni K</h2><p>BHMS Doctor</p></div></div>
    </section>

    <section class="venue" aria-labelledby="venue-title">
      <div><p class="eyebrow">Please join us</p><h2 id="venue-title">Town Panchayat<br />Marriage Hall</h2><p>Kallidaikurichi, Tirunelveli</p></div>
      <a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Town+Panchayat+Marriage+Hall%2C+Kallidaikurichi%2C+Tirunelveli" target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
    </section>

    <footer><p>We cannot wait to celebrate with you.</p><p>Vishnu &amp; Divyadharshni · 2026</p></footer>
  </main>
`
