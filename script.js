document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Connecting to servers...",
    "Fetching username...",
    "Username found!",
    "Injecting fruits/pets...",
    "Finalizing injection...",
    "Verifying human activity...",
    "Human Verification Required."
  ];

  const container = document.getElementById("loadingMessages");
  let index = 0;

  function typeMessage(text, callback) {
    container.innerHTML = "";
    let i = 0;
    const typer = setInterval(() => {
      container.innerHTML += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(typer);
        setTimeout(callback, 800);
      }
    }, 35);
  }

  function showMessages() {
    if (index < messages.length) {
      const msg = messages[index];
      if (msg === "Username found!") {
        container.style.color = "green";
      } else if (msg === "Human Verification Required.") {
        container.style.color = "red";
      } else {
        container.style.color = "#000";
      }
      typeMessage(msg, () => {
        index++;
        showMessages();
      });
    }
  }

  showMessages();

  document.getElementById("verifyBtn").addEventListener("click", () => {
    document.getElementById("offerPopup").style.display = "block";
  });
});
