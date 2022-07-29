// Remove saved data from sessionStorage
// sessionStorage.removeItem('myData');

// Remove all saved data from sessionStorage
// sessionStorage.clear();

function InitializeData() {
    sessionStorage.setItem('myData', JSON.stringify(['Ruben', 'Baskaran']));
}

function OnClickHandler(buttonType) {
    let data = JSON.parse(sessionStorage.getItem('myData'))
    console.log(data);
    data.push('Sivasakthy');
    console.log(data);
    sessionStorage.setItem('myData', JSON.stringify(data));

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