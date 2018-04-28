//修改显示和消失
$(document).ready(function () {
    $("#clickxinxi").on({
      click:function () {
           $(".number2").show();
           $(".number1").hide();
      }
    });
    $("#backhome").on({
      click:function () {
          $(".number1").show();
          $(".number2").hide();
      }
    })
});

//进行修改
$(document).ready(function(){
    $("#clickxiugai").click(function(){
        $.post("/changeuserinfos",
            {
                "userID":$("#userID").val(),
                "usersex":$("#usersex").val(),
                "userage":$("#userage").val(),
                "userphone":$("#userphone").val(),
                "useremail":$("#useremail").val()
            },
            function(result){
                if (result=="-1"){alert("设置失败")}
                else if (result=="1"){
                    alert("设置成功");
                    window.location= "/ycysx/userinfos"
                }
            });
    });
});


