// --------------------------------------------------------------
// HTML Validator
// --------------------------------------------------------------

const htmlChecker =
    document.getElementById("html-checker");

if (htmlChecker) {

    htmlChecker.setAttribute(
        "href",
        "https://validator.w3.org/nu/?doc=" + location.href
    );

}


// --------------------------------------------------------------
// CSS Validator
// --------------------------------------------------------------

const cssChecker =
    document.getElementById("css-checker");

if (cssChecker) {

    cssChecker.setAttribute(
        "href",
        "https://jigsaw.w3.org/css-validator/validator?uri=" +
        location.href
    );

}


// --------------------------------------------------------------
// Mobile Navigation
// --------------------------------------------------------------

function myFunction() {

    const nav =
        document.getElementById("myTopnav");

    if (!nav) {
        return;
    }

    if (nav.className === "topnav") {

        nav.className += " responsive";

    } else {

        nav.className = "topnav";
    }
}