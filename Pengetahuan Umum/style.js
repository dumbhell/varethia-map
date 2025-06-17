document.addEventListener("DOMContentLoaded", () => {
  const classData = {
    warrior: `
      <h2>Warrior Class (Petarung Jarak Dekat)</h2>
      <p>Fokus: Kekuatan fisik, pertahanan, dan keahlian bertarung jarak dekat.</p>
      <h3>🔹 Basic Class</h3>
      <ul>
        <li>Fighter</li>
        <li>Knight</li>
        <li>Berserker</li>
        <li>Lancer</li>
      </ul>
      <h3>🔹 Advanced Class</h3>
      <ul>
        <li>Crusader</li>
        <li>Warlord</li>
        <li>Royal Guardian</li>
        <li>Warmaster</li>
      </ul>
      <h3>🔹 Master Class</h3>
      <ul>
        <li>Aegis Champion</li>
        <li>Blood Titan</li>
        <li>Storm Dragoon</li>
        <li>Blade Monarch</li>
      </ul>
      <h3>🔹 Legendary Class</h3>
      <ul>
        <li>Eclipse Vanguard</li>
        <li>Godslayer</li>
      </ul>
    `,
    rogue: `
      <h2>Rogue Class (Stealth & Kecepatan)</h2>
      <p>Fokus: Mobilitas tinggi, stealth, serangan presisi.</p>
      <h3>🔹 Basic Class</h3>
      <ul>
        <li>Thief</li>
        <li>Assassin</li>
        <li>Ranger</li>
        <li>Shinobi</li>
      </ul>
      <h3>🔹 Advanced Class</h3>
      <ul>
        <li>Ghostwalker</li>
        <li>Dread Reaper</li>
        <li>Storm Sniper</li>
        <li>Silent Tempest</li>
      </ul>
      <h3>🔹 Master Class</h3>
      <ul>
        <li>Void Stalker</li>
        <li>Eagle Eye Marksman</li>
      </ul>
      <h3>🔹 Legendary Class</h3>
      <ul>
        <li>Shadow Emperor</li>
        <li>Moon Phantom</li>
      </ul>
    `,
    mage: `
      <h2>Mage Class (Sihir & Ritual)</h2>
      <p>Fokus: Manipulasi elemen, sihir gelap, dan ritual.</p>
      <h3>🔹 Basic Class</h3>
      <ul>
        <li>Mage</li>
        <li>Elementalist</li>
        <li>Necromancer</li>
        <li>Onmyoji</li>
      </ul>
      <h3>🔹 Advanced Class</h3>
      <ul>
        <li>Arcane Scholar</li>
        <li>Void Sorcerer</li>
        <li>Celestial Sage</li>
        <li>Flame Monarch</li>
      </ul>
      <h3>🔹 Master Class</h3>
      <ul>
        <li>Time Weaver</li>
        <li>Lich King</li>
        <li>Starcaller</li>
      </ul>
      <h3>🔹 Legendary Class</h3>
      <ul>
        <li>Eternal Archmage</li>
        <li>Void Sovereign</li>
      </ul>
    `,
    priest: `
      <h2>Priest & Support Class (Buff & Healing)</h2>
      <p>Fokus: Penyembuhan, pertahanan, dan mendukung sekutu.</p>
      <h3>🔹 Basic Class</h3>
      <ul>
        <li>Cleric</li>
        <li>Alchemist</li>
        <li>Druid</li>
        <li>Seer</li>
      </ul>
      <h3>🔹 Advanced Class</h3>
      <ul>
        <li>Divine Guardian</li>
        <li>Toxic Sage</li>
        <li>Nature’s Prophet</li>
        <li>Celestial Oracle</li>
      </ul>
      <h3>🔹 Master Class</h3>
      <ul>
        <li>Seraphim Priest</li>
        <li>Venom Wraith</li>
      </ul>
      <h3>🔹 Legendary Class</h3>
      <ul>
        <li>Ascended Archangel</li>
        <li>Harbinger of Plague</li>
      </ul>
    `
  };

  window.showClass = function (classKey) {
    const content = document.getElementById("classContent");
    content.classList.remove("hidden");
    content.innerHTML = classData[classKey] || "<p>Class belum tersedia.</p>";
  };
});
