import { Button } from "./Button"

export const Category = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[2rem] font-bold">Categories</h2>
        <p className="text-lg font-medium opacity-50">Find what you are looking for</p>
      </div>

      <div className="bg-primary mt-24 text-center">
        <div className="container flex flex-col lg:flex-row gap-8 pt-8 lg:pt-0 justify-between items-center">
          <div className="lg:-mt-24">
            <img src="/natural-plants.png" alt="Natural plants" />
            <p className="font-bold text-lg mt-3">Natural Plants</p>
          </div>
          <div className="lg:pt-12">
            <img src="/plant-accessories.png" alt="Plant accessories" />
            <p className="font-bold text-lg mt-3">Natural Plants</p>
          </div>
          <div className="lg:-mt-24">
            <img src="/artificial-plants.png" alt="Artificial plants" />
            <p className="font-bold text-lg mt-3">Natural Plants</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 mt-3 pb-28">
          <p className="font-medium text-lg opacity-50 w-[21.875rem]">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button text="Explore" />
        </div>
      </div>
    </>
  )
}
