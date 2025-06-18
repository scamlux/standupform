// ✅ Полный script.js для отправки Daily отчётов в Google Sheets

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // 👉 ВСТАВЬ СЮДА СВОЙ Google Apps Script URL:
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwXgQdN3GU74rRS58gyV61BkcLSknqrp4nEPAAUu37SjvCq6FRt0cQDPMllWxwou_vs/exec";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value.trim(),
      today: form.today.value.trim(),
      tomorrow: form.tomorrow.value.trim(),
      blocker: form.blocker.value.trim() || "нет",
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("✅ Отчёт успешно отправлен в Google Sheets!");
        form.reset();
      } else {
        alert("⚠️ Ошибка при отправке. Попробуйте ещё раз.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("⚠️ Ошибка подключения. Проверьте интернет и URL.");
    }
  });
});
