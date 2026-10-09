const search = document.querySelector('#course-search');
if (search) {
  const cards = [...document.querySelectorAll('.course-card')];
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    cards.forEach(card => { card.hidden = !card.dataset.search.toLowerCase().includes(query); if (!card.hidden) count++; });
    document.querySelector('#results-count').textContent = `${count} ${count === 1 ? 'course' : 'courses'}`;
    document.querySelector('#no-results').hidden = count !== 0;
  });
}
