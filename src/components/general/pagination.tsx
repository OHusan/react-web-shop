export const Pagination:
  React.FC<{
    arrLength: number,
    prevPage: any,
    changeCurrentPage: any,
    nextPage: any,
    currentPage: number
  }> =
  ({
    arrLength,
    prevPage,
    changeCurrentPage,
    nextPage,
    currentPage
  }) => {
    if(arrLength <= 1){
      return
    }

    const numbers = [...Array(arrLength + 1).keys()].slice(1)

    return (
      <nav className="w-full flex items-center justify-center mt-8">
        <ul className="flex items-center justify-center gap-3 p-2 w-fit rounded-md pagination-shadow text-sm">
          <li className="cursor-pointer p-2 hover:bg-primary rounded-md" onClick={prevPage}>
            Prev
          </li>
          {
            Array.from(numbers).map((number) => {
              return (
                <li key={number} onClick={() => changeCurrentPage(number)} className={`cursor-pointer hover:bg-primary flex items-center justify-center transition-colors duration-300 w-[2.6rem] h-[2.6rem] rounded-md p-2 ${currentPage === number ? 'bg-primary' : ''}`}>
                  {number}
                </li>
              )
            })
          }
          <li className="cursor-pointer p-2 hover:bg-primary rounded-md" onClick={nextPage}>
            Next
          </li>
        </ul>
      </nav>
    )
  }
