/*************** 글로벌 설정 *****************/
var auth = firebase.auth();	//firebase의 auth(인증)모듈을 불러온다.
var googleAuth = new firebase.auth.GoogleAuthProvider();	// 구글로그인 모듈을 불러온다.
var user = null;


/*************** 사용자 함수 *****************/



/*************** 이벤트 등록 *****************/
$('.bt-login-google').click(onLoginGoogle);
$('.bt-logout').click(onLogOut);
auth.onAuthStateChanged(onchangeAuth); //상태 변할때 마다 실행

/*************** 이벤트 콜백 *****************/
function onchangeAuth(r){
	user = r;
	console.log(user);

}

function onLogOut(){
	auth.signOut();
}

function onLoginGoogle() {
	auth.signInWithPopup(googleAuth);
}

