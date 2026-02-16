import React from "react";
import Button from "../Button";

function MusicCard ({title, composer, Arranged, voicing, cover, duration, accompaniment}) {
    return(
        <div className="musicCard flex flex-row">
            <img src={cover} alt={`${title} cover`}/>
            <div className="">
            <h3>{title}</h3>
            <p>{composer ? `Composed by ${composer}` : `Arranged by ${Arranged}`}</p>
            <p>{voicing}</p>
            <p>{duration}</p>
            <p>{accompaniment}</p>
            <Button href="" intent="outline" size="sm">
            View Details
          </Button>
            </div>
        </div>
    )
    
}

export default MusicCard;