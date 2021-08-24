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
let project = document.querySelector("#project");
let projectPage = document.querySelector("#projectPage");


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
    projectPage.innerHTML = "";

}
home.onclick = function(event) {
    event.preventDefault();

    // when home page is clicked display body
    infoPage.style.display = "none";
    bodyPage.style.display = "block";
    projectPage.innerHTML = "";
}
// click button to change to dark mode?
colorButton.onclick = function(event) {
    event.preventDefault();

    if (darkMode) {
        htmlBody.style.backgroundColor = "white";
        webHeader.style.backgroundColor = "white";
        aboutMeTitle.style.color = "black";
        colorMode.src = "images/moon.png";
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
        colorMode.src = "images/sun.png";
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
    for (let i = 1; i >= 0; i-= 0.05) {
        // add a cool fade in animation
        
        usernameText.style.display = "none"
    
    }
    Dusername = !Dusername;
    }
    else {
        usernameText.style.display = "block";
        for (let i = 0; i <= 1; i += 0.1) {
            usernameText.style.animation = "enlargeFadein 1.5s forwards";
            ;
            console.log(i);

        }
        Dusername = !Dusername;
        
    }
}
project.onclick = function(event) {
    event.preventDefault();

    
    bodyPage.style.display = "none";
    infoPage.style.display = "none";
    projectPage.style.display = "block";
    projectPage.style.display = "flex";
    
    // create new elements here - thinking on making nice tiles with information about my projects
    function createCards() {
        url = "https://api.github.com/users/justinASC21/repos"
        // fetch api response to json here
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson)

                for (let i = 0; i < myJson.length; i ++) {

                    if (myJson[i].fork == true) {
                        console.log("Fork true")
                    }
                    else {

                        // create our elements here
                        let cardDiv = document.createElement("div");
                        let cardImg = document.createElement("img");
                        let cardDescription = document.createElement("p");
                        let cardTitle = document.createElement("h3");
                
                        // style our elements / add items to it
                        cardImg.src = "images/Jlogo.png";
                        cardDiv.style.width = "10%";
                        cardDiv.style.border = "red solid 2px";
                        cardDiv.style.margin = "10px";
                        cardDiv.appendChild(cardImg);
                        // create div with a class
                        cardDiv.setAttribute("class","projectDivs");
                        let description;
                        if (myJson[i].description == null) {
                            description = "Whoops description was not able to load..."
                        }
                        else {
                            description = myJson[i].description
                        }
                        cardTitle.innerHTML = myJson[i].name;
                        // cardTitle.style.
                        cardDescription.innerHTML =  description + "<br><br> Languages Used: " + myJson[i].language;
                        cardDiv.appendChild(cardTitle);
                        cardDiv.appendChild(cardDescription);
                
                        projectPage.appendChild(cardDiv);
                        // cardDiv.style.tra/sform = "translateY(50px) translateX(250%)"
                        // animations details really helpful here: https://www.w3schools.com/css/css3_animations.asp
                        
                        // cardDiv.style.animation = "slidingProjects 3s forwards";
                    }

                }

            })


    }
        createCards();

}
// add in sliding effect for now use listing projects
