const donBtn = document.getElementById("btn_don");
const popupDon = document.getElementById("don-popup");
const modalDon = document.getElementById("modalDon");

donBtn.addEventListener("click", function () {
    popupDon.classList.toggle("hidden");
    popupDon.classList.toggle("flex");
});

modalDon.addEventListener("click", function (event) {
    popupDon.classList.toggle("hidden");
    popupDon.classList.toggle("flex");
});