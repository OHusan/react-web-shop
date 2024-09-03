import { Plants } from "../../types"
import UseConvertedPrice from "../../utils/useConvertedPrice";

const HeroPlant: React.FC<{ currency: string, plant: Plants }> = ({ currency, plant }) => {
  return (
    <div key={plant.name} className="flex flex-col gap-3">
      <img
        src={plant.img}
        alt={plant.name}
        className="w-full aspect-[5/6] max-h-[21.25rem]"
      />
      <p className="text-lg font-medium">{plant.name}</p>
      <p className="text-lg font-medium opacity-50">
        {UseConvertedPrice(currency, plant.value)}
      </p>
    </div>
  )
}

export default HeroPlant
