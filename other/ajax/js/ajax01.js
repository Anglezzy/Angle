let switchCtn = document.querySelector('#switch-cnt');
let switchC1 = document.querySelector('#switch-c1');
let switchC2 = document.querySelector('#switch-c2');
let switchCircle = document.querySelectorAll('.switch__circle');
let switchBtn = document.querySelectorAll('.switch-btn');
let aContainer = document.querySelector('#a-container');
let bContainer = document.querySelector('#b-container');
let allButtons = document.querySelectorAll('.submit');

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
  switchCtn.classList.add('is-gx');
  setTimeout(function () {
    switchCtn.classList.remove('is-gx');
  }, 1500);

  switchCtn.classList.toggle('is-txr');
  switchCircle[0].classList.toggle('is-txr');
  switchCircle[1].classList.toggle('is-txr');

  switchC1.classList.toggle('is-hidden');
  switchC2.classList.toggle('is-hidden');
  aContainer.classList.toggle('is-txl');
  bContainer.classList.toggle('is-txl');
  bContainer.classList.toggle('is-z200');
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener('click', getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener('click', changeForm);
};

window.addEventListener('load', mainF);
var txtuesrname = document.getElementById('txtuesrname');
var txtpwd = document.getElementById('txtpwd');
var div01 = document.getElementById('div01');
var btnsp = document.getElementById('btnsp');
var param = { tbUser: { password: '', username: '' } };
btnsp.addEventListener('click', function () {
  param.tbUser.username = txtuesrname.value;
  param.tbUser.password = txtpwd.value;
  ralap.ajax('post', '/user/login', param, function (resp) {
    div01.innerHTML = JSON.stringify(resp.message);
    if (resp.success) {
      div01.innerHTML = '登录成功';
      console.log(resp.resultData.tbUser);
      sessionStorage.setItem(
        'login-user',
        JSON.stringify(resp.resultData.tbUser)
      );
      location.href = 'index.html';
    }
  });
});
var txtuesrname01 = document.getElementById('txtuesrname01');
var txtpwd01 = document.getElementById('txtpwd01');
var txtnickname01 = document.getElementById('txtnickname01');
var btnsp01 = document.getElementById('btnsp01');
var div02 = document.getElementById('div02');
var param = {
  tbUser: { nickname: '', password: '', username: '' },
};
btnsp01.addEventListener('click', function () {
  param.tbUser.nickname = txtnickname01.value;
  param.tbUser.password = txtpwd01.value;
  param.tbUser.username = txtuesrname01.value;
  ralap.ajax('post', '/user/reg', param, function (resp) {
    div02.innerHTML = JSON.stringify(resp.message);
  });
});
var btn01 = document.getElementById('btn01');
btn01.addEventListener('click', function () {
  location.href = 'index.html';
});
