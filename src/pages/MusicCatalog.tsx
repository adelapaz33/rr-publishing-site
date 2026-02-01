import scores from "../data/scores.json";
import MusicCard from "../components/cards/MusicCard";

function MusicCatalog({ }) {
    return <section className="catalog">
    <h1 className="text-4xl font-bold mb-8 text-center">Music Catalog</h1>
    <ul>{scores.map((score) => (
        <MusicCard
        key={score.id}
        title={score.title}
        composer={score.composer}
        arranger={score.arranger}
        voicing={score.voicing}
        cover={score.cover}

        />
    ))}</ul>
    </section>
}

export default MusicCatalog;