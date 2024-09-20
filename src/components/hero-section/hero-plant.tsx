import { useEffect, useState } from "react"
import { Plants, preferredValue } from '../../types'
import UseConvertedPrice from '../../utils/useConvertedPrice'

const HeroPlant: React.FC<{ plant: Plants }> = ({ plant }) => {
  const [currency, setCurrency] = useState(window.localStorage.getItem(preferredValue) ?? 'USD')

  useEffect(() => {
    window.addEventListener('storage', () => {
      setCurrency(() => window.localStorage.getItem(preferredValue) ?? 'USD')
    })
  }, [currency])

  return (
    <div key={plant.name} className="flex flex-col gap-3 overflow-hidden">
      <img src={plant.img} alt={plant.name} className="h-auto w-full lg:max-h-[21.25rem] cursor-pointer hover:scale-105 transition-smooth" />
      <p className="text-lg font-medium dark:text-red-500">{plant.name}</p>
      <p className="text-lg font-medium opacity-50">{UseConvertedPrice(currency, plant.value)}</p>
    </div>
  )
}

export default HeroPlant
