$(document).delegate('header .menu-btn', 'click', function(event) {
    event.preventDefault();

    jQuery('header nav').toggleClass('show');
});

