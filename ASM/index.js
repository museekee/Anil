const settings = require("./../settings.json");

window.onload = async function(){
    const TitleSpan = document.getElementById("title");
    TitleSpan.innerText = settings.ServerName;
};