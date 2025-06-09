const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");
const resultDiv = document.getElementById("result");
const walletDisplay = document.getElementById("wallet");
const withdrawButton = document.getElementById("withdrawButton");

const segments = [
  { text: "৫ টাকা", value: 5, color: "#27ae60" },
  { text: "১০ টাকা", value: 10, color: "#2980b9" },
  { text: "১৫ টাকা", value: 15, color: "#8e44ad" },
  { text: "২০ টাকা", value: 20, color: "#f39c12" },
  { text: "৫০ টাকা", value: 50, color: "#c0392b" },
  { text: "এরোরো", value: 0, color: "#7f8c8d" },
  { text: "১০ টাকা", value: 10, color: "#2980b9" },
  { text: "১৫ টাকা", value: 15, color: "#8e44ad" }
];

let balance = parseInt(localStorage.getItem("balance")) || 0;
walletDisplay.innerText = balance;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 180;
const segmentAngle = (2 * Math.PI) / segments.length;

let startAngle = 0;
let isSpinning = false;
let spinTimeout;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

function drawSegment(index) {
  const angle = startAngle + index * segmentAngle;
  ctx.beginPath();
  ctx.fillStyle = segments[index].color;
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, angle, angle + segmentAngle, false);
  ctx.lineTo(centerX, centerY);
  ctx.fill();

  // Text
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(angle + segmentAngle / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = "white";
  ctx.font = "bold 18px Arial";
  ctx.fillText(segments[index].text, radius - 10, 10);
  ctx.restore();
}

function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < segments.length; i++) {
    drawSegment(i);
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10; // initial spin speed
  spinTime = 0;
  spinTimeTotal = Math.random() * 3000 + 4000; // spin duration between 4-7 sec
  isSpinning = true;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  const spinAngle =
    spinAngleStart * Math.exp(-spinTime / spinTimeTotal);
  startAngle += (spinAngle * Math.PI) / 180;
  drawWheel();
  spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  isSpinning = false;
  const degrees = (startAngle * 180) / Math.PI + 90;
  const arcd = (segmentAngle * 180) / Math.PI;
  const index = Math.floor((360 - (degrees % 360)) / arcd) % segments.length;
  const selected = segments[index];
  if (selected.value === 0) {
    resultDiv.innerText = "দুঃখিত! এরোতে থেমেছেন, কোন টাকা পেলেন না।";
  } else {
    balance += selected.value;
    localStorage.setItem("balance", balance);
    walletDisplay.innerText = balance;
    resultDiv.innerText = `অভিনন্দন! আপনি ${selected.text} পেয়েছেন!`;
    if (balance >= 100) {
      withdrawButton.style.display = "inline-block";
    }
  }
}

spinButton.addEventListener("click", () => {
  if (isSpinning) return;
  resultDiv.innerText = "";
  spin();
});

withdrawButton.onclick = function () {
  alert(`আপনার ব্যালেন্স উত্তোলন করতে হলে আগে ১৫০ টাকা নিচের নম্বরে পাঠান:\n\n✅ বিকাশ: 01749726013\n✅ নগদ: 01701435225\n\nতারপর আমাদের ইনবক্সে ট্রানজেকশন আইডি পাঠান।`);
};

if (balance >= 100) {
  withdrawButton.style.display = "inline-block";
} else {
  withdrawButton.style.display = "none";
}

// Fake reviews
const fakeReviews = [
  "💬 রাকিব বলেছে: আমি প্রথম দিনেই ৫৫০ টাকা পেয়েছি! বিশ্বাসই হচ্ছিল না!",
  "💬 সুমি বলেছে: বিকাশে টাকা পেয়েছি, ধন্যবাদ রিয়েল ইনকাম!",
  "💬 মোশারফ: ১৫০ টাকা পাঠানোর পরই পেমেন্ট পেয়েছি!",
  "💬 রাহুল: প্রতিদিন স্পিন করে ৩০০+ টাকা ইনকাম করছি!",
  "💬 নিশা: বন্ধুদের রেফার করেও টাকা পাচ্ছি!",
  "💬 বাবু: সত্যিই এটা কাজের সাইট!",
  "💬 মুনমুন: রাতের বেলা স্পিন করলেই বেশি টাকা পাই!",
  "💬 রাহেলা: পেমেন্ট পাওয়ার পরই আরও বন্ধুদের জানালাম!",
  "💬 আরাফাত: আমি বিকাশে টাকা পেয়েছি, কেউ বিশ্বাস না করলে ট্রানজেকশন দেখাবো!",
  "💬 ইমরান: এমন সহজ ইনকামের সাইট আগে পাইনি!",
  "💬 হীরা: শুরুতে সন্দেহ ছিল, এখন নিয়মিত খেলি!",
  "💬 সালমান: পেমেন্ট পাওয়ার পরই আমার খুশিতে ঘুম আসেনি!",
  "💬 ফারিয়া: আমি এখন দিনে ২-৩ বার খেলি, অনেক লাভ!",
  "💬 আশিক: একদিনে ৮০০ টাকা পেয়েছি!",
  "💬 রুবেল: যারা ইনকাম করতে চায়, এটা ব্যবহার করুক!",
  "💬 কনা: আমি বিকাশে টাকা তোলার পর সত্যিই চমকে গেছি!",
  "💬 সাব্বির: প্রতিদিন ১৫০-৩০০ টাকা ইনকাম করছি!",
  "💬 মাহি: আমার বোনও এখন খেলছে!",
  "💬 সজল: আমি এখন এটাকেই পার্টটাইম ইনকাম বলি!",
  "💬 রাফি: সত্যিই এটা রিয়েল ইনকাম!"
];

const reviewsContainer = document.getElementById("reviews");
fakeReviews.forEach(text => {
  const div = document.createElement("div");
  div.className = "review-box";
  div.innerText = text;
  reviewsContainer.appendChild(div);
});

drawWheel();
