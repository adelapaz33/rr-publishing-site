import FeaturedScoresCard from "../cards/FeaturedScoresCard"
import scores from "../../data/scores.json"
import Button from "../Button";

function FeaturedScores() {
    const FeaturedScores = scores.filter(score => score.featured).slice(0, 3);
    return(
        <section className="bg-[#FFF8F0]">
            <div className="text-center" >
            <h2 className="text-4xl text-[#1E3A8A] p-4">Featured Scores</h2>
            <p className="text-lg text-[#3A3A3A] pb-12">Explore recent additions to our catalog of Latin American choral works</p>
            <div className="flex flex-row justify-evenly">
               {FeaturedScores.map(score => (
                <FeaturedScoresCard key={score.id} cover={score.cover} title={score.title} composer={score.composer} arranger={score.arranger} />
               ))}
            </div>
            <div className="p-16">
                <Button href="/catalog" intent="primary" size="lg">View Full Catalog</Button>
            </div>
            </div>
        </section>
    )
}

export default FeaturedScores;