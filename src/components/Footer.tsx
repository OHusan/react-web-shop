import FooterInformation from './footer/footer-information'

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-black">
      <div className="container flex flex-col justify-between gap-8 lg:flex-row">
        <div>
          <img src="/logo.svg" alt="Logo" />
          <p className="my-6 max-w-[11.875rem] text-lg font-medium opacity-50">
            We help you find your dream plant
          </p>

          <div className="flex gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black border-opacity-50">
              <img src="/facebook.svg" alt="Facebook" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black border-opacity-50">
              <img src="/instagram.svg" alt="Instagram" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black border-opacity-50">
              <img src="/twitter.svg" alt="Twitter" />
            </div>
          </div>
        </div>

        <FooterInformation />
      </div>

      <div className="container mt-24">
        <p className="text-sm font-bold opacity-40">
          {new Date().getFullYear()} all Right Reserved Term of use <a href="#">GREENMIND</a>
        </p>
      </div>
    </footer>
  )
}
