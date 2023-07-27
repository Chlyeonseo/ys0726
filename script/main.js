/**/
//  document는 body 태그 안에 작성된 모든 내용들을 지칭함 
// 문서를 지칭하는데 body안에 쓴 내용을 의미.
// quertSelector는 ()안의 내용을 문서 안에서 찾아줍니다.
// = 는 같다는 뜻이 아니라 왼쪽에 오른쪽의 내용을 대입하겠다는 의미입니다.

let btnCall = document.querySelector(".btnCall");
let menuMo = document.querySelector(".menuMo");
// 이벤트 지정?

// btnCall을 클릭하면 btnCall과 menuMo의 요소에 toggle 이라는 메소드를 사용해서  
// on클래스를 없으면 붙여주고 있으면 떼어버리는 이벤트를 부여합니다.
btnCall.addEventListener("click",(e)=>{
    // 원래 이벤트 지우기
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
});