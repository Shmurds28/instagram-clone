var modal = document.getElementsById("allComments");
var btn = document.getElementById("viewComments");
var close = document.getElementsByClassName("close")[0];

console.log(btn);


// User clicks view all comments
btn.onClick = () =>{
    modal.style.display = "block";
}
//Close modal
close.onClick = () =>{
    modal.style.display = "none";
}
//Close the model by clicking outside the badgeContent
window.onClick = (event) =>{
    modal.style.display = "none";
}
