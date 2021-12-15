

let last_know_scroll_position = 0;
let ticking = false;

/* loading 시, count */
function countUp() {
    console.log('counting');
    const countBox = $('#Count');
    let count = 0;

    const counting = setInterval(function() {
        if(count === 100) {
            clearInterval(counting);
            setTimeout(function() {
                $('body').removeClass('loading');
            }, 35);
            return false;
        }
        count += 1;
        countBox.text(count);
    }, 30);
}



/* window load */
$(document).ready(function() {
    // countUp();
});

/* Mouse Scroll Wheel Event */
$(window).on('wheel', function() {

})