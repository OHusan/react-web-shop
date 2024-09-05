import HeaderDropdown from "./header/header-dropdown"

export const Header = () => {
  return (
    <header className="container py-10 flex justify-between items-center">
      <div className="flex justify-between items-center gap-24">
        <img src="/logo.svg" alt="Logo"/>

        <nav className="hidden lg:block">
          <ul className="flex justify-between items-center gap-12 text-lg font-sans">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Contacts</li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-center gap-12">
        <img className="hidden lg:block w-6 h-6 cursor-pointer" src="/cart.svg" alt="Shopping cart" />
        <img className="hidden lg:block w-6 h-6 cursor-pointer" src="/user.svg" alt="User" />
        <HeaderDropdown />

        <button
          id="hamburger"
          className="no-tap-highlight cursor-pointer bg-white z-50"
          aria-controls="menu"
          aria-label="hamburger-menu"
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
      </div>
    </header>
  )
}
