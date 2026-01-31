import WhyChooseCard from "../cards/WhyChooseCard"

function WhyChoose({title, description, imageSrc}) {
    return(
        <section className="bg-[#FFFFFF]" >
            <div className="text-center">
            <h1 className="text-4xl text-[#1F3D2B]">Why Choose R&R Publishing</h1>
            <p className="text-lg text-[#3A3A3A]">Your gateway to authentic Latin American choral music</p>
            </div>
            <div className="flex flex-row justify-evenly bg=[#FAF7F2]">
            <WhyChooseCard title="Curated Collection" description="Expertly selected works from established and emerging Latin American composers and arrangers."></WhyChooseCard>
            <WhyChooseCard title="Diverse Repertoire"  description="From traditional and folk-inspired works to contemporary compositions for a variety of ensembles and experience levels."></WhyChooseCard>
            <WhyChooseCard title="Direct From Source" description="We partner directly with composers to provide authentic editions while ensuring artists are fairly compensated for their work."></WhyChooseCard>
            <WhyChooseCard title="Curtural Richness" description="Music shaped by rich traditions, distinctive rhythms, and the stories that define Latin American musical heritage."></WhyChooseCard>
            </div>
      
        </section>
    )
}

export default WhyChoose;