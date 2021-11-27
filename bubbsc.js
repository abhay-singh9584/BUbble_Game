var bubb=document.querySelector("#bubbel")
var bottom=document.querySelector("#bottom")
var timer=60;
var score=0;
var rname=0;
var t=``
function showbubbel(){
    
    for(i=0;i<80;i++){
        t=t+`<div id="bubbel">
        <h4>${Math.floor(Math.random()*10)}</h4>
    </div>`
    }
    document.querySelector("#bottom").innerHTML=t
}
var h1=document.querySelector("#h1")
showbubbel()
function starttimer(){
    setInterval(function(){
        if(timer<0){
            h1.innerHTML=`Game Over <br> Your Score is <span>${score}`
            h1.style.display="initial"
            
            bottom.style.display="none"
        }
        else{
            document.querySelector("#timerc").textContent=timer
            timer--
        }
    },1000)
}
function pickrandom(){
    rname=Math.floor(Math.random()*10)
    document.querySelector("#random").innerHTML=rname
}
function scorec(){
    score=score+10
    document.querySelector("#score").textContent=score
}
starttimer();
pickrandom()
bottom.addEventListener("click",function(dets){
    t=``
    showbubbel()
    // console.log(Number(dets.target.textContent))
    var x=Number(dets.target.textContent);
    console.log(x)
    
    
    if(x===rname){
        console.log("hii")
        scorec()
        pickrandom()
    }
    
})
