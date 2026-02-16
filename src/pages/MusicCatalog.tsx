import scores from "../data/scores.json";
import MusicCard from "../components/cards/MusicCard";

function MusicCatalog({ }) {
    return <section className="catalog bg-[#FFF8F0]">
    <h1 className="text-4xl font-bold mb-8 text-center">Music Catalog</h1>
    <ul>{scores.map((score) => (
        <MusicCard
        key={score.id}
        title={score.title}
        composer={score.composer}
        Arranged={score.arranged}
        voicing={score.voicing}
        cover={score.cover}
        duration={score.duration}
        accompaniment={score.accompanimentType}


        />
    ))}</ul>
    </section>
}

export default MusicCatalog;