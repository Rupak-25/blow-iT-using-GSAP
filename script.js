var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav Button",{
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    y:-40,
    delay: 1,
})
tl.from(".center1 h1",{
    opacity: 0,
    x:-300,
    duration: 0.5,
},"-=0.3")
tl.from(".center1 p",{
    opacity: 0,
    x:-300,
    duration: 0.5,
})
tl.from(".center1 Button",{
    opacity: 0,
    x:-300,
    duration: 0.5,
})
tl.from(".center2 img",{
    opacity: 0,
    duration: 0.5,
},"-=1.5")
tl.from(".services h3",{
    opacity: 0,
    duration: 1,
    x:-50,
},"=0.7")
tl.from(".services p",{
    opacity: 0,
    duration: 1,
    x:50,
},"=0.7")
// tl.from(".container",{
//     opacity: 1,
//     delay: 5,
//     duration: 20,
//     y:-100,
// })
// tl.to(".container",{
//     delay: 5,
//     display:none,
// })
