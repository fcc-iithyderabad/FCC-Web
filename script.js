

gsap.registerPlugin(ScrollTrigger);
gsap.from(".titlecard", {
    duration: 1,
    y: "40",
    opacity: 0
})
gsap.from(".horizon-card", {
    duration: 1,
    y: "40",
    opacity: 0
})
gsap.from(".quote-span", {
    duration: 1,
    y: "40",
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: '.quote'
})
gsap.from(".arrow", {
    duration: 1,
    x: "-60",
    y: "60",
    opacity: 0,
    scrollTrigger: '.quote'
})

document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date("Feb 15, 2024 00:00:00").getTime();
    console.log(countDownDate);

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();
        // console.log(now);
        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the HTML
        $("#days").html(days );
        $("#hours").html(hours );
        $("#minutes").html(minutes );
        $("#seconds").html(seconds );

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "HORIZON HAS ARRIVED!!";
        }
    }, 1000);
});


