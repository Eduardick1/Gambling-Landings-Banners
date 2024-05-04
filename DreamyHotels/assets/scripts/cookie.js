const cookieAlert = document.getElementById("cookie");
if (cookieAlert && !localStorage.getItem("cookie")) {
  cookieAlert.classList.remove("hidden");
  cookieAlert.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "accept": {
        localStorage.setItem("cookie", "Accept test");
        cookieAlert.remove();
        break;
      }
    }
  });
}
