function confire()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    if(username.length==0|password.length==0)
    {
        document.getElementById("demo").innerHTML=("请填写用户名和密码。");
        var s1=document.getElementById("div1");
        s1.style.display='block';
        return false;
    }
    if(username!="tom"|password!="123")
    {
        document.getElementById("demo").innerHTML=("您填写的用户名或密码错误。");
        var s2=document.getElementById("div1");
        s2.style.display='block';
        return false;

    }
    if(username=="tom"&password=="123")
    {
        window.location.href="https://mail.swpu.edu.cn/?permanent";
        return true;
    }
}