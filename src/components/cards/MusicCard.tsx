import React from "react";
function MusicCard ({title, composer, arranger, voicing, cover}) {
    return(
        <div className="musicCard">
            <img src={cover} alt={`${title} cover`}/>
            <h3>{title}</h3>
            <p>{composer ? `Composed by ${composer}` : `Arranged by ${arranger}`}</p>
            <p>{voicing}</p>
        </div>
    )
    
}

export default MusicCard;