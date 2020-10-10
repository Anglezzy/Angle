console.log('进入c6-1.js');
var divInfo = document.getElementById('divInfo');

//本地存储和那个页面保存无关，是网站为单位的
divInfo.innerHTML =
  localStorage.getItem('info') + '<br>' + sessionStorage.getItem('sinfo');

