import { useEffect, useState } from "react";
import plants from "../../content/plants.json";
import { Button } from "../Button";
import { Plants, preferredValue } from "../../types";
import HeroPlant from "./hero-plant";

export default () => {
  const [currency, setCurrency] = useState(window.localStorage.getItem(preferredValue) ??  'USD')
  const sortedPlants = plants.sort((a, b) => Number(b.value) - Number(a.value)).slice(0, 3);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setCurrency(() => window.localStorage.getItem(preferredValue) ?? 'USD')
    })
  }, [currency])

  return (
    <div className="container flex justify-between mt-24">
      <div className="max-w-[15.625rem]">
        <p className="text-[2rem] font-bold">Best Selling Plants</p>
        <p className="text-lg font-medium mb-6 opacity-50">
          Easiest way to healthy life by buying your favorite plants
        </p>
        <Button text="See more" />
      </div>

      {sortedPlants.map((plant: Plants) => (
        <HeroPlant key={plant.name} currency={currency} plant={plant} />
      ))}
    </div>
  );
}
