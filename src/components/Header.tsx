import { NavLink } from 'react-router-dom'
import HeaderDropdown from './header/header-dropdown'
import navigation from '../content/navigation.json'
import { Navigation } from '../types'
import ThemeSwitcher from "./context/theme-switcher"

export const Header = () => {
  return (
    <header className="container flex items-center justify-between py-10">
      <div className="flex items-center justify-between gap-24">
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center justify-between gap-12 font-sans text-lg">
            {navigation.map((nav: Navigation) => {
              return (
                <NavLink
                  key={nav.name}
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'transition-smooth hover:text-primary'
                  }
                  to={nav.route}
                >
                  {nav.name}
                </NavLink>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-12">
        <ThemeSwitcher />

        <img
          className="hidden h-6 w-6 cursor-pointer lg:block"
          src="/cart.svg"
          alt="Shopping cart"
        />
        <img className="hidden h-6 w-6 cursor-pointer lg:block" src="/user.svg" alt="User" />

        <HeaderDropdown />

        <button
          id="hamburger"
          className="no-tap-highlight z-50 cursor-pointer bg-white lg:hidden"
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
