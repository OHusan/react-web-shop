import { useEffect, useState } from "react"

const THEME = 'theme'

export const ThemeSwitcher = () => {
  const windowThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const [lightTheme, setLightTheme] = useState(() => {
    const themePreference = localStorage.getItem(THEME) ?? windowThemePreference
    return themePreference
  })

  const lightThemeHandler = () => {
    setLightTheme(() => (lightTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    if(!localStorage.getItem(THEME)){
      localStorage.setItem(THEME, windowThemePreference)
    } else {
      localStorage.setItem(THEME, (lightTheme as string))
    }

    if(lightTheme !== "light"){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [lightTheme])

  return (
    <button onClick={lightThemeHandler}>
      <img src={lightTheme === 'light' ? '/sun.svg' : '/moon.svg'} alt={lightTheme === 'light' ? 'Sun' : 'Moon'} className="w-5 h-5" />
    </button>
  )
}
