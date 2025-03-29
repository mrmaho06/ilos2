document.addEventListener("DOMContentLoaded", function () {
    const evetButton = document.getElementById("evetButton");
    const parent = evetButton.parentElement;

    evetButton.addEventListener("mouseover", function () {
        let maxX = parent.clientWidth - evetButton.clientWidth - 10;
        let maxY = parent.clientHeight - evetButton.clientHeight - 10;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        evetButton.style.position = "absolute";
        evetButton.style.left = `${randomX}px`;
        evetButton.style.top = `${randomY}px`;
    });

    // Pop-up açılacak kısmı
    const hayirButton = document.getElementById("hayirButton");
    const popupModal = document.getElementById("popupModal");
    const closePopup = document.getElementById("closePopup");

    hayirButton.addEventListener("click", function () {
        popupModal.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        popupModal.style.display = "none";
    });

    // Pop-up dışında tıklama ile kapanmasını sağlamak
    window.addEventListener("click", function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });
});
