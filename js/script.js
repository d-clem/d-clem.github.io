
let buttonSwitch = document.getElementById("buttonSwitch");
let currentTheme = ""

buttonSwitch.addEventListener("change", changeBackgroundLight);



function changeBackgroundLight() {
    if (buttonSwitch.checked) {
        document.body.style.backgroundColor = "rgb(100,100,100)";
        document.body.style.color = "white";
        document.getElementById("navigation").style.backgroundColor = "white";

        document.getElementById("footer").style.backgroundColor = "#2b2d30";

        for (const button of document.getElementsByTagName("button")) {
            button.style.color = "white";
            button.style.backgroundColor = "";
        }

    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        document.getElementById("navigation").style.backgroundColor = "gray";

        document.getElementById("footer").style.backgroundColor = "gray";

        for (const button of document.getElementsByClassName("button-navigation")) {
            button.style.color = "black";
            button.style.backgroundColor = "white";
        }
    }
}

