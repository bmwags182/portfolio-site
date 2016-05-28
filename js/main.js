window.onload = function() {
    function main() {
        var menuButton = document.getElementById("mobile-menu");
        var closeButton = document.getElementById("mobile-close");
        var menu = document.getElementById("side-menu");

        menuButton.onclick = function() {
            document.getElementById("side-menu").className = "open";
        }

        closeButton.onclick = function() {
            menu.className.replace( /(?:^|\s)open(?!\S)/g, '');
        }
    }
}