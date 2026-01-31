import WhyChooseCard from "../cards/WhyChooseCard"
import books from "../../assets/book.svg"
import musicNote from "../../assets/music_note.svg"
import rhythm from "../../assets/rhythm.svg" 
import globe from "../../assets/new_globe.svg"

function WhyChoose({title, description, imageSrc}) {
    return(
        <section className="bg-[#FBF3E6] pb-20" >
            <div className="text-center">
            <h1 className="text-4xl text-[#1E3A8A] p-4">Why Choose R&R Publishing</h1>
            <p className="text-lg text-[#3A3A3A] pb-12">Your gateway to authentic Latin American choral music</p>
            </div>
            <div className="flex flex-row justify-evenly">
            <WhyChooseCard imageSrc={books} title="Curated Collection" description="Expertly selected works from established and emerging Latin American composers and arrangers."></WhyChooseCard>
            <WhyChooseCard imageSrc={musicNote} title="Diverse Repertoire"  description="From traditional and folk-inspired works to contemporary compositions for a variety of ensembles and experience levels."></WhyChooseCard>
            <WhyChooseCard imageSrc={globe} title="Direct From Source" description="We partner directly with composers to provide authentic editions while ensuring artists are fairly compensated for their work."></WhyChooseCard>
            <WhyChooseCard imageSrc={rhythm} title="Curtural Richness" description="Music shaped by rich traditions, distinctive rhythms, and the stories that define Latin American musical heritage."></WhyChooseCard>
            </div>
      
        </section>
    )
}

export default WhyChoose;