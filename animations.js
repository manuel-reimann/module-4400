
//Registering Plugins
gsap.registerPlugin(TextPlugin);

//Timelines for everything
const tl_intro = gsap.timeline()
const tl_logo = gsap.timeline().pause()
const tl_choose = gsap.timeline().pause()
const tl_bulbasaur = gsap.timeline().pause()
const tl_charmander= gsap.timeline().pause()
const tl_squirtle = gsap.timeline().pause()
const tl_restart = gsap.timeline().pause()

//Clickable Actions
document.querySelector('.button-restart').addEventListener('click', ()=> {
    tl_intro.restart()
    window.location.reload();
})


//Other Functions
gsap.utils.random(0, 1);
let random = gsap.utils.random(0, 100, true);
const elRandom = random();
console.log(elRandom)


function charizardRandom(){
if (elRandom >= 50) {
    return 'img/gifs/charizard-x.gif';
} 
    return 'img/gifs/charizard-y.gif';
}





//Start of Timeline Intro -----------------------------------------------------
tl_intro.set(".button-restart", {
    autoAlpha: 0,
}).set(".bg-image", {
    autoAlpha: 0,
})
.set(".intro", {
    autoAlpha: 0 
})
.to(".intro", {
    autoAlpha: 1,
    text: "Discover a brand new Mega System", 
    duration: 2,
    ease: "slow(0.7, 0.7, false)"
})
.to(".intro-2", {
    text: "...", 
    duration: 0.8,
    ease: "slow(0.7, 0.7, false)",
    repeat: 2,
    
})
.to(".intro-2", {
    autoAlpha: 0
})
.to(".intro", {
    y: -300,
    ease: "bounce.out",
    color:"#000",
    
})
.to(".container", {
    background: "#FFF" 
}, "-=0.3")
.fromTo(".yellow-top",{
    autoAlpha: 0,
    duration: 2,
    y: 400,
   
  }, {
    autoAlpha: 1,
    y: 0,
  }, "+=0.3")
.fromTo(".yellow-bottom",{
    autoAlpha: 0,
    duration: 2,
    y: -400,
   
  }, {
    autoAlpha: 1,
    y: 0,
  }, "-=0.3")
.fromTo(".yellow-right",{
    autoAlpha: 0,
    duration: 2,
    x: -711,
   
  }, {
    autoAlpha: 1,
    x: 0,
  }, "-=0.3")
.fromTo(".yellow-left",{
    autoAlpha: 0,
    duration: 2,
    x: 711,
   
  }, {
    autoAlpha: 1,
    x: 0,
    onComplete: () => tl_logo.resume()
  }, "-=0.3")


//Start of Timeline Logo
tl_logo.fromTo(".logo-pogo",{
    autoAlpha: 0,
    width: "0"
   
  }, {
    autoAlpha: 1,
    x: 0,
    duration: 3,
    width: "60%",
    ease: "elastic.out(1, 0.3)",
  })
  .fromTo(".glow",{
    autoAlpha: 0,
    width: 100,
    x: -400,
    y: -50,
   
  },  {
    autoAlpha: 1,
    x: 400,
    y: 50,
    width: "60%",
    duration: 0.2,
    
  }, "-=0.2")
  .set(".glow", {
    autoAlpha: 0 
}
)
.to(".yellow-top", {
    duration: 0.3, 
    y: -30
})
.to(".yellow-left", {
    duration: 0.3, 
    x: -30
})
.to(".yellow-bottom", {
    duration: 0.3, 
    y: 30
})
.to(".yellow-right", {
    duration: 0.3, 
    x: 30
})
.set(".intro",{
    autoAlpha: 0
})
.to(".logo-pogo", {
    width:"1000%",
    duration: 1, 
    autoAlpha: 0,
    onComplete: () => tl_choose.resume()
})


//Start of Choose sequence
tl_choose.set(".bg-image",{
    autoAlpha: 1
})
.to(".txt-choose", {
    autoAlpha: 1,
    text: "Choose your Starter!", 
    duration: 2,
    ease: "slow(0.7, 0.7, false)"
})
.to(".txt-choose", {
    y: -180,
    ease: "bounce.out",
})
.fromTo(".card-bulbasaur", {
    autoAlpha: 0,
    scale: 1.5,
    ease: "elastic.out(1, 0.2)",
    
},{
    autoAlpha: 1,
    x: -300,
    scale: 1,
    delay: 0.5
})

.fromTo(".card-charmander", {
    autoAlpha: 0,
    scale: 1.5,
    ease: "elastic.out(1, 0.2)",
    
},{
    autoAlpha: 1,
    scale: 1,
    delay: 0.5
})
.fromTo(".card-squirtle", {
    autoAlpha: 0,
    scale: 1.5,
    ease: "elastic.out(1, 0.2)",
    
},{
    autoAlpha: 1,
    scale: 1,
    delay: 0.5,
    x: 300,
    onComplete: () => {
        
        document.querySelector('.card-bulbasaur').addEventListener('click', ()=> {
            tl_bulbasaur.play();
            let hoverBulba = document.getElementById("bulba");
            hoverBulba.classList.toggle("bulba-hover");
        });

        document.querySelector('.card-charmander').addEventListener('click', ()=> { 
            tl_charmander.play();
            let hoverCharm = document.getElementById("charm");
            hoverCharm.classList.toggle("charm-hover");
        });

        document.querySelector('.card-squirtle').addEventListener('click', ()=> {
            tl_squirtle.play();
            let hoverSquirt = document.getElementById("squirt");
            hoverSquirt.classList.toggle("squirt-hover");
        });
        
    }
})

//Start of Timeline Bulbasaur
tl_bulbasaur.set(".card-bulbasaur", {
    background: "rgba(255,255,255,0)",
    border: "none" ,
    x: -20,
    y: 250,
    
})
.set(".card-charmander", {
    autoAlpha: 0
})
.set(".card-squirtle", {
    autoAlpha: 0
})
.to(".txt-choose", {
    autoAlpha: 0
})

//////////////////////
.to(".evolution", {
    autoAlpha: 0.9,
    delay: 1
})
.set(".bulbasaur", {
    autoAlpha: 0,
    duration: 3
})
.to(".card-bulbasaur", {
    ease: "circ.out",
    y: -200,
    duration: 3,
})
.to(".card-bulbasaur", {
    ease: "circ.out",
    y: 0,
    duration: 2
})
.set(".bg-image", {
    autoAlpha: 0,
})
.to(".bg-image", { 
    attr: { src: 'img/bgs/space.jpeg'  },
    autoAlpha: 1
})
.set(".evolution", {
    autoAlpha: 0,
})
.set(".bulbasaur", { 
    attr:  {src: 'img/gifs/venusaur-mega.gif'},
    autoAlpha: 1,
    ease: "slow(0.7, 0.7, false)",
    scale: 3
})
.set(".card-bulbasaur", {
    autoAlpha: 1
})
.fromTo(".bulbasaur", { 
    autoAlpha: 1,
}, 
{
    delay: 5,
    autoAlpha: 0,
    onComplete: () => tl_restart.resume()
})








//Start of Timeline Charmander
tl_charmander.set(".card-charmander", {
    background: "rgba(255,255,255,0)",
    border: "none" ,
    x: -20,
    y: 250,
})
.set(".card-bulbasaur", {
    autoAlpha: 0
})
.set(".card-squirtle", {
    autoAlpha: 0
})
.to(".txt-choose", {
    autoAlpha: 0
})
//////////////////////
.to(".evolution", {
    autoAlpha: 0.9,
    delay: 1
})
.set(".charmander", {
    autoAlpha: 0,
    duration: 3
})
.to(".card-charmander", {
    ease: "circ.out",
    y: -200,
    duration: 3,
})
.to(".card-charmander", {
    ease: "circ.out",
    y: 0,
    duration: 2
})
.set(".bg-image", {
    autoAlpha: 0,
})
.to(".bg-image", { 
    attr: { src: 'img/bgs/space.jpeg'  },
    autoAlpha: 1
})
.set(".evolution", {
    autoAlpha: 0,
})
.set(".charmander", { 
    attr:  {src: charizardRandom()},
    autoAlpha: 1,
    ease: "slow(0.7, 0.7, false)",
    scale: 3
})
.set(".card-charmander", {
    autoAlpha: 1
})

.fromTo(".charmander", { 
    autoAlpha: 1,
}, 
{
    delay: 5,
    autoAlpha: 0,
    onComplete: () => tl_restart.resume()
})






//Start of Timeline Squirtle
tl_squirtle.set(".card-squirtle", {
    background: "rgba(255,255,255,0)",
    border: "none" ,
    x: -20,
    y: 250,
})
.set(".card-bulbasaur", {
    autoAlpha: 0
})
.set(".card-charmander", {
    autoAlpha: 0
})
.to(".txt-choose", {
    autoAlpha: 0
})
//////////////////////
.to(".evolution", {
    autoAlpha: 0.9,
    delay: 1
})
.set(".squirtle", {
    autoAlpha: 0,
    duration: 3
})
.to(".card-squirtle", {
    ease: "circ.out",
    y: -200,
    duration: 3,
})
.to(".card-squirtle", {
    ease: "circ.out",
    y: 0,
    duration: 2
})
.set(".bg-image", {
    autoAlpha: 0,
})
.to(".bg-image", { 
    attr: { src: 'img/bgs/space.jpeg'  },
    autoAlpha: 1
})
.set(".evolution", {
    autoAlpha: 0,
})
.set(".squirtle", { 
    attr:  {src: 'img/gifs/mega-blastoise.gif'},
    autoAlpha: 1,
    ease: "slow(0.7, 0.7, false)",
    scale: 3
})
.set(".card-squirtle", {
    autoAlpha: 1
})
.fromTo(".squirtle", { 
    autoAlpha: 1,
}, 
{
    delay: 5,
    autoAlpha: 0,
    onComplete: () => tl_restart.resume()
})



//Timeline Restart
tl_restart.set(".button-restart", {
    autoAlpha: 1,
    duration: 1,
    onComplete: () => tl_restart.pause()
})

