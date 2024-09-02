import HeroBestPlants from "./hero-section/hero-best-plants"
import HeroCard from "./hero-section/hero-card"

export const Hero = () => {
  return (
    <>
      <section className="min-h-screen mb-28">
        <HeroCard />
        <HeroBestPlants />
      </section>
    </>
  )
}
