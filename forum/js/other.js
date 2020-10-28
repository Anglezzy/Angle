console.log('进入other.js');
// 查询效果
// 查询按钮
var btnQuery = document.getElementById('btnQuery');
// 显示加载效果的div
var divLoading = document.getElementById('divLoading');
// 显示数据的div
var divEmployee = document.getElementById('divEmployee');
console.log('查询相关页面元素', btnQuery, divLoading, divEmployee);

// 查询按钮点击事件
btnQuery.addEventListener('click', function () {
    // 切换按钮为不可用的样式
    btnQuery.classList.add('disabled');
    // 显示加载中的div
    divLoading.style.display = 'block';
    divEmployee.style.display = 'none';

    // 开始ajax调用后端服务
    huhuiyu.ajax('post', '/employee/queryAll', {}, function (data) {
        // 后端应答回来后恢复状态
        btnQuery.classList.remove('disabled');
        divLoading.style.display = 'none';
        console.log(data);
        // 显示数据
        divEmployee.innerHTML = JSON.stringify(data);
        divEmployee.style.display = 'block';
    });
    // none:不显示，block：是块级元素显示，inline：是非块级元素显示
    // inline-block：可以使用盒模型样式的是非块级元素显示
});

// 动态信息显示效果
var btnMessage = document.getElementById('btnMessage');
var divMessage = document.getElementById('divMessage');
console.log('动态信息效果', btnMessage, divMessage);

btnMessage.addEventListener('click', function () {
    huhuiyu.ajax('post', '/user/login', {}, function (data) {
        // 内容修改成服务器应答消息
        divMessage.innerHTML = '<div>' + data.message + '</div>';
        // 处理动画
        divMessage.classList.add('message');
        setTimeout(function () {
            divMessage.classList.remove('message');
        }, 5000);
    });
});

// 表单校验效果=================================
var btnValidate = document.getElementById('btnValidate');
var divPwd = document.getElementById('divPwd');
var divName = document.getElementById('divName');
var txtPwd = document.getElementById('txtPwd');
var txtName = document.getElementById('txtName');
console.log('表单校验', btnValidate, txtName, txtPwd, divName, divPwd);

btnValidate.addEventListener('click', function () {
    // 重置错误状态
    divName.classList.remove('error');
    divPwd.classList.remove('error');
    document.querySelector('#divName > i').style.visibility = 'hidden';
    document.querySelector('#divPwd > i').style.visibility = 'hidden';
    var divNameError = document.getElementById('divNameError');
    divNameError.style.visibility = 'hidden';
    var divPwdError = document.getElementById('divPwdError');
    divPwdError.style.visibility = 'hidden';
    var name = txtName.value;
    // 必须填写姓名
    if (!name) {
        // document.querySelector('css选择器') 获取css选择器对应的元素
        document.querySelector('#divName > i').style.visibility = 'visible';
        divName.classList.add('error');
        divNameError.style.visibility = 'visible';
        txtName.focus();
        return;
    }
    // 密码校验
    if (!txtPwd.value) {
        document.querySelector('#divPwd > i').style.visibility = 'visible';
        divPwd.classList.add('error');
        divPwdError.style.visibility = 'visible';
        txtPwd.focus();
        return;
    }
});
// 作业，完成登陆的校验效果，完成登陆返回的错误信息提示动画效果