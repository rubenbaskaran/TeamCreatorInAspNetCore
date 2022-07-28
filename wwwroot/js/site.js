// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function OnClickHandler(buttonType) {    
    switch (buttonType) {
        case "change color":
            if (document.getElementById("fullnameLabelDiv").style.backgroundColor == "orange") {
                document.getElementById("fullnameLabelDiv").style.backgroundColor = "lightblue"
            } else {
                document.getElementById("fullnameLabelDiv").style.backgroundColor = "orange"
            }
            break;
        case "change name":            
            if (document.getElementById("fullnameLabel").innerText == "Ruben Baskaran") {                
                document.getElementById("fullnameLabel").innerText = "Baskaran Rajakrishnan"
            } else {                
                document.getElementById("fullnameLabel").innerText = "Ruben Baskaran"
            };
            break;
    }
}