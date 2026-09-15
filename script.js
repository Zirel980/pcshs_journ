// =========================================
// MOBILE MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


// =========================================
// CURRENT DATE
// =========================================

const dateElement = document.getElementById("currentDate");

const today = new Date();

const formattedDate = today.toLocaleDateString(
    "en-US",
    {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
);

dateElement.textContent = formattedDate;


// =========================================
// NEWSLETTER
// =========================================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for subscribing to The Laureate!"
    );

    newsletterForm.reset();

});
