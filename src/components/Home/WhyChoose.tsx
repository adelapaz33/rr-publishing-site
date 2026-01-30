import WhyChooseCard from "../cards/WhyChooseCard"

function WhyChoose({title, description, imageSrc}) {
    return(
        <section>
            <h1>Why Choose R&R Publishing</h1>
            <p>Your gateway to authentic Latin American choral music</p>
            <div className="flex flex-row justify-evenly">
            <WhyChooseCard title="Curated Collection" description="Expertly selected works from established and emerging Latin American composers and arrangers."></WhyChooseCard>
            <WhyChooseCard title="Diverse Repertoire" description="From traditional folk arrangements to new compositions for all ensemble types and skill levels."></WhyChooseCard>
            <WhyChooseCard title="Direct From Source" description="We work directly with our composers to ensure authentic editions and fair compensation for their artistry."></WhyChooseCard>
            <WhyChooseCard title="Curtural Richness" description="Experience the vibrant rhythms, harmonies, and stories of Latin American musical traditions."></WhyChooseCard>
            </div>
        </section>
    )
}

export default WhyChoose;