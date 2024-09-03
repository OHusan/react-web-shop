import './index.css'
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { AboutUs } from "./components/AboutUs"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
      </main>
    </>
  )
}

export default App
