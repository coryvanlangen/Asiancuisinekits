var slide1 = document.getElementById("canvas1");
var context1 = slide1.getContext("2d");
var slide2 = document.getElementById("canvas2");
var context2 = slide2.getContext("2d");
var fps = 50;
var slideImg1 = new Image();
slideImg1.src = 'refugee.jpg';
var slideImg2 = new Image();
slideImg2.src = 'jewel.jpg';
var rootRef = "";
window.onload = function(){
    setInterval(draw,1000/fps);
}

function draw(){
    slide1.style.width = '100%';
    slide1.width = slide1.offsetWidth;
    slide1.height = window.innerHeight*0.8;
    slide2.style.width = '100%';
    slide2.width = slide2.offsetWidth;
    slide2.height = window.innerHeight*0.8;
    if(slide1.width < 600 && slide2.width < 600){
        slide1.height = window.innerHeight*0.6;
        slide2.height = window.innerHeight*0.6;
    }
    if(slide1.width < 400 && slide2.width < 400){
        slide1.height = window.innerHeight*0.3;
        slide2.height = window.innerHeight*0.3;
    }
    if(slide1.width !=0){
        var newHeight = ((slide1.width)/slideImg1.width)*slideImg1.height;
        context1.drawImage(slideImg1,0,0,slide1.width,newHeight);   
    }
    if(slide2.width != 0){
        var height2 = ((slide2.width)/slideImg2.width)*slideImg2.height;
        context2.drawImage(slideImg2,0,0,slide2.width,height2);   
    }    
}