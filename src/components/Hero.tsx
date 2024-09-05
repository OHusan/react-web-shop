import HeroBestPlants from './hero-section/hero-best-plants'
import HeroCard from './hero-section/hero-card'

export const Hero = () => {
  return (
    <>
      <section className="mb-28 min-h-screen">
        <HeroCard />
        <HeroBestPlants />
      </section>
    </>
  )
}
