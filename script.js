async function search() {
  const q = document.getElementById("query").value.trim();
  if (!q) return;

  const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
  const data = await res.json();
  renderCard(data);
}

document.getElementById("btn-search").addEventListener("click", search);
document.getElementById("query").addEventListener("keydown", (e) => {
  if (e.key === "Enter") search();
});

function renderCard(records) {
  const container = document.getElementById("idcard-container");
  if (!records.length) {
    container.innerHTML = "";
    container.classList.add("hidden");
    alert("No records found");
    return;
  }

  container.classList.remove("hidden");
  const card = records[0];
  container.innerHTML = `
  <svg width="100%" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="rounded shadow">
    <rect x="0" y="0" width="500" height="200" rx="12" fill="#fff" stroke="#1e40af" stroke-width="2"/>
    <text x="20" y="40" font-size="20" fill="#1e3a8a">PaʼO National ID Card</text>

    <text x="20" y="80" font-size="16" fill="#000">ID: ${card.id}</text>
    <text x="20" y="105" font-size="16" fill="#000">Name: ${card.name}</text>
    <text x="20" y="130" font-size="16" fill="#000">DOB: ${card.dob}</text>
    <text x="20" y="155" font-size="16" fill="#000">District: ${card.district}</text>
    <text x="20" y="180" font-size="16" fill="#000">Status: ${card.status}</text>
  </svg>`;
}
