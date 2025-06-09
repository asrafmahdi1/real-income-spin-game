let balance = parseInt(localStorage.getItem("balance")) || 0;
const walletDisplay = document.getElementById("wallet");
const withdrawButton = document.getElementById("withdrawButton");

function updateUI() {
    walletDisplay.innerText = balance;
    if (balance >= 100) {
        withdrawButton.style.display = "inline-block";
    } else {
        withdrawButton.style.display = "none";
    }
}

document.getElementById("spinButton").onclick = function () {
    const earned = Math.floor(Math.random() * 91) + 10; // 10-100 টাকা
    balance += earned;
    localStorage.setItem("balance", balance);
    alert(`অভিনন্দন! আপনি ${earned} টাকা পেয়েছেন!`);
    updateUI();
}

withdrawButton.onclick = function () {
    alert(`আপনার ব্যালেন্স উত্তোলন করতে হলে আগে ১৫০ টাকা নিচের নম্বরে পাঠান:\n\n✅ বিকাশ: 01749726013\n✅ নগদ: 01701435225\n\nতারপর আমাদের ইনবক্সে ট্রানজেকশন আইডি পাঠান।`);
}

updateUI();

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