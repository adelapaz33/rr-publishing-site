import Button from "../Button";
import HeroStripe from "./HeroStripe";
function Hero() {
    return(
        <main className="bg-[#FAF7F2]">
        <section className=" max-w-5xl mx-auto px-6 py-12 text-center">
     
        <h1 className="text-5xl text-[#1F3D2B]  tracking-tight">Choral music rooted in <span className="text-[#1F3D2B]">Latin American</span> voices</h1>
        <p className="mt-6 text-lg text=[#3A3A3A] max-w-2xl mx-auto">Discover extraordinary choral works by talented Latin American composers. Bringing diverse musical traditions and contemporary expressions to choirs worldwide.</p>
        </section>
    <HeroStripe/>
       <section className="mt-12 h-64 bg-gray-200 flex items-center justify-center rounded-md">
        <span className="text-gray-500">Hero Image Placeholder</span>
        <div>
        <Button href="/catalog" intent="primary" size="lg">Explore OurCatalog ></Button>
        <Button href="/about" intent="secondary" size="md">Submit Your Work</Button>
        </div>
       </section>
       </main>
    )
}

export default Hero; 