const GetCount = 5;
const bbsId = {
    공지사항:  4058,
    가정통신문: 4059,
    자유게시판: 4073,
    자료실: 4099
}
window.onload = async function() {
    const notice = post(getAnilUrl(bbsId.공지사항));
    const Droom = post(getAnilUrl(bbsId.자료실));
    console.log(notice)
    for (let i = 0; i < notice.length; i++) {
        document.getElementById("notice").innerHTML += `
            <li>
              <span class="title">${notice[i].nttSj}</span>
              <span class="date">${notice[i].regDt}</span>
            </li>
        `;
    }
    for (let i = 0; i < Droom.length; i++) {
        document.getElementById("GetoDaze").innerHTML += `
            <li>
              <span class="title">${Droom[i].nttSj}</span>
              <span class="date">${Droom[i].regDt}</span>
            </li>
        `;
    }
}
function getAnilUrl(bbsID) {
    return `https://anil-m.goept.kr/anil-m/wm/widg/selectWidgDataList.do?bbsId=${bbsID}&nttCount=${GetCount}&sqlId=selectNttListByBbsId`;
}

function post(url) {
    fetch(url, {method: "POST"}).then((res) => {
        console.log(res);
        return res.json();
    });
}