document.addEventListener("DOMContentLoaded", function () {
    const zigzagSigns = document.querySelectorAll(".zigzag-sign");
    const skillSections = document.querySelectorAll(".skill-section");

    zigzagSigns.forEach((sign, index) => {
        sign.addEventListener("click", () => {
            hideAllSections();
            showSkillSection(index);
            toggleStarRating(index);
        });

        sign.addEventListener("mouseover", () => {
            showSkillDescription(index);
        });

        sign.addEventListener("mouseout", () => {
            hideSkillDescription(index);
        });
    });

    function hideAllSections() {
        skillSections.forEach((section) => {
            section.classList.add("hidden");
        });
    }

    function showSkillSection(index) {
        skillSections[index].classList.remove("hidden");
    }

    function showSkillDescription(index) {
        const skillDescription = document.querySelector(`#description-${index}`);
        skillDescription.classList.remove("hidden");
    }

    function hideSkillDescription(index) {
        const skillDescription = document.querySelector(`#description-${index}`);
        skillDescription.classList.add("hidden");
    }

    function toggleStarRating(index) {
        const starRating = document.querySelector(`#star-rating-${index}`);
        starRating.classList.toggle("hidden");
    }
});
