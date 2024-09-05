import './index.css'
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { AboutUs } from "./components/AboutUs"
import { Category } from "./components/Category"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <main className="mb-24">
        <Hero />
        <AboutUs />
        <Category />
      </main>
      <Footer />
    </>
  )
}

export default App
