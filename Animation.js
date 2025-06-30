gsap.to('.box',{
    duration: 2,
    x: 600,
    repeat: -1,
     rotation: 360,
    scale: 2,
    backgroundColor: 'red',
    yoyo: true,
    repeatDelay: 1,
    border: '2px solid rgb(104, 27, 175)',
    borderRadius: '50%',
    onhover: function() {
        gsap.to('.box', {
            boxshadow: '10px 10px 20px  rgba(182, 137, 174, 0.85)',
            duration: 0.5,
        });
    },
   

})
gsap.to('.box1',{
    duration: 2,
      y: 300,
    repeat: -1,
     rotation: 360,
    scale: 2,
  yoyo: true,
    repeatDelay: 1,
    backgroundColor: 'red',
    border: '2px solid rgb(104, 27, 175)',
    borderRadius: '50%',


   
   

})
gsap.to('.box2',{
    duration: 2,
    x:-600,
    repeat: -1,
     rotation: 360,
    scale: 2,
    backgroundColor: 'red',
  yoyo: true,
    repeatDelay: 1,
    border: '2px solid rgb(104, 27, 175)',
    borderRadius: '50%',

   

})