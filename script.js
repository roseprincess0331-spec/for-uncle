document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("giftForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedGift = document.querySelector('input[name="gift"]:checked');
    if (!selectedGift) {
      alert("선물을 하나 골라줘 😊");
      return;
    }

    emailjs.send(
      "service_urpr6ox",
      "template_ydijfcx",
      { gift: selectedGift.value }
    )
    .finally(() => {
      // 💡 0ms 지연이라 사용자는 전혀 못 느낌
      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 0);
    });
  });
});
