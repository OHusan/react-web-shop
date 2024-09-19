import Search from "../general/search"

export default () => {
  return (
    <div className="container flex justify-around overflow-hidden rounded-3xl bg-primary">
      <div className="max-w-[33.75rem] py-12">
        <h1 className="text-[4rem] font-extrabold">Buy your dream plants</h1>

        <div className="mt-6 flex items-center gap-12">
          <div className="flex flex-col">
            <span className="text-[2rem] font-medium">50+</span>
            <span className="text-lg font-medium">Plant Species</span>
          </div>
          <span className="hidden h-16 border-l border-black lg:block" />
          <div className="flex flex-col">
            <span className="text-[2rem] font-medium">100+</span>
            <span className="text-lg font-medium">Customers</span>
          </div>
        </div>

        <Search classList="mt-12"/>
      </div>

      <div className="relative flex items-end justify-end">
        <img className="hidden lg:block" src="/rectangle.svg" alt="Rectangle" />
        <img className="absolute top-[8%]" src="/plant-image.png" alt="Plant image" />
        <img
          className="absolute right-0 top-[2%] -rotate-[36deg]"
          src="/spinning-arrow-left.svg"
          alt="Spinning arrow left"
        />
        <img
          className="absolute -left-1/2 bottom-[15%] hidden xl:block"
          src="/spinning-arrow-right.svg"
          alt="Spinning arrow right"
        />
      </div>
    </div>
  )
}
