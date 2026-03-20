// Login with loading effect
function login() {
  const btn = document.querySelector("button");
  btn.innerText = "Logging in...";
  
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}

// Premium Calculation
function calculatePremium() {
  let base = 50;
  let risk = Math.floor(Math.random() * 50);
  return base + risk;
}

// Run only on dashboard
window.onload = function () {
  let premiumElement = document.getElementById("premium");
  if (premiumElement) {
    let premium = calculatePremium();
    premiumElement.innerText = "₹" + premium;
  }
};

// Rain trigger
function triggerRain() {
  let payout = Math.floor(Math.random() * 300) + 300;
  let result = document.getElementById("result");

  result.innerText = "🌧️ Processing...";
  
  setTimeout(() => {
    result.innerText = "₹" + payout + " credited due to heavy rain!";
  }, 800);
}

// Pollution trigger
function triggerPollution() {
  let payout = Math.floor(Math.random() * 200) + 200;
  let result = document.getElementById("result");

  result.innerText = "🌫️ Checking AQI...";
  
  setTimeout(() => {
    result.innerText = "₹" + payout + " credited due to high pollution!";
  }, 800);
}