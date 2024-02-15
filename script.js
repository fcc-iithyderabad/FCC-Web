// import fs from "fs"
// import fetch from "node-fetch"
// async function fetchDataAndWriteToFile() {
//     try {
//         // Fetch data from API
//         const response = await fetch('GET https://api.medium.com/v1/users/fcc-iith/publications');
//         const data = await response.json();
        
//         // Convert data to JSON string
//         const jsonData = JSON.stringify(data, null, 2); // Adding null and 2 for pretty formatting

//         // Write JSON data to a file
//         fs.writeFileSync('data.json', jsonData);
        
//         console.log('Data has been written to data.json');
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// fetchDataAndWriteToFile();


gsap.registerPlugin(ScrollTrigger);
gsap.from(".titlecard", {
    duration: 0.5,
    y: "40",
    opacity: 0
})
gsap.from(".horizon-card", {
    duration: 0.5,
    y: "40",
    opacity: 0
})
gsap.from(".quote-span", {
    duration: 0.5,
    y: "40",
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: '.quote'
})
gsap.from(".arrow", {
    duration: 0.5,
    x: "-60",
    y: "60",
    opacity: 0,
    scrollTrigger: '.quote'
})

gsap.to(".engage-grid", {
    opacity: 0,
    duration: 1, 
    scrollTrigger: {
      trigger: ".engagements",
      start: "bottom center",
      end: "bottom top",
      scrub: true,
    },
});

gsap.from(".flagship", {
      opacity: 0,
      rotateX: 0,
      duration: 1, 
      scrollTrigger: {
        trigger: ".flagship",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Set the date we're counting down to
//     const countDownDate = new Date("Feb 16, 2024 00:00:00").getTime();
//     console.log(countDownDate);

//     // Update the countdown every 1 second
//     const x = setInterval(function () {
//         // Get the current date and time
//         const now = new Date().getTime();
//         // console.log(now);
//         // Calculate the remaining time
//         const distance = countDownDate - now;

//         // Calculate days, hours, minutes, and seconds
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         // Display the countdown in the HTML
//         $("#days").html(days );
//         $("#hours").html(hours );
//         $("#minutes").html(minutes );
//         $("#seconds").html(seconds );

//         // If the countdown is over, display a message
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById("countdown").innerHTML = "HORIZON HAS ARRIVED!!";
//         }
//     }, 1000);
// });


// ANimation for horizon page
gsap.from(".iith-heading-hor", {
    duration: 0.5,
    y: "40",
    opacity: 0
})
gsap.from(".hor-heading-hor", {
    duration: 0.5,
    y: "40",
    opacity: 0
})
gsap.from(".hor-button", {
    duration: 0.5,
    y: "40",
    opacity: 0
})




$(".what-card").on('click',function(){
    window.open('https://fcc-iith.medium.com/' )
    return false;
})
$("#flagship-card-upper").on('click',function () {
    window.open('pages/horizon.html');
    return false;
})
$(".horizon-button").on('click',function(){
    window.open('pages/Horizon.html' )
    return false;
})
$(".subscribe-button").on('click',function(){
    window.open('https://fcc-iith.medium.com/' )
    return false;
})
$(".hor-button").click(function(){
    window.open('https://www.instagram.com/fcc_iith/' )
    return false;
})

document.querySelector('.scroll').addEventListener('scroll', function() {
    console.log('Event worked');
});

    // Pause the animation on hover to prevent interference with user interaction
    $(".hor-sponsors-carousel-1 img").hover(
        function() {
          $(".hor-sponsors-carousel-1").css("animation-play-state", "paused");
        },
        function() {
          $(".hor-sponsors-carousel-1").css("animation-play-state", "running");
        }
      );
      

      



  