/*
Author: Elijah Golnik
File Name: script.js
Date: 11/06/2021
*/

/* Hamburger menu function */
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
