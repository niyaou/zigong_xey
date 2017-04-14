/**
 * Created by niyaou on 2017/4/14.
 */
$(function(){


    // 登录验证
    $("#signin").click(function(){

        // 做表单输入校验
        var userId = $("#inputEmail");
        var password = $("#inputPassword");
        var msg = "";
        alert(userId.val());
            // 获取表单中的参数
            var params = $("#loginForm").serialize();
            // 发送登录的异步请求
            $.post("${ctx}/loginAjax.action", params, function(data, status){
                alert(data.tip);
            }, "json");

    });


})();