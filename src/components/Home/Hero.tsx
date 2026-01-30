import Button from "../Button";
function Hero() {
    return(
        <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="text-center">
     
        <h1 className="text-4xl font-bold tracking-tight">R&R Publishing</h1>
        <h2 className="mt-2 text-xl text-gray-600">Rama y Raices</h2>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">Discover extraordinary choral works by talented Latin American composers. Bringing diverse musical traditions and contemporary expressions to choirs worldwide.</p>
        </section>
    
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