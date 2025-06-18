// ✅ Полный script.js для отправки Daily отчётов в Google Sheets
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEgnYpQRSn63b1eECExEi3ULU8WWzvSWiTVEjjmJigfc1LE4F2WfsEoGPkwqXcJWFt/exec";

const dailyform = document.getElementById("dailyForm");
dailyform.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      alert("✅ Отчет успешно отправлен!");
      form.reset();
    })
    .catch((err) => {
      console.error("Ошибка!", err);
      alert("❌ Ошибка при отправке");
    });
});
