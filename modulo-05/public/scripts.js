const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (const item of menuItems) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active')
  }
}

// Paginação
function paginate(selectedPage, totalPages) {
  let pages = [],
    oldPage

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2
    const pageBeforeSelectedPage = currentPage >= selectedPage - 2

    if (firstAndLastPage || pagesAfterSelectedPage && pageBeforeSelectedPage) {

      if (oldPage && currentPage - oldPage > 2) {
        pages.push('...')
      }

      if (oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1)
      }

      pages.push(currentPage)
      oldPage = currentPage
    }
  }

  return pages
}

const pagination = document.querySelector('.pagination')
const page = +pagination.dataset.page
const totla = +pagination.dataset.total
