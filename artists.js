function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}


window.onload = function(){
    if(GetURLParameter("mode")=="moreInfo"){
        var name = GetURLParameter("name");
        name = name.replace("+"," ");
        document.getElementById("home").style.display = "none";
        document.getElementById("moreInfo").style.display = "inline-block";
        document.getElementById("infoName").innerHTML = name;
        
    }
    if(GetURLParameter("mode")=="" || GetURLParameter("mode")=="home" || GetURLParameter("mode")== undefined){
           document.getElementById("home").style.display = "inline-block";
    }
}