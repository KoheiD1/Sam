
document.addEventListener("DOMContentLoaded", function () {
    const blobs = document.getElementById("blob");
    const track = document.getElementById("image-track");

    if (game1) {
        game1.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }
    
    if (game2) {
        game2.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }

    if (game3) {
        game3.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }
    
    if (game4) {
        game4.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }

    if (game5) {
        game5.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }

    if (game6) {
        game6.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }

    if (game7) {
        game7.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }

    if (game8) {
        game8.addEventListener("click", function () {
            window.location.href = "/page/game1.html";
        });
    }

    window.onmousedown = e =>{
    track.dataset.mouseDownAt = e.clientX;
    };

    window.onmousemove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;

        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        nextPercentage = Math.min(0, Math.max(nextPercentage, -100));

        track.dataset.percentage = nextPercentage;


        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, {duration: 1200, fill: "forwards"})

        for(const image of track.getElementsByClassName("image")){

            image.animate({
                objectPosition: `${nextPercentage + 100}% center`
            }, {duration: 1200, fill: "forwards"})
        }
    }

    window.onmouseup = () =>{
        track.dataset.mouseDownAt = 0;
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        blobs.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
        },{duration: 3000, fill:"forwards"});
    };
});






