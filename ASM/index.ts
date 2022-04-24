const settings = require("./../settings.json");

window.onload = async function(){
    const TitleSpan: any = document.getElementById("title");
    TitleSpan.innerText = settings.ServerName;
};