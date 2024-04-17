$(document).ready(function() {
    let events = true;
    $(".competitions").hide();

    $(".competitions-link").on('click', function() {
        console.log(":comp -> eve");
        if (events) {
            $(".events").hide();
            $(".competitions").show();
            events = false;
        }
    });

    $(".events-link").on('click', function() {
        console.log(":eve -> comp");
        if (!events) {
            $(".events").show();
            $(".competitions").hide();
            events = true;
        }
    });
    $("#tradequest-button").on('click',function(){
        window.open('https://community.stockgro.club/form/be53531c-1d2e-4631-8e94-1eda8809ed46' )
        return false;
    })
    $("#equityx-button").on('click',function(){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfLfXp3ZDF6Es3Sy4I422GQJ6jhew9IatczXtz576yZDxDSOA/viewform' )
        return false;
    })
    $("#prodx-button").on('click',function(){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdnL3NII_IdJ5w05XLHSbjcwlLBt3uN_bo89cpKPNrw-IgbwQ/viewform' )
        return false;
    })
   $("#mergers-button").on('click',function(){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdx4QIYzft6Tjkapozbgugg9lBvNB_bA-8Wsq7LzZYhtYQNw/viewform' )
        return false;
    }) 
   $(".insta").on('click',function(){
        window.open('https://www.instagram.com/fcc_iith/' )
        return false;
    }) 
   $(".insta-fire").on('click',function(){
        window.open('https://www.instagram.com/p/C3VF8g2omls/' )
        return false;
    }) 
   $(".insta-sid").on('click',function(){
        window.open('https://www.instagram.com/p/C3UVKk3I48c/' )
        return false;
    }) 
   $(".insta-connect").on('click',function(){
        window.open('https://www.instagram.com/p/C3X_ec5IL-f/' )
        return false;
    }) 
   $(".insta-4").on('click',function(){
        window.open('https://www.instagram.com/p/C3W2p8wogl-/' )
        return false;
    }) 
   $(".prodigy").on('click',function(){
        window.open(' https://forms.gle/crLbuH8AkJbdjUYX7' )
        return false;
    }) 
});

