export const AboutUs = () => {
  return (
    <>
      <div className="container text-center">
        <h2 className="text-[2rem] font-bold">About us</h2>
        <p className="mt-3 text-lg font-medium opacity-50">
          Order now and appreciate the beauty of nature
        </p>
      </div>

      <div className="container mb-[10.3125rem] mt-12 flex flex-col items-center justify-center gap-9 text-center lg:flex-row lg:gap-6">
        <div className="flex max-w-[25rem] flex-col items-center justify-center">
          <div className="mb-6 rounded-full bg-primary p-7">
            <img src="/plant.svg" alt="Plant" />
          </div>
          <p className="text-lg font-bold">Large Assortment</p>
          <p className="mt-3 text-lg font-medium opacity-50">
            we offer many different types of products with fewer variations in each category.
          </p>
        </div>

        <div className="flex max-w-[25rem] flex-col items-center justify-center">
          <div className="mb-6 rounded-full bg-primary p-7">
            <img src="/package.svg" alt="Package" />
          </div>
          <p className="text-lg font-bold">Fast & Free Shipping</p>
          <p className="mt-3 text-lg font-medium opacity-50">
            4-day or less delivery time, free shipping and an expedited delivery option.
          </p>
        </div>

        <div className="flex max-w-[25rem] flex-col items-center justify-center">
          <div className="mb-6 rounded-full bg-primary p-7">
            <img src="/phone.svg" alt="Phone" />
          </div>
          <p className="text-lg font-bold">24/7 Support</p>
          <p className="mt-3 text-lg font-medium opacity-50">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </>
  )
}
