const keys=document.querySelectorAll("div")
const audios=document.querySelectorAll("audio")



document.addEventListener("keydown",function(x){
    const keycode=x.keyCode
    console.log(keycode)
    play(keycode)
}
)
function play(code){
    Array.from(keys).forEach(function(key){
      
       if(key.dataset.key.charCodeAt()==code){
        key.classList.add("playing")
        Array.from(audios).forEach(function(a){
            if(a.dataset.key==key.dataset.key){
                a.currentTime=0
                a.play()
            }
        })
       }
    })
}
Array.from(keys).forEach(key=>key.addEventListener("transitionend",function(){
    key.classList.remove("playing")
}))