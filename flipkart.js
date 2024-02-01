// JavaScript for the dropdown
document.addEventListener("DOMContentLoaded", function () {
    var signInDropdown = document.querySelector(".signin");
    var dropdownContent = document.querySelector(".dropdown-content");

    signInDropdown.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.signin') && !event.target.matches('.dropdown-content')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
