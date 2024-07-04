
// 다크모드
const profilePhoto = document.querySelector('.profile-photo');

profilePhoto.addEventListener('click', () => {
    /*if(document.body.className == 'dark-mode'){
        document.body.className=''
    } else {
        document.body.className = 'dark-mode'
    }*/

    document.body.classList.toggle("dark-mode"); //toggle: 있으면 없애고 없으면 있게하는...
});



// 클릭으로 section 넘기기
const sections = document.querySelectorAll('.right section');
let currentIndex = 0; //계속 바뀔 변수는 let으로 선언

const showAfterSection = () => {
    sections.forEach((section)=>{section.style.display='none'})
    if (currentIndex == (sections.length - 1)){
        currentIndex =0;
    } else {
        currentIndex++;
    }
    sections[currentIndex].style.display = 'flex';
}

const showBeforeSection = () => {
    sections.forEach((section)=>{section.style.display='none'})
    if (currentIndex == 0){
        currentIndex = sections.length - 1;
    } else {
        currentIndex--;
    }
    sections[currentIndex].style.display = 'flex';
}
let intervalId = setInterval(showAfterSection, 3000);

const resetInterval = () => {
    clearInterval(intervalId)
    intervalId =  setInterval(showAfterSection,3000)
};

sections.forEach((section, index)=> { //sections 인덱스에 각각 이벤트리스너 적용
    section.addEventListener('click', (event)=> {
        const sectionWidth = section.offsetWidth;

        const clickX = event.clientX - section.getBoundingClientRect().left; //section의 가장 왼쪽 좌표..?


        // 일시정지
        if(clickX < sectionWidth /3 ){
            if( index != 0){
                showBeforeSection()
                resetInterval()
            }
        } else if (clickX < sectionWidth * 2/3){
            showAfterSection()
            resetInterval()
        } else {
            if (intervalId){
                clearInterval(intervalId)
                intervalId = null;
            } else {
                intervalId = setInterval(showAfterSection, 3000);

            }
        }
    })
});



// 자동 스크롤
setInterval(()=> {
    sections[currentIndex].style.display = 'none';
    if(currentIndex == (sections.length -1)) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    sections[currentIndex].style.display = 'flex'
}, 3000);

fetch("https://m.search.naver.com/p/csearch/content/apirender.nhn?where=m&pkid=387&u2=20030922&q=%EC%83%9D%EB%85%84%EC%9B%94%EC%9D%BC+%EC%9A%B4%EC%84%B8&u1=f&u3=solar&u4=4&_=1720073422442")
    .then((response) => {console.log(response.text)})

