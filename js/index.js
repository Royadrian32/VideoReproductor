   
    const video =document.querySelector('#video')
    const play =document.querySelector('#play')
    const pause =document.querySelector('#pause')
    const backward =document.querySelector('#backward')
    const forward =document.querySelector('#forward')
    
    play.addEventListener('click',handleplay)
    pause.addEventListener('click',handlepause)
    
    function handleplay() {
        video.play()
        play.hidden = true
        pause.hidden = false
        console.log('le diste click al boton de play')
    }
    
    function handlepause() {
        video.pause()
        pause.hidden = true
        play.hidden = false        
        console.log('le diste click al boton de pause')
    }


    backward.addEventListener('click',handlebackward)

    function handlebackward (){
        video.currentTime=video.currentTime - 10
        console.log ('para atras 10 segundos',video.currentTime)
    
        //tambien se puede usar  video.currentTime-= 10//
    }

    forward.addEventListener('click',handleforward)

    function handleforward (){
        video.currentTime=video.currentTime + 10
   console.log ('para adelante 10 segundos',video.currentTime)
    }
    const progress= document.querySelector('#progress')
    video.addEventListener('loadedmetada',handleloaded)
    video.addEventListener('timeupdate',handletimeupdate)

    function handleloaded(){
        progress.max =video.duration
    console.log ('ha cargado mi video',video.duration)
    }
    function handletimeupdate (){
        progress.value = video.currentTime
        console.log ('Tiempo actual',video.currentTime)
     }

     progress.addEventListener('input',handleinput)

     function handleinput(){
         video.currentTime=progress.value
         console.log(progress.value)
     }