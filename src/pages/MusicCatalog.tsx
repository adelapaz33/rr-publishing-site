import scores from "../data/score.json";

function MusicCatalog() {
    return <>
    <h1>Music Catalog</h1>
    <ul>{scores.map((score) => (
        <li key={score.id}>{score.title}</li>
    ))}</ul>
    </>
}

export default MusicCatalog;