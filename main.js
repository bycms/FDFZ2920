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

showButton.onClick =()=> function {
    if (hidPasswordInput.value == "MYcid994.") {
        hidContent.style.display = "block";
    } 
}

hidButton.onClick =()=> function {
    hidContent.style.display = "block";
}