const noticeTitle = [
    "2022 경기꿈의학교 학생 모집 안내", 
    "부모교육 프로그램 안내(경기평생교육학습관)", 
    "e-북드림 전자책 무료 이용 서비스 안내", 
    "학부모 정책 모니터단 모집 알림", 
    "2022 학교 도서관 세계 책의 날 및 도서관 주간 행사 안내"
];
const noticeDate = [
    "2022.04.20",
    "2022.04.19",
    "2022.04.19",
    "2022.04.18",
    "2022.04.15"
];
const getTitle = [
    "12월 14일에 접수된 신청곡입니다.",
    "12월 11일에 접수된 신청곡입니다.",
    "12월 10일에 접수된 신청곡입니다.",
    "12월 9일에 접수된 신청곡입니다.",
    "11월 13일에 접수된 신청곡입니다."
];
const getDate = [
    "2020.12.14",
    "2020.12.11",
    "2020.12.10",
    "2020.12.09",
    "2020.11.13"
];
window.onload = function() {
    for (let i = 0; i < 5; i++) {
        document.getElementById("notice").innerHTML += `
            <li>
              <span class="title">${noticeTitle[i]}</span>
              <span class="date">${noticeDate[i]}</span>
            </li>
        `;
    }
    for (let i = 0; i < 5; i++) {
        document.getElementById("GetoDaze").innerHTML += `
            <li>
              <span class="title">${getTitle[i]}</span>
              <span class="date">${getDate[i]}</span>
            </li>
        `;
    }
}