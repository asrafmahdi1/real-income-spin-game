let balance = 0;
let spinCount = 0;

function spin() {
  spinCount++;
  let reward;

  if (balance >= 300) {
    const lowRewards = [0, 0, 1, 2, "😢", "😂"];
    reward = lowRewards[Math.floor(Math.random() * lowRewards.length)];
  } else {
    reward = Math.floor(Math.random() * 10) * 5 + 5;
    if (reward > 50) reward = 50;
  }

  if (typeof reward === "number") {
    balance += reward;
    document.getElementById("spin-result").innerText = `🎉 You got ৳${reward}`;
  } else {
    document.getElementById("spin-result").innerText = `😢 Oops! ${reward}`;
  }

  document.getElementById("balance-amount").innerText = balance;
}

function showWithdrawModal() {
  if (balance < 150) {
    alert("❌ আপনি উত্তোলন করতে চাইলে অন্তত ৳150 ব্যালেন্স থাকতে হবে!");
    return;
  }
  document.getElementById("withdrawModal").style.display = "block";
}

function closeWithdrawModal() {
  document.getElementById("withdrawModal").style.display = "none";
}
