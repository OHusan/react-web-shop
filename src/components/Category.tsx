import { Button } from './Button'

export const Category = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[2rem] font-bold">Categories</h2>
        <p className="text-lg font-medium opacity-50">Find what you are looking for</p>
      </div>

      <div className="mt-24 bg-primary text-center">
        <div className="container flex flex-col items-center justify-between gap-8 pt-8 lg:flex-row lg:pt-0">
          <div className="lg:-mt-24">
            <img src="/natural-plants.png" alt="Natural plants" />
            <p className="mt-3 text-lg font-bold">Natural Plants</p>
          </div>
          <div className="lg:pt-12">
            <img src="/plant-accessories.png" alt="Plant accessories" />
            <p className="mt-3 text-lg font-bold">Natural Plants</p>
          </div>
          <div className="lg:-mt-24">
            <img src="/artificial-plants.png" alt="Artificial plants" />
            <p className="mt-3 text-lg font-bold">Natural Plants</p>
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center justify-center gap-6 pb-28">
          <p className="max-w-[21.875rem] text-lg font-medium opacity-50">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button text="Explore" link="/plants" />
        </div>
      </div>
    </>
  )
}
