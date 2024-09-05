import HeroPlant from "../../components/hero-section/hero-plant"
import plants from '../../content/plants.json'
import Search from "../general/search"
import Sorting from "../general/sorting"

export default () => {
  return (
    <>
      <div className="container bg-primary rounded-3xl py-2 flex justify-between">
        <Search small classList="basis-1/2"/>
        <Sorting />
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-6 lg:gap-y-9 text-center mt-11">
        {
          plants.map((plant) => {
            return (
              <HeroPlant key={plant.name} plant={plant} />
            )
          })
        }
      </div>
    </>
  )
}
