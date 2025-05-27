var ball = document.querySelector("#ball");

gsap.to(ball,{
    y:640,
    scrollTrigger:{
        trigger:"body",
        pin:true,
        scrub:3,
    }
});
