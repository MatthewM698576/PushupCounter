const DATA = {
  total: 12800,
  today: 200,
  streak: 29,
  goal: 200,
};

const quotes = [
  { text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.", author: "Romans 15:13" },
  { text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.", author: "Proverbs 3:5-6" },
  { text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.", author: "John 16:33" },
  { text: "For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.'", author: "Isaiah 41:13" },
  { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", author: "Isaiah 41:10" },
];

function init() {
  document.getElementById('stat-total').textContent = DATA.total.toLocaleString();
  document.getElementById('stat-today').textContent = DATA.today;
  document.getElementById('stat-streak').textContent = DATA.streak;

  const pct = Math.min((DATA.today / DATA.goal) * 100, 100);
  document.getElementById('progress-range-start').textContent = DATA.today;
  document.getElementById('progress-range-end').textContent = DATA.goal;

  setTimeout(() => {
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-pct').textContent = Math.round(pct) + '%';
  }, 200);

  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = `"${q.text}"`;
  document.getElementById('quote-author').textContent = `— ${q.author}`;

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  });
}

document.addEventListener('DOMContentLoaded', init);
