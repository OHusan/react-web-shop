export default () => {
  return (
    <div className="container bg-primary rounded-3xl flex justify-around overflow-hidden">
      <div className="max-w-[33.75rem] py-12">
        <h1 className="text-[4rem] font-extrabold">Buy your dream plants</h1>

        <div className="flex items-center gap-12 mt-6">
          <div className="flex flex-col">
            <span className="text-[2rem] font-medium">50+</span>
            <span className="text-lg font-medium">Plant Species</span>
          </div>
          <span className="hidden lg:block h-16 border-l border-black" />
          <div className="flex flex-col">
            <span className="text-[2rem] font-medium">100+</span>
            <span className="text-lg font-medium">Customers</span>
          </div>
        </div>

        <div className="mt-12 relative max-w-[28.125rem]">
          <input type="text" name="text" id="search" placeholder="What are you looking for?" className="w-full p-[1.125rem] rounded-xl" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 p-[14px] bg-primary rounded-xl cursor-pointer">
            <img src="/search.svg" alt="Search" className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="relative flex items-end justify-end">
        <img className="hidden lg:block" src="/rectangle.svg" alt="Rectangle" />
        <img className="absolute top-[8%]" src="/plant-image.png" alt="Plant image" />
        <img className="absolute top-[2%] right-0 -rotate-[36deg]" src="/spinning-arrow-left.svg" alt="Spinning arrow left" />
        <img className="hidden xl:block absolute bottom-[15%] -left-1/2" src="/spinning-arrow-right.svg" alt="Spinning arrow right" />
      </div>
    </div>
  )
}
