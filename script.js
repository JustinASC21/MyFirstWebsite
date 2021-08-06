// references 
let htmlBody = document.querySelector("body");
let webHeader = document.querySelector("#header");
let info = document.querySelector("#Info");
let home = document.querySelector("#home")
let bodyPage = document.querySelector("#bodyPage");
let infoPage = document.querySelector("#infoPage")
let colorButton = document.querySelector("#colorMode");
let aboutMeTitle = document.querySelector("#Title");
let aboutMeText = document.querySelector("#aboutMeText");
let myInfo = document.querySelectorAll(".myInfo");
let discordButton = document.querySelector("#DiscordButton");
let usernameText = document.querySelector("#Dusername");
let hobbies = document.querySelector("#hobby");

// dark mode present or not
let darkMode = false;
// username present or not
let Dusername = false;

//event handler
info.onclick = function(event) {
    // prevent refresh
    event.preventDefault();

    // when the info button has been clicked display information on the same page
    bodyPage.style.display = "none";
    infoPage.style.display = "block";

}
home.onclick = function(event) {
    event.preventDefault();

    // when home page is clicked display body
    infoPage.style.display = "none";
    bodyPage.style.display = "block";
}
// click button to change to dark mode?
colorButton.onclick = function(event) {
    event.preventDefault();

    if (darkMode) {
        htmlBody.style.backgroundColor = "white";
        webHeader.style.backgroundColor = "white";
        aboutMeTitle.style.color = "black";
        colorButton.innerHTML = "Dark Mode";
        darkMode = !darkMode;
        for (let i = 0; i < 4; i ++){
            myInfo[i].style.backgroundColor = "white";
        }
    }
    else {
        htmlBody.style.backgroundColor = "black";
        webHeader.style.backgroundColor = "black";
        aboutMeTitle.style.color = "white";
        for (let i = 0; i < 3; i ++){
            myInfo[i].style.backgroundColor = "black";
        }
        colorButton.innerHTML = "Light Mode";
        darkMode = !darkMode;

    }
    bodyPage.style.color = "white";

}
aboutMeText.onmouseover = function(event) {
    event.preventDefault();

    for (let i = 0; i < 4; i++ )  {
        myInfo[i].onmouseover = function(event) {
            event.preventDefault();

            myInfo[i].style.borderTop = "cyan solid 4px";
            myInfo[i].style.backgroundColor = "#c6e1f5";
            // myInfo[i].style.opacity = 0.5;
                }    
        myInfo[i].onmouseout = function(event) {
            event.preventDefault();

            myInfo[i].style.border = "none";
            if (darkMode) {

                myInfo[i].style.backgroundColor = "black";
            }
            else {
                myInfo[i].style.backgroundColor = "white";
            }
        }
    }
}
// on discord click
discordButton.onclick = function(event) {
    event.preventDefault();
    
    if (Dusername) {
    // when discord button clicked display username
    usernameText.style.display = "none"
    for (let i = 1; i >= 0; i-= 0.05) {
        usernameText.style.opacity = i;
    }
    Dusername = !Dusername;
    }
    else {
        usernameText.style.display = "block";
        for (let i = 0; i <= 1; i += 0.1) {
            usernameText.style.opacity = i;
            console.log(i);

        }
        Dusername = !Dusername;
        
    }
}
