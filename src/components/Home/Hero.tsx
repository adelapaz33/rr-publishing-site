import Button from "../Button";
import HeroStripe from "./HeroStripe";
import officialLogo from "../../assets/FullLogo.png";


function Hero() {
  return (
    <main className="bg-[#FFF8F0] text-center">
      {/* Logo */}
      <img
        src={officialLogo}
        alt="Rames Y Raices Publishing"
        className="mx-auto h-24 w-auto mb-8"
      />

      {/* Hero Text */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#E94F37]">
          Choral music rooted in{" "}
          <span className="text-[#F4C430]">Latin American</span> voices
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#2C2C2C] max-w-2xl mx-auto">
          Discover extraordinary choral works by talented Latin American composers. Bringing diverse musical traditions and contemporary expressions to choirs worldwide.
        </p>
      </section>

      <HeroStripe/>

      {/* CTA Buttons */}
      <section className="mt-12 h-64 bg-[#FFF8F0] flex flex-col sm:flex-row items-center justify-center gap-6 rounded-md px-6">

        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <Button href="/catalog" intent="primary" size="lg">
            Explore Our Catalog
          </Button>
          <Button href="/about" intent="outline" size="md">
            Submit Your Work
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Hero;