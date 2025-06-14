function loadContent(section) {
  const content = document.getElementById("main-content");
if (section === 'HOME') {
    content.innerHTML = `
      <h2>SELAMAT DATANG DI VARETHIA</h2>
    `;
  }
 else if (section === 'karakter') {
    content.innerHTML = `
      <h2>Daftar Karakter</h2>
      <ul>
        <li>Ardhan, Sang Penjaga Api</li>
        <li>Luna, Penyihir Bulan</li>
        <li>Kael, Ksatria Timur</li>
      </ul>
    `;
  }

  else if (section === 'wilayah') {
    content.innerHTML = `
      <h2>Wilayah di Dunia Varethia</h2>
      <ul>
        <li>🔺 Gunung Arkael</li>
        <li>🌊 Lautan Zephira</li>
        <li>🌳 Hutan Myralen</li>
      </ul>
    `;
  }

  else if (section === 'cerita') {
    content.innerHTML = `
      <h2>Cerita Dunia Varethia</h2>
      <p>Di masa kuno, dunia Varethia terpecah oleh lima elemen...</p>
    `;
  }
}
