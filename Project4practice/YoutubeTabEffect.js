// YOUTUBE TAB CHANGE EFFECT_______________________________
document.addEventListener('visibilitychange', ()=>{
    if (document.visibilityState === "visible") {
        console.log('active tab');
        document.title= 'youtube'
        document.querySelector(".video-stream").play()
    }else{
        console.log('inactive tab');
        document.title='come back'
        document.querySelector(".video-stream").pause()
    }
});