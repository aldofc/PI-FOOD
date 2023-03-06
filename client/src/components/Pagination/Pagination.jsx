import React from 'react'

const Pagination = ({ totalCards,cardsPerPage,setCurrentPage }) => {

    let pages = []
    for (let index=1; index <= Math.ceil(totalCards / cardsPerPage); index++) {

    }
  return (
    <div>{pages.map((page,index) => {
        return (
            <button key={index} onClick={() => setCurrentPage(page)}>
                {page}
            </button>
        )
    })}</div>
  )
}

export default Pagination