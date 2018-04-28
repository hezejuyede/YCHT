//登录，注册，找回密码tebs切换
$(document).ready(function () {
    $("#saomaologin").on("click",function () {
        $('.lrmanin-login-content-center-saoyisao').show();
        $('.lrmanin-login-content-center-login').hide();
        $(this).addClass("spancolor");
        $("#usernamelogin").removeClass("spancolor");
    });


    $("#usernamelogin").on("click",function () {
        $('.lrmanin-login-content-center-saoyisao').hide();
        $('.lrmanin-login-content-center-login').show();
        $(this).addClass("spancolor");
        $("#saomaologin").removeClass("spancolor");
    });

    $('#forgetpassword').on("click",function () {
        $('.lrmanin-lookfor').show();
        $('.lrmanin-login,.lrmanin-register').hide();

    });

    $('#nowregister').on("click",function () {
        $('.lrmanin-register').show();
        $('.lrmanin-login,.lrmanin-lookfor').hide();

    })


});

//登录
$(document).ready(function () {
    var user_Boolean = false;
    var password_Boolean = false;

    $('.reg_user').blur(function(){
        if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user1").val())){
            $('.user_hint1').html("✔").css("color","green");
            user_Boolean = true;
        }else {
            $('.user_hint1').html("×").css("color","red");
            user_Boolean = false;
        }
    });
// password
    $('.reg_password').blur(function(){
        if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password1").val())){
            $('.password_hint1').html("✔").css("color","green");
            password_Boolean = true;
        }else {
            $('.password_hint1').html("×").css("color","red");
            password_Boolean = false;
        }
    });
// click
    $("#login").click(()=>{
        $.post("./userlogin",{
            "username" :$("#username").val(),
            "password" :$("#password").val()
        },(data)=> {
            if (data.state === "1"){
                alert("登录成功");
                let userInfo = data;
                userInfo = JSON.stringify(userInfo);
                console.log(userInfo);
                sessionStorage.setItem("userInfo", userInfo);

                window.location= "/ycysx"
            }
            else  if ( data === "-1"){
                alert("密码不正确")
            }
            else  if ( data === "2"){
                alert("没有这个用户")
            }
        })
    });
});

//注册
$(document).ready(function () {

    var user_Boolean = false;
    var password_Boolean = false;
    var varconfirm_Boolean = false;
    var emaile_Boolean = false;
    var Mobile_Boolean = false;
    $('.reg_user').blur(function(){
        if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())){
            $('.user_hint').html("✔").css("color","green");
            user_Boolean = true;
        }else {
            $('.user_hint').html("×").css("color","red");
            user_Boolean = false;
        }
    });
    // password
    $('.reg_password').blur(function(){
        if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
            $('.password_hint').html("✔").css("color","green");
            password_Boolean = true;
        }else {
            $('.password_hint').html("×").css("color","red");
            password_Boolean = false;
        }
    });

    // password_confirm
    $('.reg_confirm').blur(function(){
        if (($(".reg_password").val())==($(".reg_confirm").val())){
            $('.confirm_hint').html("✔").css("color","green");
            varconfirm_Boolean = true;
        }else {
            $('.confirm_hint').html("×").css("color","red");
            varconfirm_Boolean = false;
        }
    });

    // Email
    $('.reg_email').blur(function(){
        if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())){
            $('.email_hint').html("✔").css("color","green");
            emaile_Boolean = true;
        }else {
            $('.email_hint').html("×").css("color","red");
            emaile_Boolean = false;
        }
    });

    // Mobile
    $('.reg_mobile').blur(function(){
        if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
            $('.mobile_hint').html("✔").css("color","green");
            Mobile_Boolean = true;
        }else {
            $('.mobile_hint').html("×").css("color","red");
            Mobile_Boolean = false;
        }
    });

    // click
    $("#register").click(function(){
        if(user_Boolean && password_Boolean && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true){
            $.post("./doregister",{
                    "username1": $("#username1").val(),
                    "password1": $("#password1").val(),
                    "phone"   : $("#phone").val(),
                    "email"   : $("#email").val()
                },function (result) {
                    if(result == -1){
                        alert("注册失败")
                    }
                    else if (result ==1) {
                        alert("注册成功");
                        window.location="/ycysx"
                    }
                    else if(result == 2){
                        alert("用户名已经注册")
                        $(":input").val("");
                    }
                }
            )
        }else {
            alert("请完善信息");
        }
    });

});



