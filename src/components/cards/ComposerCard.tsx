import React from "react";
import ExtendableSection from "../ExtendableSection";

function ComposerCard ({headShot, name, composerBio}) {
    return(
        <div>
            <img src={headShot}/> 
            <h2>{name}</h2>
            <p>{composerBio}</p>
            <ExtendableSection title="Works by this composer">
                <ul>
                    {works.map((work) => {
                        <li key={work.id}>{work.title}</li>
                    })}
                </ul>
            </ExtendableSection>
        </div>
    )
}

export default ComposerCard;