var successBtn = document.querySelector("#success");
var warningBtn = document.querySelector("#warning");
var errorBtn = document.querySelector("#error");
var layer = document.querySelector("#layer");

successBtn.addEventListener("click", function () {
    var cover = document.createElement("div");
    var successNot = document.createElement("div");
    var icon = document.createElement("i");
    var h3 = document.createElement("h3");
    var loading = document.createElement("div");

    successNot.classList.add("not", "trans");

    loading.classList.add("loading");
    icon.innerHTML = "✅";
    h3.innerHTML = "Submitted Successfully";

    cover.appendChild(successNot);
    successNot.appendChild(icon);
    successNot.appendChild(h3);
    successNot.appendChild(loading);
    
    layer.innerHTML = cover.innerHTML;
});

