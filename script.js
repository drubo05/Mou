/* =========================================
   TaRa FLOWER WEBSITE
========================================= */


const bloomBtn =
    document.getElementById("bloomBtn");

const startScreen =
    document.getElementById("startScreen");

const flowerSection =
    document.getElementById("flowerSection");


/* =========================================
   TAP TO BLOOM
========================================= */

bloomBtn.addEventListener(
    "click",
    function () {

        /* Prevent double click */

        bloomBtn.disabled = true;


        /* First page disappear */

        startScreen.classList.add("hide");


        /*
         * Wait for first page
         * to disappear
         */

        setTimeout(
            function () {

                /*
                 * Show second page
                 */

                flowerSection.classList.add(
                    "active"
                );

            },
            700
        );

    }
);