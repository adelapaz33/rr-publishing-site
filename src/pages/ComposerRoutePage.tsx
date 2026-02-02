// this is a route-level component. Its job is to respond to a URL, 
// resolve which composer is being viewed,
// load / select the right data,
// pass that data into presentational components


import { useParams } from "react-router-dom"
import composerData from "../data/composers.json"
import scores from "../data/scores.json"
import ComposerPage from "./ComposerPage";

function ComposerRoutePage() { // routes do not need props 
    const { composerId } = useParams();

    //find composer based on the route param
    const selectedComposer = composerData.find((composer) => composer.id === composerId);
    
    if (!selectedComposer) {return <p>Composer not found.</p>;}

    // get works from this composer/arranger 
    const works = scores.filter((score) => score.composer === selectedComposer.name || score.arranged === selectedComposer.name);
    

    return(
       <ComposerPage 
       headShot={selectedComposer.headshot}
       name={selectedComposer.name}
       composerBio={selectedComposer.bio}
       works={works}
       />
    );
}

export default ComposerRoutePage



