// backend/server.js

const http = require("http");

const PORT = 5000;

// Dummy intern data
const internData = {
  name: "Soumya Singh",
  referralCode: "Soumya_Singh2025",
  totalDonations: 10000,
  rewards: ["Certificate", "T-shirt", "E-Voucher"]
};

// Dummy leaderboard data
const leaderboard = [
  { name: "Soumya Singh", totalDonations: 10000 },
  { name: "Alex Kumar", totalDonations: 9000 },
  { name: "Nina Gupta", totalDonations: 8000 }
];

const server = http.createServer((req, res) => {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/intern" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(internData));
  } else if (req.url === "/api/leaderboard" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(leaderboard));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
