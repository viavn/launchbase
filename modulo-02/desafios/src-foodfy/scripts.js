const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".recipes__cards")
const imgModal = document.querySelector("#recipe_img")

for (const card of cards) {
    card.addEventListener("click", function () {
        const imgSrc = card.querySelector('img').src
        modalOverlay.classList.add("active")
        imgModal.setAttribute('src', imgSrc)
    })
}

document.querySelector(".close_modal p").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    imgModal.setAttribute('src', '')
})