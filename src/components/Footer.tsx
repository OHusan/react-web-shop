import FooterInformation from "./footer/footer-information"

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 ">
      <div className="container flex justify-between">
        <div>
          <img src="/logo.svg" alt="Logo" />
          <p className="my-6 font-medium text-lg opacity-50 max-w-[11.875rem]">We help you find your dream plant</p>

          <div className="flex gap-6">
            <div className="rounded-full border border-black flex items-center justify-center border-opacity-50 w-12 h-12">
              <img src="/facebook.svg" alt="Facebook" />
            </div>
            <div className="rounded-full border border-black flex items-center justify-center border-opacity-50 w-12 h-12">
              <img src="/instagram.svg" alt="Instagram" />
            </div>
            <div className="rounded-full border border-black flex items-center justify-center border-opacity-50 w-12 h-12">
              <img src="/twitter.svg" alt="Twitter" />
            </div>
          </div>
        </div>

        <FooterInformation />
      </div>

      <div className="container mt-24">
        <p className="text-lg font-bold opacity-40">
          {new Date().getFullYear()} all Right Reserved Term of use <a href="#">GREENMIND</a>
        </p>
      </div>
    </footer>
  )
}
