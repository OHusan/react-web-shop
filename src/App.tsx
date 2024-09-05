import './index.css'
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { AboutUs } from "./components/AboutUs"
import { Category } from "./components/Category"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Category />
      </main>
    </>
  )
}

export default App
