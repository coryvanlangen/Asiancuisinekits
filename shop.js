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
var allProducts = {
    
};
var pageMode = "home";
var infoId = "";
var accNames = ["Purse","Bag","Backpack"];
var accPrices = [11,13,19];
var accId = ["Pu1","Bg3","Bp7"];
var accAuth = ["Alan Turing","Robert Babbage","Jonh Doe"];
var dollNames= ["Rag Doll","Baby Doll","Toy Doll"];
var dollPrices= [10,15,8];
var dollId = ["rgh","bd1","td3"];
var dollAuth = ["Alan Turing","John Doe","Jonh Doe"];
var jewelryNames= ["Bracelot","Necklace","Rings"];
var jewelryPrices=[5,9,3];
var jewleryId = ["jhz","dd3","tty"];
var jewleryAuth = ["Alan Turing","John Doe","Robert Babbage"];
window.onload = function(){
    for(var i=0;i<jewelryNames.length;i++){
        var productInfo = {
            name: jewelryNames[i],
            price: jewelryPrices[i],
            auth: jewleryAuth[i]
        };
        allProducts[jewleryId[i]] = productInfo;
    }
    for(var i=0;i<dollNames.length;i++){
        var productInfo = {
            name: dollNames[i],
            price: dollPrices[i],
            auth: dollAuth[i]
        };
        allProducts[dollId[i]] = productInfo;
    }
    for(var i=0;i<accNames.length;i++){
        var productInfo = {
            name: accNames[i],
            price: accPrices[i],
            auth: accAuth[i]
        };
        allProducts[accId[i]] = productInfo;
    }
    if(GetURLParameter("mode") != ""){
        pageMode = GetURLParameter("mode");
    }
    if(pageMode == "moreInfo"){
        infoId = GetURLParameter("infoId");
        document.getElementById("moreInfo").style.display = "inline-block";
        document.getElementById("home").style.display = "none";
        document.getElementById("infoName").innerHTML = allProducts[infoId].name;
        document.getElementById("infoPrice").innerHTML = "$"+allProducts[infoId].price+" - Buy!";
        document.getElementById("personLink").innerHTML = allProducts[infoId].auth;
        document.getElementById("personLink").href = "artists.html?mode=moreInfo&name="+allProducts[infoId].auth.replace(" ","+");
    }
    if(pageMode == "jewelry"){
        var jewelryDiv = document.getElementById("jewelry");
        document.getElementById("jewelry").style.display = "inline-block";
        document.getElementById("home").style.display = "none";
        for(var i=0;i<jewelryNames.length;i++){
            var parentDiv = document.createElement("div");
            parentDiv.classList.add("col-xs-12");
            parentDiv.classList.add("col-md-6");
            parentDiv.classList.add("col-lg-4");
            var newPanel = document.createElement("div");
            newPanel.classList.add("panel");
            newPanel.classList.add("panel-primary");
            newPanel.innerHTML = '<div class="panel-heading"><h3 class="panel-title">'+jewelryNames[i]+"  - $"+jewelryPrices[i]+'</h3></div><div class="panel-body"><img src="https://maxcdn.icons8.com/iOS7/PNG/512/Ecommerce/jewelry-512.png" width="100%"><center><form method="get" action="shop.html"><input type="hidden" name="mode" value="moreInfo"/><input type="hidden" name="infoId" value="'+jewleryId[i]+'"/><input type="submit" class="btn btn-success" value="More Info!"/></form></center></div>';
            parentDiv.appendChild(newPanel);
            jewelryDiv.appendChild(parentDiv);
        }
    }
    if(pageMode == "dolls"){
        var dollDiv = document.getElementById("doll");
        document.getElementById("doll").style.display = "inline-block";
        document.getElementById("home").style.display = "none";
        for(var i=0;i<dollNames.length;i++){
            var parentDiv = document.createElement("div");
            parentDiv.classList.add("col-xs-12");
            parentDiv.classList.add("col-md-6");
            parentDiv.classList.add("col-lg-4");
            var newPanel = document.createElement("div");
            newPanel.classList.add("panel");
            newPanel.classList.add("panel-primary");
            newPanel.innerHTML = '<div class="panel-heading"><h3 class="panel-title">'+dollNames[i]+"  - $"+dollPrices[i]+'</h3></div><div class="panel-body"><img src="https://maxcdn.icons8.com/iOS7/PNG/512/Ecommerce/jewelry-512.png" width="100%"><center><form method="get" action="shop.html"><input type="hidden" name="mode" value="moreInfo"/><input type="hidden" name="infoId" value="'+dollId[i]+'"/><input type="submit" class="btn btn-success" value="More Info!"/></form></center></div>';
            parentDiv.appendChild(newPanel);
            dollDiv.appendChild(parentDiv);
        }
    }
    if(pageMode == "accessories"){
        var accDiv = document.getElementById("access");
        document.getElementById("access").style.display = "inline-block";
        document.getElementById("home").style.display = "none";
        for(var i=0;i<dollNames.length;i++){
            var parentDiv = document.createElement("div");
            parentDiv.classList.add("col-xs-12");
            parentDiv.classList.add("col-md-6");
            parentDiv.classList.add("col-lg-4");
            var newPanel = document.createElement("div");
            newPanel.classList.add("panel");
            newPanel.classList.add("panel-primary");
            newPanel.innerHTML = '<div class="panel-heading"><h3 class="panel-title">'+accNames[i]+"  - $"+accPrices[i]+'</h3></div><div class="panel-body"><img src="https://maxcdn.icons8.com/iOS7/PNG/512/Ecommerce/jewelry-512.png" width="100%"><center><form method="get" action="shop.html"><input type="hidden" name="mode" value="moreInfo"/><input type="hidden" name="infoId" value="'+accId[i]+'"/><input type="submit" class="btn btn-success" value="More Info!"/></form></center></div>';
            parentDiv.appendChild(newPanel);
            accDiv.appendChild(parentDiv);
        }
    }
}
