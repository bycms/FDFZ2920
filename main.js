/*  
    Below is for
    the HIDDEN ZONE
    ONLY.
*/
const showButton = document.getElementById("hid Confirm");
const hidPasswordInput = document.getElementById("hidPassword");
const hidContent = document.getElementById("hidZone");
const hidButton = document.getElementById("hidCancel");
hidContent.style.display = "none";

showButton.addEventListener("click", function =()=> {
    if (hidPasswordInput.value == "MYcid994.") {
        hidContent.style.display = "block";
    } 
})

hidButton.addEventListener("click", function =()=> {
    hidContent.style.display = "block";
})
