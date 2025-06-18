// ✅ Полный script.js для отправки Daily отчётов в Google Sheets
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwXgQdN3GU74rRS58gyV61BkcLSknqrp4nEPAAUu37SjvCq6FRt0cQDPMllWxwou_vs/exec";

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
