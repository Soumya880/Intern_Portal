const API_URL = "http://localhost:5000/api/leaderboard";

async function loadLeaderboard() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const list = document.getElementById("leaderboardList");
    list.innerHTML = "";

    data.forEach(({name, totalDonations}) => {
      const li = document.createElement("li");
      li.textContent = `${name} — ₹${totalDonations}`;
      list.appendChild(li);
    });

  } catch (err) {
    console.error("Error loading leaderboard:", err);
  }
}

loadLeaderboard();
