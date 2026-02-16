import MusicCard from "../cards/MusicCard";
import scores from "../../data/scores.json";

function BrowseMusic () {
    return (
        <>
        <h2>Browse Music</h2>
        <ul>{scores.map((score) => (
            <MusicCard
            key={score.id}
            title={score.title}
            composer={score.composer}
            arranged={score.arranged}
            voicing={score.voicing}
            cover={score.cover}
            duration={score.duration}
            accompaniment={score.accompanimentType}
    
    
            />
        ))}</ul>

</>
        
    )
}

export default BrowseMusic;