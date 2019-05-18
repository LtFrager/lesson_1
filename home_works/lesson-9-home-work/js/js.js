// alert('test - JavaScript!');
$(document).ready(function() {

    /* UPDATE - JS FILES WAS CHANGED */
    /* OLD FILES USED: 
     https://plugins.jquery.com/parallax/ 
     $(document).ready(function() { $('#scene').parallax(); }); 
    */

    /* NEW FILES USED:
     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
     https://cdnjs.cloudflare.com/ajax/libs/parallax/2.1.3/parallax.min.js
    */
    /* NEW DOCUMENT READY USED */
    $(document).ready(function() {
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    });
});