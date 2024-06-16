import $ from "jquery";

$(document).ready(function() {
    $(".list-item:first").hover(function() {
        $(this).toggleClass("active");
    });

    // $(".list-item:eq(2)").on("click", function() {
    //     $(".image:even").fadeToggle("slow");
    // });

    $(".list-item:eq(4)").on("click", function() {
        $(".image:odd").animate({
            opacity: "toggle",
            height: "toggle",
        }, 2000);
    });

    // Image Animation

    const images = $(".image");
    let imageAnimation;

    $(".list-item:first").on("click", function() {
        if (!imageAnimation) {
            imageAnimation = images[0].animate([
                { transform: "translateY(0) rotate(0)", filter: "opacity(100%)" },
                { transform: "translateY(100px) rotate(180deg)", filter: "opacity(50%)" },
                { transform: "translateY(-100px) rotate(270deg)", filter: "opacity(75%)" },
                { transform: "translateY(0) rotate(360deg)", filter: "opacity(100%)" }
            ], {
                duration: 3000,
                iterations: Infinity
            });
        } else if (imageAnimation.playState === "paused") {
            imageAnimation.play();
        } else {
            imageAnimation.pause();
        }
    });
});
