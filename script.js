/* ==================================================
   UPFRONT
   JAVASCRIPT
================================================== */


/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* ==================================================
   CURRENT DATE
================================================== */

const dateElement =
    document.getElementById("currentDate");


function updateDate() {

    const today = new Date();


    const formattedDate =
        today.toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    dateElement.textContent =
        formattedDate.toUpperCase();

}


updateDate();


/* ==================================================
   CLOSE MOBILE MENU AFTER CLICKING
================================================== */

const navigationLinks =
    document.querySelectorAll(
        ".nav-content a"
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* ==================================================
   NEWSLETTER
================================================== */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        alert(
            "Thank you for subscribing to UPFRONT!"
        );


        newsletterForm.reset();

    }
);
