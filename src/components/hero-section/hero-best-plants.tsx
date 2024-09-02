import plants from "../../content/plants.json"
import { Plants } from "../../types/plants"

import { Button } from "../Button"

export default () => {
  const sortedPlants = plants.sort((a, b) => Number(b.value) - Number(a.value)).slice(0,3)

  return(
    <div className="container flex justify-between mt-24">
      <div className="max-w-[15.625rem]">
        <p className="text-[2rem] font-bold">Best Selling Plants</p>
        <p className="text-lg font-medium mb-6 opacity-50">Easiest way to healthy life by buying your favorite plants </p>
        <Button text="See more" />
      </div>

      {
        sortedPlants.map((plant: Plants) => {
          return (
            <div key={plant.name} className="flex flex-col gap-3">
              <img src={plant.img} alt={plant.name} className="w-full aspect-[5/6] max-h-[21.25rem]"/>
              <p className="text-lg font-medium">{plant.name}</p>
              <p className="text-lg font-medium opacity-50">{plant.value}</p>
            </div>
          )
        })
      }
    </div>
  )
}
