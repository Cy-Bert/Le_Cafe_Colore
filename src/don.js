const donBtn = document.getElementById("btn_don");
const popupDon = document.getElementById("don-popup");
const closePopupDon = document.querySelector("#closeFormDon");
const closeCrossD = document.querySelector("#closeCrossDon")

donBtn.addEventListener("click", function () {
    popupDon.classList.toggle("hidden");
    popupDon.classList.toggle("flex");
});

closePopupDon.addEventListener("click", function () {
    popupDon.classList.add("hidden") ; 
  });
  
  closeCrossDon.addEventListener("click", function() {
      popupDon.classList.add("hidden");
  });
  