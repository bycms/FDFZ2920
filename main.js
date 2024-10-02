/*  
    Below is for
    the HIDDEN ZONE
    ONLY.
*/
const showButton = document.getElementById("hidConfirm");
const hidPasswordInput = document.getElementById("hidPassword");
const hidContent = document.getElementById("hidZone");
const hidButton = document.getElementById("hidCancel");
hidContent.style.display = "none";

showButton.onclick = function() {
    if (hidPasswordInput.value == "20292019") {
        hidContent.style.display = "block";
        hidPasswordInput.value = "";
    } 
    else {
        hidPasswordInput.value = "";
} 
}

hidButton.onclick = function() {
    hidContent.style.display = "none";
}