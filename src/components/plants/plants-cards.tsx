import { useState } from "react"
import HeroPlant from "../../components/hero-section/hero-plant"
import plants from '../../content/plants.json'
import { Pagination } from "../general/pagination"
import Search from "../general/search"
import Sorting from "../general/sorting"

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npages = Math.ceil(plants.length / recordsPerPage);

  const prevPage = (e: Event) => {
    e.preventDefault()
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = (e: Event) => {
    e.preventDefault()
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const changeCurrentPage = (number: number) => {
    setCurrentPage(number)
  }

  const displayRecords = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const records = displayRecords.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="container bg-primary rounded-3xl py-2 flex flex-col xs:flex-row gap-4 justify-between">
        <Search small classList="basis-1/2" searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Sorting />
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-6 lg:gap-y-9 text-center mt-11">
        {
          records.map((plant) => {
            return (
              <HeroPlant key={plant.name} plant={plant} />
            )
          })
        }
      </div>
      <Pagination
        arrLength={npages}
        prevPage={prevPage}
        nextPage={nextPage}
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}
