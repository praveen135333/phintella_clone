var tl = gsap.timeline()
var ball =  document.querySelector("#ball")
gsap.to("#main",{
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        pin:true
    }
})
gsap.to(".container #ball",{
    scrollTrigger:{
        
    }
})