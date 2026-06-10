
const button = document.getElementById("wa_button");
const popup = document.getElementById("wa_popup");

button.addEventListener("click", function(){

if(popup.style.display === "block"){
popup.style.display = "none";
}
else{
popup.style.display = "block";
}

});