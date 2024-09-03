export const AboutUs = () => {
  return (
    <>
      <div className="container text-center">
        <h2 className="font-bold text-[2rem]">About us</h2>
        <p className="font-medium text-lg opacity-50 mt-3">Order now and appreciate the beauty of nature</p>
      </div>

      <div className="container flex flex-col lg:flex-row items-center justify-center gap-9 lg:gap-6 mt-12 mb-[10.3125rem] text-center">
        <div className="flex flex-col items-center justify-center max-w-[25rem]">
          <div className="p-7 bg-primary rounded-full mb-6">
            <img src="/plant.svg" alt="Plant" />
          </div>
          <p className="font-bold text-lg">Large Assortment</p>
          <p className="font-medium text-lg opacity-50 mt-3">we offer many different types of products with fewer variations in each category.</p>
        </div>

        <div className="flex flex-col items-center justify-center max-w-[25rem]">
          <div className="p-7 bg-primary rounded-full mb-6">
            <img src="/package.svg" alt="Package" />
          </div>
          <p className="font-bold text-lg">Fast & Free Shipping</p>
          <p className="font-medium text-lg opacity-50 mt-3">4-day or less delivery time, free shipping and an expedited delivery option.</p>
        </div>

        <div className="flex flex-col items-center justify-center max-w-[25rem]">
          <div className="p-7 bg-primary rounded-full mb-6">
            <img src="/phone.svg" alt="Phone" />
          </div>
          <p className="font-bold text-lg">24/7 Support</p>
          <p className="font-medium text-lg opacity-50 mt-3">answers to any business related inquiry 24/7 and in real-time.</p>
        </div>
      </div>
    </>

  )
}
