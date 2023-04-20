$(document).ready(function(){
    $(".submitBtn").click(function(){
        let username = $("#username").val;
        let password = $("#password").val;
        console.log(username);
        $(".welcome").html(`Hello ${username}`);
    })
    
})