function addListener() {
    const cards = document.querySelectorAll('.recipes__cards')

    for (const card of cards) {
        card.addEventListener('click', function () {
            const recipeId = card.getAttribute('id')
            window.location.href = `/recipe/${recipeId}`
        })
    }
}

function setActiveMenu(selectedView) {
    const activeClass = 'active-link'
    const menu = document.querySelector('.menu')
    menu.querySelector(selectedView).classList.add(activeClass)

}

function toggleDiv(element) {
    const className = element.className

    const divs = {
        ingredient__toggle: () => '.ingridients',
        how_to__toggle: () => '.preparation__steps',
        ingredient_info__toggle: () => '.more__info'
    }

    const classToToggle = divs[className]
    const divToToggle = document.querySelector(classToToggle())

    element.innerHTML = divToToggle.classList.contains('toggle')
        ? 'ESCONDER'
        : 'MOSTRAR';

    document.querySelector(classToToggle()).classList.toggle('toggle')
}