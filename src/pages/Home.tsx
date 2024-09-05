import { AboutUs } from '../components/AboutUs'
import { Category } from '../components/Category'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <main className="mb-12">
      <Hero />
      <AboutUs />
      <Category />
    </main>
  )
}
