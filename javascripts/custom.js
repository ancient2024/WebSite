$(document).delegate('header .menu-btn', 'click', function(event) {
    event.preventDefault();

    jQuery('header nav').toggleClass('show');
});

$(document).delegate('#close-cookies', 'click', function(event) {
    event.preventDefault();

    jQuery('.modal-cookie').addClass('d-none');
});

$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip({
        container: '.page'
    })

    $(".grt-cookie").grtCookie({
        // Main text and background color
       // textcolor: "#333",
       // background: "#FFCD69",
        // Button colors
      //  buttonbackground: "#c40b14",
      //  buttontextcolor: "#fff",
        // Duration in days
        duration: 90,
    });
})

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5af0eb39227d3d7edc250ace/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

"use strict";!function(t,e){var r=e.currentScript;if(r){var n=function(){(n.q=n.q||[]).push(arguments)};t.gsc=t.gsc||n;var s=new XMLHttpRequest;s.open("get","https://l.getsitecontrol.com/k4yod5z7.json",!0),s.onload=function(){var n=JSON.parse(s.responseText);if(n&&n.script){var c=e.createElement("script");c.onload=function(){t.gsc.start&&t.gsc.start(n)},c.src=n.script.mjs||n.script,r.parentNode.insertBefore(c,r)}},s.send(null)}}(window,document);