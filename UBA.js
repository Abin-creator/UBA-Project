var picarray=['image1.jfif','image2.jfif','image3.jfif','image4.jfif','image5.jfif']
var currentpic= -1;
var img0 = new Array();
for(i=0;i<picarray.length;i++){
    img0[i]=new Image();
    img0[i].src=picarray[i];
    
}


function swapImage(){
    currentpic=(++currentpic>picarray.length)?0:currentpic;
    imgCont.src=img0[currentpic].src;
    setTimeout(swapImage,3000);
    if(currentpic==(picarray.length-1)){
        currentpic=-1;
    }
}
window.onload=function(){
    imgCont = document.getElementById('imgBanner');
    swapImage();
    
}
