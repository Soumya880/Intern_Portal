const API_URL = "http://localhost:5000/api/intern";

async function loadInternData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("name").textContent = data.name;
    document.getElementById("referralCode").textContent = data.referralCode;
    document.getElementById("donations").textContent = data.totalDonations;

  } catch (err) {
    console.error("Error loading intern data:", err);
  }
}

loadInternData();
