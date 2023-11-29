jQuery(document).ready(function () {
    console.log("FIRST", this);

    jQuery('h1').click(function () {
        console.log("h1", this);
    });

    jQuery('p').click(function () {
        console.log("paragraph", this);
    });

    jQuery('button').click(function () {
        console.log("button", this);
    });
});