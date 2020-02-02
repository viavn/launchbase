const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const footer = document.querySelector("#links-footer")
const cards = document.querySelectorAll(".card")

function minimizeModal() {
  modal.classList.remove('maximize-modal')
  minimizeBtn.style.display = 'block'
  maximizeBtn.style.display = 'none'
}

for (const card of cards) {
  card.addEventListener("click", function () {
    const courseId = card.getAttribute("id")
    footer.classList.add("hidden")
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function () {
  footer.classList.remove("hidden")
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""

  if (modal.classList.contains('maximize-modal')) {
    minimizeModal()
  }
})

const minimizeBtn = document.querySelector('.maximize-modal--button')
const maximizeBtn = document.querySelector('.minimize-modal--button')

document.querySelector(".maximize-modal--button").addEventListener("click", function () {
  modal.classList.add('maximize-modal')
  minimizeBtn.style.display = 'none'
  maximizeBtn.style.display = 'block'
})

document.querySelector(".minimize-modal--button").addEventListener("click", function () {
  minimizeModal()
})
