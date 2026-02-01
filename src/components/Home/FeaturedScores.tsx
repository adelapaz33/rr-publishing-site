import FeaturedScoresCard from "../cards/FeaturedScoresCard"
import scores from "../../data/scores.json"
import Button from "../Button";

function FeaturedScores() {
    const FeaturedScores = scores.filter(score => score.featured).slice(0, 3);
    return(
        <section>
            <div>
            <h2 className="text-4xl">Featured Scores</h2>
            <p className="text-lg">Explore recent additions to our catalog of Latin American choral works</p>
            <div className="flex flex-row justify-evenly">
               {FeaturedScores.map(score => (
                <FeaturedScoresCard key={score.id} cover={score.cover} title={score.title} composer={score.composer} arranger={score.arranger} />
               ))}
            </div>
            <div>
                <Button href="/catalog" intent="primary" size="lg">View Full Catalog</Button>
            </div>
            </div>
        </section>
    )
}

export default FeaturedScores;